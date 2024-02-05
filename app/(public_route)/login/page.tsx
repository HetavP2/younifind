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
        <div className="w-96 text-center bg-royalyellow p-10 text-2xl font-semib rounded-md shadow-md relative">

          <AuthButton
            session={session}
            className="bg-royalblue text-white px-6 py-3 rounded-full absolute top-[-25px] left-1/2 transform -translate-x-1/2"
          />

          <p className="mt-6 text-gray-600 text-base">
            By logging in, you agree to the listed Terms and Conditions of
            younifind.
          </p>
          <br />

          <p className="text-gray-600 text-base">
            <a href="/tos" className="underline" target="_blank">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="/privacy" className="underline" target="_blank">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
