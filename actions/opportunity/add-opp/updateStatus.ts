// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const updateOppStatus = async (oppId: number): Promise<any> => {
    const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { error } = await supabase
    .from("opportunity_statuses")
    .update({ approved: false })
    .eq("opportunity_id", oppId);
  console.log(error);

  //   if (
  //     errorDeletingFromTable === null &&
  //     res === "successAtDeletingImagesFromStorage"
  //   ) {
  //     return "deletedEverywhere";
  //   }
  return "";
};

export default updateOppStatus;
