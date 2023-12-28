"use client";

import React, { useEffect, useRef, useState } from "react";
import { Opportunity } from "@/types";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import deleteOpportunity from "@/actions/opportunity/delete-opp/deleteOpportunity";
import { useSearchParams } from "next/navigation";
import { BiLink } from "react-icons/bi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";

interface OpportunityCardProps extends Opportunity {}

const OpportunityCard: React.FC<OpportunityCardProps> = (
  {
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
    expiry_date,
    contact_email,
    ...props
  },
  ref
) => {
  const [oppImages, setOppImages] = useState([]);
  const [oppStatus, setOppStatus] = useState(false);
  const router = useRouter();


  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const fetchData = async () => {
        try {
          const oppId = parseInt(id)
          const data: any = await getOpportunityImages(oppId);
          const approved: boolean =
            await getOpportunityStatus(oppId);
          setOppImages(data);
          
          setOppStatus(approved);
        } catch (error) {
          // Handle errors, e.g., log or display an error message
          console.error("Error fetching opportunity images:", error);
        }
      };
    
      fetchData();
    }
  }, [id]);


  const handleDelete = async (e: any) => {
    e.preventDefault();
    const res = await deleteOpportunity(String(id));
    if (res) {
      toast.success("Deleted Opportunity");
      // params.delete();
      router.refresh();
    } else {
      toast.error("Opportunity could not be deleted");
    }
  };

  
  
  

  return (
    <div className="bg-slate-100  flex rounded-md">
      <div className="w-2/3 flex-column p-4 rounded-md">
        <h1 className="font-bold text-2xl ">{title}</h1>
        {oppStatus ? <span>✅</span> : <span>🕔</span>}
        <div className="flex font-medium">
          {provider} - {industry}
        </div>
        <div className="text-md mt-4">{description}</div>
        <div className="flex flex-col">
          {oppImages ? (
            oppImages.map((image: any) => (
              <a
                key={image.file_path}
                className="text-md font-medium text-royalblue flex items-center"
                href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
                target="blank"
              >
                <BiLink
                  className="mr-2 text-xl text-black "
                  key={image.file_path}
                />
                {image.file_name}
              </a>
            ))
          ) : (
            <p>No files attached.</p>
          )}
        </div>
      </div>
      <div
        className="w-1/3 rounded-md bg-slate-200 pl-[20px] relative flex-column p-4 items-center justify-center"
        style={{ borderTopLeftRadius: "80px", borderBottomLeftRadius: "90px" }}
      >
        {" "}
        <div className=" w-full flex  justify-center">
          <div className="flex flex-col items-center justify-center w-3/4 gap-2">
            <button
              onClick={(e) => handleDelete(e)}
              className="bg-red-500 text-md font-medium px-4 py-1 rounded-md border-white border-md text-white transition hover:-translate-y-1 ease-in-out duration-200"
            >
              Delete Opportunity
            </button>
            <button className="bg-royalblue text-md font-medium px-4 py-1 rounded-md border-white border-md text-white transition hover:-translate-y-1 ease-in-out duration-200">
              <a href={`/opportunities/${id}`} target="_blank">
                View Opportunity
              </a>
            </button>
            <a
              href={`/opportunities/${id}/edit`}
              className="bg-[#eab308] text-md font-medium px-4 py-1 rounded-md border-white border-md text-white transition hover:-translate-y-1 ease-in-out duration-200"
            >
              Edit Opportunity
            </a>
            {/* <button className="bg-[#eab308] text-md font-medium px-4 py-1 rounded-md border-white border-md text-white transition hover:-translate-y-1 ease-in-out duration-200">
              Edit Opportunity
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
