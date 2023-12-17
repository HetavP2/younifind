import { schedule, HandlerResponse } from "@netlify/functions";

("use server");
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const opportunityExpired = schedule(
  "* * * * *",
  async (): Promise<HandlerResponse> => {
    try {
      const supabase = createServerComponentClient({
        cookies: cookies,
      });

      const currentDateTime = new Date();
      const { data: expiredOpportunities, error: fetchError } = await supabase
        .from("opportunities")
        .select("*")
        .lte("expiry_date", currentDateTime.toISOString());

      if (fetchError) {
        console.error("Error fetching opportunities:", fetchError.message);
        return { statusCode: 500, body: "Internal Server Error" };
      }

      for (const opportunity of expiredOpportunities) {
        const { error: deleteError } = await supabase
          .from("opportunities")
          .delete()
          .eq("id", opportunity.id);

        if (deleteError) {
          console.error("Error deleting opportunity:", deleteError.message);
          return { statusCode: 500, body: "Internal Server Error" };
        }
      }

      return { statusCode: 200, body: "Opportunities deleted successfully" };
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      return { statusCode: 500, body: "Internal Server Error" };
    }
  }
);

export { opportunityExpired };
