import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardPageContent from "./components/DashboardPageContent";
import sendOpportunityApprovalEmail from "@/actions/sendOpportunityApprovalEmail";


export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  sendOpportunityApprovalEmail();
  const { data: userOpps, error } = await supabase
    .from("opportunities")
    .select()
    .filter("user_id", "in", `(${session?.user.id})`);

  return <DashboardPageContent userOpps={userOpps} />;
}
