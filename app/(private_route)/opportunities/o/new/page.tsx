import AddOppForm from "@/app/(private_route)/opportunities/o/components/AddOppForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Opportunity",
  description:
    "Fill in the target information for the new opportunity in order to get your extracurricular activity discovered by high school students.",
  alternates: {
    canonical: `/opportunties/o/new`,
    languages: {
      "en-CA": `en-CA/opportunties/o/new`,
    },
  },
};

export default async function OpportunitiesNew() {

  return (
    <AddOppForm
      allOpportunityImages={[]}
    />
  );
}
