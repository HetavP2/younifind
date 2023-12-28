import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAllAdminOpportunities = async (): Promise<Opportunity[]> => {
  ("use server");
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: allAdminOpportunities, error } = await supabase
    .from("opportunities")
    .select(
      `
    *,
    opportunity_statuses: approved
  `
    )

  if (error) {
    console.error(error);
  }

  return (allAdminOpportunities as any) || [];
};

export default getAllAdminOpportunities;
