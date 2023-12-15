import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OpportunityCard from "@/components/OpportunityCard";
import getUserOpportunities from "@/actions/opportunity/get-opps/getUserOpportunities";

export default async function DashboardOpportunityList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userOpportunities = await getUserOpportunities();

  if (userOpportunities && userOpportunities?.length >= 0 && session) {
    return (
      <div className="w-full h-screen">
        <div className="w-4/5  h-full mx-auto flex items-center justify-center py-16">
          <div className="h-full overflow-y-auto flex flex-col gap-3">
            {userOpportunities.map((opportunity) => (
              <div
                className="bg-royalyellow hover:bg-royalblue transition  linear duration-200 p-4 w-full rounded-md"
                title={"Manage Opportunity"}
                key={opportunity.id}
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
      </div>
    );
  }
}
