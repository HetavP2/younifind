import AddOppForm from "@/app/(private_route)/opportunities/o/components/AddOppForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
export const metadata: Metadata = {
  title: "New Opportunity",
  description:
    "Fill in the target information for the new opportunity in order to get your extracurricular activity discovered by high school students.",
  alternates: {
    canonical: `/opportunties/o/new`,
    languages: {
      "en-CA": `en-CA/opportunties/o/new`,
    },
  },
};

export default async function OpportunitiesNew() {
  let stopRecaptcha = false;
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: adminInfo, error } = await supabase
    .from("admins")
    .select()
    //@ts-ignore
    .filter("admin_id", "in", `(${user.id})`)
    .single();

  if (adminInfo !== null) {
    stopRecaptcha = true;
  }

  return <AddOppForm allOpportunityImages={[]} stopRecaptcha={stopRecaptcha} />;
}
