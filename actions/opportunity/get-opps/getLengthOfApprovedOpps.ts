"use server";

import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getLengthApprovedOpportunities = async (): Promise<
  number
> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });


  const { data, error } = await supabase.from("opportunities").select(
    `
    *,
    opportunity_statuses (approved)
  `
  ); // Retrieve all fields for opportunities

  if (error) {
    throw error;
  }

  const allApprovedOpportunities = data.filter((opportunity) => {
    return (
      opportunity.opportunity_statuses &&
      opportunity.opportunity_statuses.approved === true
    );
  });

  if (error) {
    console.error(error);
  }

  return allApprovedOpportunities.length;
};

export default getLengthApprovedOpportunities;
