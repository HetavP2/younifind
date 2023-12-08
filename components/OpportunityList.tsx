import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OpportunityCard from "./OpportunityCard";
import getUserOpportunities from "@/actions/getUserOpportunities";
import getOpportunityImages from "@/actions/getOpportunityImages";

export default async function OpportunityList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userOpportunities = await getUserOpportunities();


  if (userOpportunities && userOpportunities?.length >= 0 && session) {
    return (
      <>
        {userOpportunities.map((opportunity) => (
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
        ))}
      </>
    );
  }
}
