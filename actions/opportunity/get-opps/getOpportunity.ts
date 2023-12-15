'use server';
// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getOpportunity = async (oppId: number): Promise<Opportunity[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
    
  const { data: opportunity, error } = await supabase
    .from("opportunities")
    .select()
    .eq("id", oppId);

  if (error) {
    console.error(error);
  }

  return (opportunity as any) || [];
};

export default getOpportunity;
