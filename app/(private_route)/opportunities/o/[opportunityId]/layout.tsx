import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/components/Navbar";

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
