import { oppImage } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getOppImages = async (): Promise<oppImage[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data, error } = await supabase
    .from("opportunityImages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    }
    
    return (data as any) || [];
    
};

export default getOppImages;
