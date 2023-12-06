import React from "react";
import { Opportunity } from "@/types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import getOpportunityImages from "@/actions/getOpportunityImages";

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
    ...props
  },
  ref
) => {
  let oppImages;
  if (id) {
    oppImages = await getOpportunityImages(parseInt(id));
  }
  console.log(oppImages)
  //make a card and put values like {title}, {provider} every relevant column opportunity table
  return oppImages ? (
    oppImages.map((image) => (
      
          <Image
            className="object-cover"
            src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
            fill
            alt="Image"
          />
        ))
  ) : (
    <h1>No image provided default imagehere</h1>
  );
};

export default OpportunityCard;
