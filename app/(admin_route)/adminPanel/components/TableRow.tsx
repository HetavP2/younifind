"use client";

import OppTextarea from "@/components/OppTextarea";
import { Opportunity } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import { BiLink } from "react-icons/bi";
import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";
// import encryptThis from "@/actions/encryption/encryptThis";

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
  ...props
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
        // for faster loading performance
        // const [opportunityDetails] = await getOpportunity(oppId);
        
        setLoading(false);
        setOppImages(data);

        // @ts-ignore
        setOppStatus(approved);
      } catch (error) {
        // Handle errors, e.g., log or display an error message
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
      toast.error("Error Adding Notes! Please try again.");
    }
  };

  const handleClick = async () => {
    const [{ admin_notes: adminNotes }] = await getOpportunity(parseInt(id));

    if (adminNotes === undefined || adminNotes === null) {
      toast.error("Please add some notes before you send your message");
      return;
    }

    const subject = String(encryptThis("Please review your opportunity."));

    // const res = await fetch(`/api/sendEmail`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     recipient: [contact_email],
    //     subject,
    //     operation: "ReviewOpportunityAgain",
    //     content: adminNotes,
    //     // uniqueId: process.env.uniqueId,
    //   }),
    // });

    //--

    const res = await fetch(`/api/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // recipient: [String(encryptThis(contact_email))],
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
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
{oppStatus === null ? (
  <div>
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
    {/* <p className="text-white text-2xl text-center my-4 font-semibold">
      Loading Data...
    </p> */}
  </div>
) : (
  <input
    id="checkbox-table-search-2"
    type="checkbox"
    onChange={(e) => handleOnChange(e.target.checked)}
    checked={oppStatus}
    className="w-4 h-4 text-blue-60 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
  />
)}

            <label htmlFor="checkbox-table-search-2" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-white"
        >
          <div className="ps-3">
            <div className="text-base font-semibold">{title}</div>
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
              <OppTextarea
                cols={900}
                onChange={(e) => {
                  setAdminNotes(e.target.value);
                  handleOnChangeNotes(e.target.value);
                }}
                value={adminNotes}
              />
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                onClick={handleClick}
                //i think this should be saved in db, like email sent so different teachers dont just spam that button
                disabled={buttonDisabled}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Resend for review
              </button>
            </td>
          </>
        )}

        <td className="px-6 py-4">{location}</td>
        <td className="px-6 py-4">{season}</td>
        <td className="px-6 py-4">{isfor}</td>
        <td className="px-6 py-4">{mode}</td>
        <td className="px-6 py-4">{description}</td>
        <td className="px-6 py-4">
          {oppImages ? (
            oppImages.map((image: any) => (
              <a
                key={image.file_path}
                className="text-md font-medium text-royalyellow flex items-center"
                href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
                target="blank"
              >
                <BiLink
                  className="mr-2 text-xl text-black "
                  key={image.file_path}
                />
                View File
              </a>
            ))
          ) : (
            <span></span>
          )}
        </td>
        <td className="px-6 py-4">{contact_email}</td>

        <td className="px-6 py-4">
          <div className="flex items-center">
            {oppStatus ? (
              <>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                Approved
              </>
            ) : (
              <>
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                Approval Pending
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
