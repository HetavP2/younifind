// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import deleteOpportunityImages from "../opp-images/deleteOpportunityImages";

const deleteOpportunity = async (oppId: string): Promise<string> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

    
const { data: opportunityImagesPaths, error } = await supabase
  .from("opportunity_images")
  .select('file_path')
        .filter("opportunity_id", "in", `(${oppId})`);
    
  const res = await deleteOpportunityImages({ imagePaths: opportunityImagesPaths });
  console.log(res);
  

  const { error: errorDeletingFromTable } = await supabase
    .from("opportunities")
    .delete()
    .eq("id", oppId);
  
  
  
  if (errorDeletingFromTable === null && res === 'successAtDeletingImagesFromStorage') {
    return "deletedEverywhere";
  } 
  return '';

};

export default deleteOpportunity;
