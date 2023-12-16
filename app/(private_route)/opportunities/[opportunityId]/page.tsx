import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import { notFound } from "next/navigation";
import OpportunitySubpage from "./components/OpportunitySubpage";

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

  if (!opportunityDetails) {
    notFound();
  }
  
    
    //pass things down here to subpage component
  return <OpportunitySubpage oppDetails={opportunityDetails} />;
}
