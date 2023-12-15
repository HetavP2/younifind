// EXAMPLE OF GETTING DATA FROM SUPABASE- help with org
"use server";

import { Database } from "@/types_db";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface DeleteOpportunityImagesProps {
  imagePaths: Array<any> | null;
}
const deleteOpportunityImages = async ({
  imagePaths,
}: DeleteOpportunityImagesProps): Promise<string> => {
  const supabase = createClientComponentClient<Database>();

  try {
    if (imagePaths) {
      const uploadPromises = imagePaths.map(async (path) => {
        if (path) {
          const { data, error: oppImageError } = await supabase.storage
            .from("opportunity-images")
            .remove([path.file_path]);
        }

        // Handle oppImageData and oppImageError as needed
      });

      await Promise.all(uploadPromises);
    }

    // Wait for all uploads to complete

    console.log("All images deleted successfully from bucket");
    return "successAtDeletingImagesFromStorage";
  } catch (error) {
    console.error("Error deleting images from bucket:", error);
  }

  return "noSuccessAtDeletingImagesFromStorage";
};

export default deleteOpportunityImages;
