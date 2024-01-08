import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default async function SearchLayout({ children }: SearchLayoutProps) {

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <div className="w-full flex flex-col">
            {children}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
