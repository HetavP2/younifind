import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";
import HomePageContent from "./components/HomePageContent";
import AuthLink from "@/components/AuthLink";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
export const revalidate = 0;
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="">
      <div className="">
        <Navbar>
          <AuthLink session={session} />
        </Navbar>
      </div>
      <HomePageContent />
    </div>
  );
}
