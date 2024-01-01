import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardPageContent from "./components/DashboardPageContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    "Create new opportunities with a single click. Need volunteers? Need interns? This is the perfect place to get your organization recognized to the masses.",
  alternates: {
      canonical: `/dashboard`,
      languages: {
        "en-CA": `en-CA/dashboard`
      },
    },
};


  

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: userOpps, error } = await supabase
    .from("opportunities")
    .select()
    .filter("user_id", "in", `(${session?.user.id})`);

  return <DashboardPageContent userOpps={userOpps} />;
}
