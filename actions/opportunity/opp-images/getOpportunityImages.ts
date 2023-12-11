// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
import { OpportunityImages } from "@/types";
import { createServerComponentClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";


const getOpportunityImages = async (opportunityId: number): Promise<OpportunityImages[]> => {
  // 'use server'
  // const supabase = createServerComponentClient({
  //   cookies: cookies,
  // });
  const supabase = createClientComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: opportunityImages, error } = await supabase
    .from("opportunity_images")
    .select()
    .filter("opportunity_id", "in", `(${opportunityId})`);

  if (error) {
    console.error(error);
  }

  return (opportunityImages as any) || [];
};

export default getOpportunityImages;
