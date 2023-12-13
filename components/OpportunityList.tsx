import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OpportunityCard from "./OpportunityCard";
import getUserOpportunities from "@/actions/opportunity/get-opps/getUserOpportunities";

export default async function OpportunityList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userOpportunities = await getUserOpportunities();

  if (userOpportunities && userOpportunities?.length >= 0 && session) {
    return (
      <div className="w-full">
        <div className="w-4/5 mx-auto py-8 flex flex-col gap-2 justify-center items-center">
          {userOpportunities.map((opportunity) => (
            <div
              className="bg-royalyellow hover:bg-royalblue transition  linear duration-200 p-4 w-full rounded-md"
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
                approved={opportunity.approved}
                id={opportunity.id}
                expiry_date={opportunity.expiry_date}
                contact_email={opportunity.contact_email}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
