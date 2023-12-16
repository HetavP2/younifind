import React from "react";
import { notFound } from "next/navigation";
import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import AddOppForm from "../../components/AddOppForm";

export default async function EditOpportunityPage({
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

  return (
    <AddOppForm
          key={opportunityDetails.id}
          id={opportunityDetails.id}
      title={opportunityDetails.title}
      description={opportunityDetails.description}
      industry={opportunityDetails.industry}
      provider={opportunityDetails.provider}
      season={opportunityDetails.season}
      isfor={opportunityDetails.isfor}
      location={opportunityDetails.location}
      mode={opportunityDetails.mode}
      typelabel={opportunityDetails.typelabel}
      approved={opportunityDetails.approved}
      expiry_date={opportunityDetails.expiry_date}
      contact_email={opportunityDetails.contact_email}
    />
  );
}
