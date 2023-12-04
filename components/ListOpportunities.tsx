"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ListOpportunitiesProps {
  image: string;
  name: string;
  href: string;
}

const ListOpportunities: React.FC<ListOpportunitiesProps> = ({
  image,
  name,
  href,
}) => {
  const router = useRouter();
  const onClick = () => {
    // push if authenticated
    router.push(href);
  };
  return (
    <button onClick={onClick}>
      <div>{/* <Image fill src={image} alt="Image" /> */}</div>
      <p>{name}</p>
      <div></div>
    </button>
  );
};

export default ListOpportunities;
