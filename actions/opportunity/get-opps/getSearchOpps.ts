"use server";

import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface GetSearchOpportunity extends Opportunity {
  approved: boolean;
}

const getSearchOpps = async (
  lowerbound: number,
  upperbound: number
): Promise<GetSearchOpportunity[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("opportunities")
    .select(
      `
    *,
    opportunity_statuses (approved)
  `
    )
    .range(lowerbound, upperbound)
    .order("created_at", { ascending: false }); // Retrieve all fields for opportunities

  if (error) {
    throw error;
  }

  // Filter the data in JavaScript for opportunity_statuses approved as true
  const allApprovedOpportunities = data.filter((opportunity) => {
    return (
      opportunity.opportunity_statuses &&
      opportunity.opportunity_statuses.approved === true
    );
  });

  if (error) {
    console.error(error);
  }

  return (allApprovedOpportunities as any) || [];
};

export default getSearchOpps;
