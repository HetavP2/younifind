// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";
import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import deleteOpportunityImages from "../opp-images/deleteOpportunityImages";

const deleteOpportunity = async (oppId: string): Promise<void> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const {
    data: { session },
    } = await supabase.auth.getSession();
    
const { data: opportunityImagesPaths, error } = await supabase
  .from("opportunity_images")
  .select('file_path')
        .filter("opportunity_id", "in", `(${oppId})`);
    
    const res = deleteOpportunityImages({ imagePaths: opportunityImagesPaths });


  const { data: userOpportunities, error: error2 } = await supabase
    .from("opportunities")
    .delete()
    .eq("id", oppId);

  if (error2) {
    console.error(error2);
  }

};

export default deleteOpportunity;
