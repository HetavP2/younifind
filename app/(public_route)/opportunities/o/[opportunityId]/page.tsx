import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import { notFound } from "next/navigation";
import OpportunitySubpage from "../../../../(private_route)/opportunities/o/[opportunityId]/components/OpportunitySubpage";
import { Metadata } from "next";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";
export async function generateMetadata({
  params,
}: {
  params: { opportunityId: string };
}): Promise<Metadata> {
  const oppId = parseInt(params.opportunityId);
  const [opportunityDetails] = await getOpportunity(oppId);

  if (!opportunityDetails) {
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  } else {
    const approved = await getOpportunityStatus(oppId);
    if (!approved) {
      return {
        title: "Not Found",
        description: "The page is not found",
      };
    }
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAIKEY}`,
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Generate 20+ keywords (separated by commas(,) NOT numbers in a list) for the teenager extracurricular opportunity/job listing below:",
        },
        {
          role: "user",
          content: `${opportunityDetails.title} + ${opportunityDetails.description}`,
        },
      ],
    }),
  });

  const keywordsResponse: any = await response.json();

  const opportunityKeywords = keywordsResponse.choices[0].message.content;
  console.log(opportunityKeywords);
  

  return {
    title: opportunityDetails.title,
    keywords: opportunityKeywords,
    description: opportunityDetails.description,
    alternates: {
      canonical: `/opportunities/o/${oppId}`,
      languages: {
        "en-CA": `en-CA/opportunities/o/${oppId}`,
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
  let approved;

  if (!opportunityDetails) {
    notFound();
  } else {
    approved = await getOpportunityStatus(oppId);
    if (!approved) {
      notFound();
    }
  }

  //pass things down here to subpage component
  return <OpportunitySubpage oppDetails={opportunityDetails} />;
}
