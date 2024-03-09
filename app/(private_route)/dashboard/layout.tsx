import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import ToasterProvider from "@/providers/ToasterProvider";
import Script from "next/script";

export const runtime = "edge";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
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
