// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";

import { Database } from "@/types_db";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import sendEmail from "@/actions/sendEmail";

import { Opportunity } from "@/types";
import uploadOpportunityImages from "../opp-images/uploadOpportunityImages";
import { ApprovalPendingEmailTemplate } from "@/components/email-templates/ApprovalPendingEmailTemplate";

interface AddOpportunityProps extends Opportunity {
  allOpportunityImages?: FormDataEntryValue[];
}

const addOpportunity = async ({
  id: oppId,
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
}: AddOpportunityProps): Promise<string> => {
  const supabase = createServerActionClient<Database>({
    cookies,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return "please login in";
  }

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

  const { data: adminInfo, error } = await supabase
    .from("admins")
    .select()
    .filter("adminId", "in", `(${user.id})`)
    .single();
  if (adminInfo !== null) {
    approved = true;
  }
  let id = parseInt(oppId);

  if (Number.isNaN(id)) {
    id = getRandomInt(999999);
  }

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAIKEY}`,
    },
    body: JSON.stringify({
      input: title + description + industry + provider + location,
      model: "text-embedding-ada-002",
    }),
  });
  const responseData = await response.json();
  const embedding = responseData.data[0].embedding;

  const { error: errorAddingOpp } = await supabase
    .from("opportunities")
    .upsert({
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
      contact_email,
      embedding,
    })
    .select();
  
  let uploadImagesStatus;
  let emailSentStatus = 'NA';

  if (allOpportunityImages) {
    uploadImagesStatus = await uploadOpportunityImages({
      id,
      user_id: user.id,
      allOpportunityImages,
    });
  }

  if (!approved) {
    emailSentStatus = await sendEmail({
      to: ["hetav.j.patel@gmail.com", "vangara.anirudhbharadwaj@gmail.com"],
      subject: "Please Approve Opportunity",
      template: ApprovalPendingEmailTemplate(),
    });
  }
  
  

  if (errorAddingOpp === null && uploadImagesStatus && emailSentStatus) {
    return 'SuccessfullyAddedAnOpportunity';
  } else {
    return 'ErrorAddingOpportunity';
  }

};
export default addOpportunity;
