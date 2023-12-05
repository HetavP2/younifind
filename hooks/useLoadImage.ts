import React from "react";
import { Opportunity } from "@/types";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const useLoadImage = async (oppImage: Opportunity) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!oppImage) {
    return null;
  }
  const { data } = await supabase.storage
    .from("opportunity-images")
    .getPublicUrl(oppImage.image_path);

  return data.publicUrl;
};

export default useLoadImage;
