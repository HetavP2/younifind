// 'use client';
import React from "react";
import { Opportunity, oppImage } from "@/types";
import DashboardClient from "@/components/DashboardClient";

interface DashboardPageContentProps {
  userOpps: Opportunity[] | null;
  oppImages: oppImage[];
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = ({
  userOpps,
  oppImages,
}) => {
  return userOpps ? (
    <div>
      <DashboardClient />
      {/* <pre>{JSON.stringify(userOpps, null, 2)}</pre> */}
      {oppImages.map((image) => {
        return <div key={image.id}>{image.title}</div>;
      })}
    </div>
  ) : (
    <div>
      <div className="w-2/3 mx-auto  bg-royalblue p-4 text-center font-medium rounded-md">
        No Opportunities Created Yet. <br />
        <br /> Click <span></span>
        <a className="text-royalyellow" href="/opportunities/new">
          ADD <span></span>
        </a>
        to get started.
      </div>
      <DashboardClient />
    </div>
  );
};

export default DashboardPageContent;
