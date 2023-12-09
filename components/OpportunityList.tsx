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
      <div className="w-2/3 gap-3 p-2 mx-auto py-8 flex items-center">
        {userOpportunities.map((opportunity) => (
          <div
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
              approved={opportunity.approved}
              id={opportunity.id}
              expiry_date={opportunity.expiry_date}
            />
          </div>
        ))}
      </div>
    );
  }
}
