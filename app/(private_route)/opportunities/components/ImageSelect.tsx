"use client";

import deleteOpportunityImageFromTable from "@/actions/opportunity/opp-images/deleteOpportunityImageFromTable";
import deleteOpportunityImages from "@/actions/opportunity/opp-images/deleteOpportunityImages";
import { OpportunityImages } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BiLink } from "react-icons/bi";
import { GoTrash } from "react-icons/go";

interface ImageSelectProps {
  oppImages: Array<OpportunityImages>;
}

const ImageSelect: React.FC<ImageSelectProps> = ({ oppImages }) => {
  const router = useRouter();
  const handleDelete = async (value: string, imageId: string) => {
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

  return  oppImages.map((image: any) => (
    <div className="container ">
      {image.file_type === "application/pdf" ? (
        <>
          <a
            key={image.file_path}
            className="text-md font-medium text-royalblue flex items-center"
            href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
            target="blank"
          >
            <BiLink
              className="mr-2 text-xl text-black "
              key={image.file_path}
            />
            {image.file_name}
          </a>
          <button
            id={image.id}
            value={image.file_path}
            onClick={(e) =>
              handleDelete(e.currentTarget.value, e.currentTarget.id)
            }
          >
            <GoTrash />
          </button>
        </>
      ) : (
        <>
          <Image
            width={200}
            height={25}
            alt="Image"
            src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
          />
          <button
            id={image.id}
            value={image.file_path}
            onClick={(e) =>
              handleDelete(e.currentTarget.value, e.currentTarget.id)
            }
          >
            <GoTrash />
          </button>
        </>
      )}
    </div>
  ));
};

export default ImageSelect;
