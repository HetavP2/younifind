// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types_db";

const addWaitlistUser = async (email: string): Promise<string> => {
  const supabase = createServerActionClient<Database>({
    cookies,
  });

  const { error } = await supabase
    .from("waitlist")
    .upsert({
      email
    })
    .select();
  if (error === null) {
    return "added";
  }
  return "";
};

export default addWaitlistUser;
