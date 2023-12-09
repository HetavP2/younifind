import React from "react";
import { Opportunity } from "@/types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";

interface OpportunityCardProps extends Opportunity {
  // oppImages: Array<string> || null;
}

const OpportunityCard: React.FC<OpportunityCardProps> = async (
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
    ...props
  },
  ref
) => {
  let oppImages;
  if (id) {
    oppImages = await getOpportunityImages(parseInt(id));
  }
  //make a card and put values like {title}, {provider} every relevant column opportunity table
  // return oppImages ? (
  //   oppImages.map((image) => (
  //     <Image
  //       className="object-cover"
  //       src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
  //       width={100}
  //       height={100}
  //       alt="Image"
  //     />
  //   ))
  // ) : (
  //   <h1>No image provided default imagehere</h1>
  // );
  return (
    <div className="bg-slate-100  flex rounded-md">
      <div className="w-2/3 flex-column p-4 rounded-md">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <div className="flex font-medium">
          {provider} - {industry}
        </div>
        <div className="text-md mt-4">{description}</div>
      </div>
      <div
        className="w-1/3 rounded-md bg-slate-200 pl-[20px] relative flex-column p-4 items-center justify-center"
        style={{ borderTopLeftRadius: "80px", borderBottomLeftRadius: "90px" }}
      >
        {" "}
        <div className="flex flex-col bg-green-500 items-end w-full  gap-2">
          <button className="bg-red-500 text-md font-medium px-4 py-1 rounded-md border-white border-md text-white">
            Delete Opportunity
          </button>
          <button className="bg-royalblue text-md font-medium px-4 py-1 rounded-md border-white border-md text-white">
            View On Younifind
          </button>
          <button className="bg-royalblue text-md font-medium px-4 py-1 rounded-md border-white border-md text-white">
            Edit Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
