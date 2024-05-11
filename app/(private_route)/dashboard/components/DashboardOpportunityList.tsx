import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OpportunityCard from "@/components/OpportunityCard";
import getUserOpportunities from "@/actions/opportunity/get-opps/getUserOpportunities";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";

import {
  FaListCheck,
  FaCheckToSlot,
  FaCircleInfo,
  FaFilePen,
} from "react-icons/fa6";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

export default async function DashboardOpportunityList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userOpportunities = await getUserOpportunities();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: adminInfo, error } = await supabase
    .from("admins")
    .select()
    .filter("admin_id", "in", `(${user?.id})`)
    .single();

  if (userOpportunities && userOpportunities?.length >= 0 && session) {
    return (
      <div className="w-full h-screen">
        <div className="flex flex-col w-full h-screen items-center">
          <div className="w-4/5  py-8 mx-auto">
            <div className="flex w-full h-full justify-between items-center">
              <div>
                <p className="text-left font-semibold text-2xl">
                  Welcome, {session.user.user_metadata.full_name}
                </p>
                <p className="mt-2 text-left font-semibold text-md">
                  Email: <i>{session.user.email}</i>
                  {session.user.last_sign_in_at
                    ? `• Last online at
              ${session.user.last_sign_in_at} : `
                    : ``}
                </p>
              </div>
              <span className="flex items-center">
                {adminInfo ? (
                  <>
                    <div className="badge badge-warning badge-lg mx-2 shadow-xl text-sm font-semibold">
                      Administrator
                    </div>

                    <div
                      className="tooltip"
                      data-tip="Access the Administrator Admin Panel to manage all opportunities."
                    >
                      <a
                        href="/adminPanel"
                        target="_blank"
                        className="bg-royalblue text-sm font-semibold text-white rounded-2xl pl-1 pr-2 shadow-xl flex items-center"
                      >
                        <MdOutlineAdminPanelSettings className="text-white font-semibold text-xl mr-2" />{" "}
                        Admin Panel
                      </a>
                    </div>

                    <div
                      className="tooltip"
                      data-tip="As an admin, you do not require approval for your posted opportunities."
                    >
                      <div className="bg-royalblue rounded-2xl mx-2 p-1 shadow-xl">
                        <FaCircleInfo className="text-white font-semibold text-xl" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="badge badge-success badge-lg mx-2 shadow-xl text-sm font-semibold">
                    User
                  </div>
                )}
              </span>
            </div>
          </div>
          <div className="w-4/5 h-3/4 mx-auto flex items-center justify-center py-4">
            <div className="h-full w-full overflow-y-auto flex flex-col gap-3">
              {userOpportunities.length >= 1 ? (
                userOpportunities?.map(async (opportunity) => {
                  const oppId = parseInt(opportunity.id);
                  const data = await getOpportunityImages(oppId);
                  const approved = await getOpportunityStatus(oppId);

                  return (
                    <div
                      key={opportunity.id}
                      className="bg-royalyellow hover:bg-royalblue transition linear duration-200 p-4 w-full rounded-md"
                      title={"Manage Opportunity"}
                    >
                      <OpportunityCard
                        key={opportunity.id}
                        user_id={session.user.id}
                        title={opportunity.title}
                        description={opportunity.description}
                        industry={opportunity.industry}
                        provider={opportunity.provider}
                        season={opportunity.season}
                        isfor={opportunity.season}
                        type={opportunity.type}
                        location={opportunity.location}
                        mode={opportunity.mode}
                        typelabel={opportunity.typelabel}
                        id={opportunity.id}
                        expiry_date={opportunity.expiry_date}
                        contact_email={opportunity.contact_email}
                        fileData={data}
                        approved={approved}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="bg-royalblue transition linear duration-200 p-8 text-center w-full rounded-lg shadow-xl">
                  <h1 className="text-xl font-semibold text-center text-white">
                    You have not created any opportunity postings yet.
                  </h1>
                  <br />
                  <br />
                  <div>
                    <FaFilePen className="text-7xl text-royalyellow mx-auto" />
                  </div>
                  <br />
                  <br />
                  <h2 className="text-md font-semibold text-center text-white">
                    Click on <i>Add Opportunity</i> to create a new opportunity
                    or watch our{" "}
                    <a
                      href="https://www.youtube.com/watch?v=43N_mZkyIwI"
                      target="_blank"
                      className="text-royalyellow underline"
                    >
                      tutorial
                    </a>
                    .
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
