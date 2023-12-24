import React from "react";
import { Opportunity } from "@/types";
import DashboardOpportunityList from "./DashboardOpportunityList";
import DashboardSidebar from "./DashboardSidebar";
import AuthSystem from "@/components/AuthSystem";
import DashboardAlerts from "./DashboardAlerts";

interface DashboardPageContentProps {
  userOpps: Opportunity[] | null;
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = ({
  userOpps,
}) => {
  return userOpps && userOpps?.length >= 0 ? (
    <div className="flex w-full">
      <DashboardAlerts />

      <DashboardSidebar>
        <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded" />
      </DashboardSidebar>
      <DashboardOpportunityList />
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
    </div>
  );
};

export default DashboardPageContent;
