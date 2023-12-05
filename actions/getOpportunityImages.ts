import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface GetOpportunityImagesProps {
  userId: string;
}

const getOpportunityImages: React.FC<GetOpportunityImagesProps> = async ({
  userId,
}) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data, error } = await supabase.storage
    .from("opportunity-images")
    .list(userId + "/", {
      // limit: 10,
      offset: 0,
      sortBy: {
        column: "created_at",
        order: "asc",
      },
    });
    

  if (error) {
    console.error(error);
  }

  return (data as any) || [];
};

export default getOpportunityImages;
