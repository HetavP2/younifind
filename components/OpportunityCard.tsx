import React from "react";
import { Opportunity } from "@/types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";

interface OpportunityCardProps extends Opportunity {
  data: Opportunity;
}

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
    data,
    ...props
  },
  ref
) => {
  const imagePath = await useLoadImage(data);
  //   const oppImage = await getOppImages();
  // const oppImages = getOpportunityImages({ userId: user_id });

  //make a card and put values like {title}, {provider} every relevant column opportunity table
  console.log(imagePath);
  
  return <Image className="object-cover" src={imagePath || '/images/younifind.png'} fill alt='Image' />;
};

export default OpportunityCard;

//useless
//   return <pre>{JSON.stringify(userOpps, null, 2)}</pre>;
