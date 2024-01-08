import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";

interface IndividualOpportunityProps {
  children: React.ReactNode;
}

export default async function IndividualOpportunity({
  children,
}: IndividualOpportunityProps) {

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
