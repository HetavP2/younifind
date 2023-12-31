import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import { notFound } from "next/navigation";
import OpportunitySubpage from "./components/OpportunitySubpage";
import { Metadata } from "next";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";

export async function generateMetadata({
  params,
}: {
  params: { opportunityId: string };
  }): Promise<Metadata> {
  const oppId = parseInt(params.opportunityId);
  if (!oppId) return {
    title: 'Not Found',
    description: "The page is not found"
  }

  const [opportunityDetails] = await getOpportunity(oppId);
  return {
    title: opportunityDetails.title,
    description: opportunityDetails.description,
    alternates: {
      canonical: `/opportunities/${oppId}`,
      languages: {
        "en-CA": `en-CA/opportunities/${oppId}`
      },
    },
  };
  
}

export default async function OpportunityDetails({
  params,
}: {
  params: { opportunityId: string };
}) {
  const oppId = parseInt(params.opportunityId);

  if (Number.isNaN(oppId)) {
    notFound();
  }

  const [opportunityDetails] = await getOpportunity(oppId);
  const approved = await getOpportunityStatus(oppId);


  if (!opportunityDetails || !approved) {
    notFound();
  }
  
    
    //pass things down here to subpage component
  return <OpportunitySubpage oppDetails={opportunityDetails} />;
}
