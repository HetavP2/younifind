// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";

import { Database } from "@/types_db";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import sendEmail from "@/actions/sendEmail";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Opportunity } from "@/types";
import uploadOpportunityImages from "../opp-images/uploadOpportunityImages";
import {ApprovalPendingEmailTemplate} from "@/components/email-templates/ApprovalPendingEmailTemplate";

interface AddOpportunityProps extends Opportunity {
  allOpportunityImages: FormDataEntryValue[];
}

const addOpportunity = async ({
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
}: AddOpportunityProps): Promise<void> => {
  const supabase = createServerActionClient<Database>({
    cookies,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

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
    const id = getRandomInt(999999);

    await supabase.from("opportunities").insert({
      id,
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
      user_id: user.id,
      expiry_date: expiry_date,
      contact_email
    });

    const res = uploadOpportunityImages({
      id,
      user_id: user.id,
      allOpportunityImages,
    });

    // if (oppImageError) {
    //   return toast.error("FAILED image upload");
    // }

    // toast.success("Opportunity added successfully");


    if (!approved) {
      await sendEmail({
        to: ["hetav.j.patel@gmail.com", "vangara.anirudhbharadwaj@gmail.com"],
        subject: "Please Approve Opportunity",
        template: ApprovalPendingEmailTemplate(),
      });
    }

  }
};
export default addOpportunity;
