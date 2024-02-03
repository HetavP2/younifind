import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { Metadata } from "next";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
    // follow: true,
  },
  title: "Admin Panel",
  description: "younifind's admin panel allows authorized users to manage the opportunities and users on the platform.",
  alternates: {
    canonical: `/adminPanel`,
    languages: {
      "en-CA": `en-CA/adminPanel`,
    },
  },
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data: adminInfo, error } = await supabase
    .from("admins")
    .select()
    .filter("email", "in", `(${session.user.email})`)
        .single();
    

    if (adminInfo === null) {
        redirect("/login");
    }

    
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>{children}</UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
