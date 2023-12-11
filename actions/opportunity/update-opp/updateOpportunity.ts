"use server";
import { Opportunity } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface UpdateOpportunityProps extends Opportunity {
  allOpportunityImages?: FormDataEntryValue[];
}

const updateOpportunity = async ({
  id,
  provider,
  location,
  season,
  industry,
  isfor,
  mode,
  typelabel,
  description,
  allOpportunityImages,
  title,
  expiry_date,
  contact_email,
}: UpdateOpportunityProps): Promise<void> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let type = typelabel;
  if (typelabel === "Work Opportunity") {
    type = "work";
  } else {
    type = "education";
  }

  let approved = false;

  if (user) {
    const { data: adminInfo, error } = await supabase
      .from("admins")
      .select()
      .filter("adminId", "in", `(${user.id})`)
      .single();
    if (adminInfo !== null) {
      approved = true;
    }
    const { data, error: error2 } = await supabase
      .from("opportunities")
      .update({
        title,
        provider,
        location,
        season,
        industry,
        isfor,
        mode,
        type,
        approved,
        typelabel,
        description,
        expiry_date: expiry_date,
        contact_email,
      })
      .eq("id", id)
      .select();
  }
};

export default updateOpportunity;
