import React from "react";
import { Opportunity } from "@/types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface OpportunityCardProps extends Opportunity {}

const OpportunityCard: React.FC<OpportunityCardProps> = async (
  {
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
    image_path,
    ...props
  },
  ref
) => {
  //make a card and put values like {title}, {provider} every relevant column opportunity table
  return image_path ? (
    <Image
      className="object-cover"
      src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image_path}`}
      fill
      alt="Image"
    />
  ) : (
    <h1>No image provided default imagehere</h1>
  );
};

export default OpportunityCard;
