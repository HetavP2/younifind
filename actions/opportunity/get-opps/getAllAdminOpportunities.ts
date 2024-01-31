import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAllAdminOpportunities = async (): Promise<Opportunity[]> => {
  ("use server");
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: allOpportunities, error } = await supabase
    .from("opportunities")
    .select(
      `
    *,
    opportunity_statuses (
      approved
    )
  `
    );

  if (error) {
    throw error;
  }

  // Sort the opportunities with unapproved ones first
  const allAdminOpportunities = [...allOpportunities].sort((a, b) => {
    // If a is unapproved and b is not, a comes first
    if (!a.opportunity_statuses.approved && b.opportunity_statuses.approved) {
      return -1;
    }
    // If b is unapproved and a is not, b comes first
    else if (
      a.opportunity_statuses.approved &&
      !b.opportunity_statuses.approved
    ) {
      return 1;
    }
    // For other cases, maintain the current order
    else {
      return 0;
    }
  });

  if (error) {
    console.error(error);
  }

  return (allAdminOpportunities as any) || [];
};

export default getAllAdminOpportunities;