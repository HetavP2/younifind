import React from "react";
import { notFound } from "next/navigation";
import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import AddOppForm from "../../components/AddOppForm";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { opportunityId: string };
}): Promise<Metadata> {
  const oppId = parseInt(params.opportunityId);
  if (!oppId)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  const [opportunityDetails] = await getOpportunity(oppId);
  return {
    title: "Editing " + opportunityDetails.title,
    description: opportunityDetails.description,
    alternates: {
      canonical: `/opportunities/o/${oppId}/edit`,
      languages: {
        "en-CA": `en-CA/opportunities/o/${oppId}/edit`,
      },
    },
  };
}

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

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();


  if (!opportunityDetails || session?.user.id !== opportunityDetails.user_id) {
    notFound();
  }

  const data: any = await getOpportunityImages(oppId);

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
      expiry_date={opportunityDetails.expiry_date}
      contact_email={opportunityDetails.contact_email}
      allOpportunityImages={data}
    />
  );
}
