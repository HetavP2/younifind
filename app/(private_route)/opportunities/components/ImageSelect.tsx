"use client";

import deleteOpportunityImageFromTable from "@/actions/opportunity/opp-images/deleteOpportunityImageFromTable";
import deleteOpportunityImages from "@/actions/opportunity/opp-images/deleteOpportunityImages";
import { OpportunityImages } from "@/types";
import { UUID } from "crypto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface ImageSelectProps {
  oppImages: Array<OpportunityImages>;
}

const ImageSelect: React.FC<ImageSelectProps> = ({ oppImages }) => {
  const router = useRouter();
  const handleCheckboxChange = async (value: string, imageId: string) => {
    const opportunityImageResult = await deleteOpportunityImages({
      imagePaths: [{ file_path: value }],
    });

    const tableImageDeleteResult: string | undefined =
      await deleteOpportunityImageFromTable(imageId);

    if (
      opportunityImageResult === "successAtDeletingImagesFromStorage" &&
      tableImageDeleteResult === "deletedEverywhere"
    ) {
      toast.success("Image deleted successfully");
      router.refresh();
    } else {
      toast.error("Error deleting image");
      }
      
      
  };

  return oppImages.map((image: any) => (
    <div className="container">
      <Image
        width={200}
        height={25}
        alt="Image"
        src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
      />
      <input
        type="checkbox"
        className="checkbox"
        id={image.id}
        value={image.file_path}
        onChange={(e) => handleCheckboxChange(e.target.value, e.target.id)}
        checked={true}
      />
    </div>
  ));
};

export default ImageSelect;
