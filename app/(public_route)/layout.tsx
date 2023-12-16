import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default async function SearchLayout({ children }: SearchLayoutProps) {
  const supabase = createServerComponentClient({ cookies });
  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();

  //   if (!session) {
  //     redirect("/login");
  //   }

  //   const { data: adminInfo, error } = await supabase
  //     .from("admins")
  //     .select()
  //     .filter("email", "in", `(${session.user.email})`)
  //     .single();

  //   if (adminInfo === null) {
  //     redirect("/login");
  //   }

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <div className="w-full flex flex-col">
            {/* <Navbar>
              <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
            </Navbar> */}
            {children}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
