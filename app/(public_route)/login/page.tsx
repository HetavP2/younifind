import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";
import Navbar from "@/components/Navbar";

export default async function Login() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      
    <Navbar>
      <></>
    </Navbar>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-36 text-center items-center bg-royalyellow p-8 text-xl font-semib rounded-md shadow-md">
        <AuthButton session={session} />
      </div>
    </div>
    </div>
  );
}
