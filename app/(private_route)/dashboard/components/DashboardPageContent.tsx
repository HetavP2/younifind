import React from "react";
import { Opportunity } from "@/types";
import DashboardClient from "@/components/DashboardClient";
import OpportunityList from "@/components/OpportunityList";

interface DashboardPageContentProps {
  userOpps: Opportunity[] | null;
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = ({
  userOpps,
}) => {
  console.log(userOpps);

  return userOpps && userOpps?.length >= 0 ? (
    <div className="">
      <DashboardClient />

      <OpportunityList />
    </div>
  ) : (
    <div>
      <div className="w-2/3 mx-auto  p-4 text-center font-medium rounded-md">
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
