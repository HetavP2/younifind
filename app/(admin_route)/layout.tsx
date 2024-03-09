import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { Metadata } from "next";
import Script from "next/script";

interface AdminLayoutProps {
  children: React.ReactNode;
}
export const runtime = "edge";
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
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
          
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head>
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>{children}</UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
