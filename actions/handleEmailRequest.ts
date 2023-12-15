"use server";
import ReviewOpportunityAgain from "@/components/email-templates/ReviewOpportunityAgain";
//its fuckin up cause its use server but if we remove it it wont be able to find the RESEND_API_KEY

import { Resend } from "resend";

interface handleEmailRequestProps {
  operation: string;
  content: any;
}

const handleEmailRequest = async ({
  operation,
  content,
}: handleEmailRequestProps): Promise<any> => {

    let react;

    
  switch (operation) {
    case "ReviewOpportunityAgain":
      // Call the specific function
    react = ReviewOpportunityAgain(content);
   
      break;
    // Add more cases if needed for other operations

    default:
      // Handle unknown operation or provide a default behavior
      react = "Default behavior";
      break;
  }

  return react;
};

export default handleEmailRequest;
