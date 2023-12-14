// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";

import { Database } from "@/types_db";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";

interface UploadOpportunityImagesProps {
    id: number;
    user_id: string;
  allOpportunityImages: FormDataEntryValue[];
}

const uploadOpportunityImages: React.FC<UploadOpportunityImagesProps> = async ({
  id,
  user_id,
  allOpportunityImages,
}) => {
  const supabase = createServerActionClient<Database>({
    cookies,
  });
  try {
    const uploadPromises = allOpportunityImages.map(async (image) => {
      let random_uuid = crypto.randomUUID();
      const { data: oppImageData, error: oppImageError } =
        await supabase.storage
          .from("opportunity-images")
          .upload(`user-${user_id}/oppImg-${random_uuid}`, image, {
            cacheControl: "3600",
            upsert: false,
          });
      
      

      if (oppImageData) {
        await supabase.from("opportunity_images").insert({
          opportunity_id: id,
          file_path: oppImageData.path,
        });
      }
      
      // Handle oppImageData and oppImageError as needed
    });

    // Wait for all uploads to complete
    await Promise.all(uploadPromises);

    console.log("All images uploaded successfully to storage and table");
  } catch (error) {
    console.error("Error uploading images:", error);
    return ''
  }

  return "All images uploaded successfully to storage and table";
};
export default uploadOpportunityImages;
