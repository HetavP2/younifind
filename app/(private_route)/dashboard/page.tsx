import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getOppImages from "@/actions/getOppImages";
import DashboardPageContent from "./components/DashboardPageContent";


export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const oppImages = await getOppImages();

  const { data: userOpps, error } = await supabase
    .from("opportunities")
    .select()
    .filter("user_id", "in", `(${session?.user.id})`);

  return <DashboardPageContent userOpps={userOpps} oppImages={oppImages} />;
}
