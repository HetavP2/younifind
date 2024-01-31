import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OpportunityCard from "./OpportunityCard";
import getUserOpportunities from "@/actions/opportunity/get-opps/getUserOpportunities";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";

export default async function OpportunityList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userOpportunities = await getUserOpportunities();

  if (userOpportunities && userOpportunities?.length >= 0 && session) {
    console.log("oppId");
    return (
      <div className="w-2/3 gap-3 p-2 mx-auto py-8 flex items-center ">
        {userOpportunities.map(async (opportunity) => {
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
        })}
      </div>
    );
  }
}
