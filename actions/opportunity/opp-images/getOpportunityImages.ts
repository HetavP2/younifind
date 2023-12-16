// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
import { OpportunityImages } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const getOpportunityImages = async (opportunityId: number): Promise<OpportunityImages[]> => {
  const supabase = createClientComponentClient();

  const { data: opportunityImages, error } = await supabase
    .from("opportunity_images")
    .select()
    .filter("opportunity_id", "in", `(${opportunityId})`);

  if (error) {
    console.error(error);
  }

  return (opportunityImages as any) || [];
};

export default getOpportunityImages;
