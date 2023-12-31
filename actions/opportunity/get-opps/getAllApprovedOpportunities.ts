'use server';


import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface GetAllApprovedOpportunitiesResultType extends Opportunity {
  approved: boolean;
}

const getAllApprovedOpportunities = async (): Promise<
  GetAllApprovedOpportunitiesResultType[]
> => {
  ("use server");
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  //   const { data: allApprovedOpportunities, error } = await supabase
  //     .from("opportunities")
  //     .select(
  //       `
  //     *,
  //     opportunity_statuses (approved)
  //   `
  //     )
  //         .eq("opportunity_statuses.approved", true);
  // .filter('opportunity_statuses.approved', 'eq', true);

  const { data, error } = await supabase.from("opportunities").select(
    `
    *,
    opportunity_statuses (approved)
  `
  ); // Retrieve all fields for opportunities

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

export default getAllApprovedOpportunities;
