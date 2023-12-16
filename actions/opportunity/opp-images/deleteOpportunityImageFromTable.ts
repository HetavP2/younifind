"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const deleteOpportunityImageFromTable = async (
  imageId: string
): Promise<string> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  
  const { error: errorDeletingFromTable } = await supabase
    .from("opportunity_images")
    .delete()
    .eq("id", imageId);

  if (errorDeletingFromTable === null) {
    return "deletedEverywhere";
  }
  return "";
};

export default deleteOpportunityImageFromTable;
