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
        <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none font-semibold focus:text-indigo-400  text-gray-900 rounded" />
      </DashboardSidebar>
      <DashboardOpportunityList />
    </div>
  ) : (
    <div className="flex w-full">
      <DashboardAlerts />

      <DashboardSidebar>
        <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none font-semibold focus:text-indigo-400  text-gray-900 rounded" />
      </DashboardSidebar>

      <div className="w-full h-screen">
        <div className="w-4/5  h-full mx-auto flex items-center justify-center py-16">
          <div className="h-full overflow-y-auto flex flex-col gap-3">
            <div className="bg-royalyellow hover:bg-royalblue transition linear duration-200 p-4 w-full rounded-md">
              <h1 className="text-3xl text-center text-white">
                You have no opportunities
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageContent;
