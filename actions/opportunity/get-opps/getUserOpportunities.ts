import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getUserOpportunities = async (): Promise<Opportunity[]> => {
  "use server";
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: userOpportunities, error } = await supabase
    .from("opportunities")
    .select()
    .filter("user_id", "in", `(${session?.user.id})`)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
  }

  return (userOpportunities as any) || [];
};

export default getUserOpportunities;
