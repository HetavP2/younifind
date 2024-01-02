import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import { notFound } from "next/navigation";
import OpportunitySubpage from "./components/OpportunitySubpage";
import { Metadata } from "next";
import getOpportunityStatus from "@/actions/opportunity/get-opps/getOpportunityStatus";
import OpenAI from "openai";

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

  const openai = new OpenAI();

    const textModeration = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "Generate 50+ keywords for the teenager extracurricular opportunity/job listing below:",
        },
        {
          role: "user",
          content: `${opportunityDetails.title} + ${opportunityDetails.description}`,
        },
      ],
    });

    const opportunityKeywords = textModeration.choices[0].message.content;
  
  return {
    title: opportunityDetails.title,
    keywords:opportunityKeywords,
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
  const approved = await getOpportunityStatus(oppId);


  if (!opportunityDetails || !approved) {
    notFound();
  }
  
    
    //pass things down here to subpage component
  return <OpportunitySubpage oppDetails={opportunityDetails} />;
}
