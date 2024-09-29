"use client";
import React, { useState, useEffect } from "react";
import OppTextarea from "@/components/OppTextarea";
import { BiLink } from "react-icons/bi";
import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Opportunity } from "@/types";

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

interface TableRowProps extends Opportunity {}

const TableRow: React.FC<TableRowProps> = ({
  id,
  title,
  user_id,
  description,
  industry,
  provider,
  season,
  isfor,
  type,
  location,
  mode,
  typelabel,
  admin_notes,
  contact_email,
  website,
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [adminNotes, setAdminNotes] = useState(admin_notes);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [oppImages, setOppImages] = useState([]);
  const [oppStatus, setOppStatus] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const oppId = parseInt(id);
        const data: any = await getOpportunityImages(oppId);
        const approved: boolean = await getOpportunityStatus(oppId);

        setLoading(false);
        setOppImages(data);
        //@ts-ignore
        setOppStatus(approved);
      } catch (error) {
        console.error("Error fetching opportunity images:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleOnChange = async (checked: boolean) => {
    const { error: errorAddingNotes } = await supabase
      .from("opportunities")
      .update({ admin_notes: null })
      .eq("id", id)
      .select();
    //@ts-ignore
    setOppStatus(checked);

    const { error: errorChangingStatus } = await supabase
      .from("opportunity_statuses")
      .update({ approved: checked })
      .eq("opportunity_id", id)
      .select();

    if (errorAddingNotes || errorChangingStatus) {
      toast.error("Could not approve!");
    } else {
      toast.success("Success!");
      router.refresh();
    }
  };

  const encryptThis = (text: any) => {
    let result = "";
    let key: any = process.env.payloadKey;
    for (let i = 0; i < text.length; i++) {
      const textChar = text.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);
      const encryptedChar = String.fromCharCode(textChar ^ keyChar);
      result += encryptedChar;
    }
    console.log(" original is ", text, " BUT result is ", result);

    return result;
  };

  const handleOnChangeNotes = async (value: any) => {
    const { data, error } = await supabase
      .from("opportunities")
      .update({ admin_notes: value })
      .eq("id", id)
      .select();

    if (error !== null) {
      toast.error("Error Adding Notes/Comments! Please try again.");
    }
  };

  const handleClick = async () => {
    const [{ admin_notes: adminNotes }] = await getOpportunity(parseInt(id));

    if (adminNotes === undefined || adminNotes === null) {
      toast.error(
        "Please add some notes/comments before you send your message"
      );
      return;
    }

    const subject = String(encryptThis("Please review your opportunity."));

    const res = await fetch(`/api/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: await String(encryptThis(String([contact_email]))),
        subject,
        operation: await String(encryptThis("ReviewOpportunityAgain")),
        content: await String(encryptThis(adminNotes)),
      }),
    });

    const emailResponse = await res.json();

    if (emailResponse === null) {
      toast.error("Could not send!");
    } else {
      toast.success("Email Sent!");
      setButtonDisabled(true);
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300">
      <td className="w-4 p-4">
        <div className="flex items-center">
          {oppStatus === null ? (
            <div>
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 dark:border-royalyellow border-royalblue"></div>
            </div>
          ) : (
            <input
              id={`checkbox-table-${id}`}
              type="checkbox"
              onChange={(e) => handleOnChange(e.target.checked)}
              checked={oppStatus}
              className="w-4 h-4 text-blue-60 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
          )}

          <label htmlFor={`checkbox-table-${id}`} className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium whitespace-nowrap text-royalyellow"
      >
        <div className="ps-3">
          <div className="text-lg font-semibold">{title}</div>
          <div className="font-normal text-gray-500">{provider}</div>
        </div>
      </th>
      {oppStatus ? (
        <>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
        </>
      ) : (
        <>
          <td className="px-6 py-4">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="bg-royalyellow text-white font-semibold px-4 py-1 rounded-md"
              onClick={() =>
                (
                  document.getElementById(`modal_${id}`) as HTMLDialogElement
                )?.showModal()
              }
            >
              View comments
            </button>
            <dialog id={`modal_${id}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Comments for:{" "}
                  <span className=" text-royalyellow">{title}</span>
                </h3>
                <div className="py-4">
                  <OppTextarea
                    cols={900}
                    onChange={(e) => {
                      setAdminNotes(e.target.value);
                      handleOnChangeNotes(e.target.value);
                    }}
                    value={adminNotes}
                    placeholder="If there are any issues, concerns or questions with this opportunity, please add them here to resend and inform the user."
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royalyellow"
                  />
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </td>
          <td className="px-6 py-4">
            <button
              type="button"
              onClick={handleClick}
              title="Resend your comments about this opportunity to this user."
              disabled={buttonDisabled}
              className="text-white bg-royalblue border-royalyellow border-dashed font-semibold px-4 py-1 rounded-md transition duration-300"
            >
              Resend comments
            </button>
          </td>
        </>
      )}

      <td className="px-6 py-4 text-royalyellow">{location}</td>
      <td className="px-6 py-4 text-royalyellow">{season}</td>
      <td className="px-6 py-4 text-royalyellow">{isfor}</td>
      <td className="px-6 py-4 text-royalyellow">{mode}</td>
      <td className="px-6 py-4 text-royalyellow">{description}</td>
      <td className="px-6 py-4">
        {oppImages ? (
          oppImages.map((image: any) => (
            <a
              key={image.file_path}
              className="text-md font-medium text-royalyellow flex items-center"
              href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
              target="_blank"
            >
              <BiLink
                className="mr-2 text-xl text-black"
                key={image.file_path}
              />
              View File
            </a>
          ))
        ) : (
          <span></span>
        )}
      </td>
      <td className="px-6 py-4 text-royalyellow">{contact_email}</td>
      <td className="px-6 py-4 text-royalyellow">{website}</td>

      <td className="px-6 py-4">
        <div className="flex items-center">
          {oppStatus ? (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
              <span className="text-green-500">Approved</span>
            </>
          ) : (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
              <span className="text-red-500">Approval Pending</span>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
