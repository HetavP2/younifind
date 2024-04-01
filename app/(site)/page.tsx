import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";
import HomePageContent from "./components/HomePageContent";
import AuthLink from "@/components/AuthLink";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
export const revalidate = 0;
import { cookies } from "next/headers";
export const runtime = "edge";
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
      <div className="bg-red-300 px-4 py-3 text-white w-full">
        <p className="text-center text-sm font-medium">
          Welcome to younifind's Pilot Program, endorsed by the Peel
          District School Board.
        </p>
      </div>
      <HomePageContent />
    </div>
  );
}
