"use server";
// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getOpportunityStatus = async (oppId: number): Promise<boolean> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: opportunity, error } = await supabase
    .from("opportunity_statuses")
    .select()
    .eq("opportunity_id", oppId)
  .single();

  if (error) {
    throw new Error(error.message);
  }

  const { approved }: { approved: boolean } = opportunity;


  return approved;
};

export default getOpportunityStatus;
