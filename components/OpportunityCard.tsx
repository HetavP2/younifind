"use client";

import React, { useEffect, useState } from "react";
import { Opportunity } from "@/types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import deleteOpportunity from "@/actions/opportunity/delete-opp/deleteOpportunity";
import Router from "next/navigation";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface OpportunityCardProps extends Opportunity {
}

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
    approved,
    expiry_date,
    contact_email,
    ...props
  },
  ref
) => {
  const [oppImages, setOppImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getOpportunityImages(parseInt(id));
        setOppImages(data);
      } catch (error) {
        // Handle errors, e.g., log or display an error message
        console.error("Error fetching opportunity images:", error);
      }
    };

    fetchData();
  }, [id]);

{/* <Image */}
    //       className="object-cover"
    //       src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_name}`}
    //       width={100}
    //       height={100}
    //       alt="Image"
    //     />

  const handleDelete = async (e: any) => {
    e.preventDefault();
    await deleteOpportunity(String(id));
    router.refresh();
  };

  return (
    <div className="bg-slate-100  flex rounded-md">
      <div className="w-2/3 flex-column p-4 rounded-md">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <div className="flex font-medium">
          {provider} - {industry}
        </div>
        <div className="text-md mt-4">{description}</div>
        <div className="flex flex-col">
          {oppImages ? (
            oppImages.map((image: any) => (
              <a
                className="text-md font-medium text-royalblue flex items-center"
                href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
                target="blank"
              >
                <BiLink className="mr-2 text-xl text-black " />
                View File
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
              <a
                href={`https://search-peel-demo.vercel.app/opportunity/${id}`}
                target="_blank"
              >
                View Opportunity
              </a>
            </button>
            <button className="bg-[#eab308] text-md font-medium px-4 py-1 rounded-md border-white border-md text-white transition hover:-translate-y-1 ease-in-out duration-200">
              Edit Opportunity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
