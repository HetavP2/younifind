import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Script from "next/script";

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default async function SearchLayout({ children }: SearchLayoutProps) {

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DS0WYJ54SC"
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
          <div className="w-full flex flex-col">{children}</div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
