import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import AuthSystem from "./AuthSystem";
import OpportunityList from "./OpportunityList";

const DashboardClient: React.FC = () => {
  return (
    <>
      <DashboardSidebar>
        {/* <AuthSystem className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded" /> */}
        <OpportunityList />
      </DashboardSidebar>
    </>
  );
};

export default DashboardClient;
