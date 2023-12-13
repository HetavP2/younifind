import React from "react";
import { Opportunity } from "@/types";
import OpportunityList from "@/components/OpportunityList";
import DashboardSidebar from "@/components/DashboardSidebar";
import AuthSystem from "@/components/AuthSystem";

interface DashboardPageContentProps {
  userOpps: Opportunity[] | null;
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = ({
  userOpps,
}) => {
  return userOpps && userOpps?.length >= 0 ? (
    <div className="flex w-full">
      {/* <div className="w-1/4 bg-blue-500">sfusfjiffs</div>
      <div className="w-3/4 bg-red-500">sfisfji0sfo0jsfjsofojs</div> */}

      <DashboardSidebar>
        <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded" />
      </DashboardSidebar>
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
      {/* <DashboardSidebar>
        <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded" />
      </DashboardSidebar> */}
    </div>
  );
};

export default DashboardPageContent;
