"use server";
import ReviewOpportunityAgain from "@/components/email-templates/ReviewOpportunityAgain";


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
