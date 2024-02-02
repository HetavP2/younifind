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
  const handleDelete = async (e: any, value: string, imageId: string) => {
    e.preventDefault();

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
    <div className="container" key={image.id}>
      {image.file_type === "application/pdf" ? (
        <div key={image.id}>
          <a
            key={image.file_path}
            className="text-md font-medium text-royalblue flex items-center"
            href={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
            target="blank"
            style={{ fontFamily: "Verdana", color: "#D1D5DB" }}
          >
            <BiLink
              className="mr-2 text-xl text-royal text-royalyellow"
              key={image.file_path}

            />
            {image.file_name}
          </a>
          <button
            id={image.id}
            value={image.file_path}
            key={image.id}
            type="button"
            onClick={(e) =>
              handleDelete(e, e.currentTarget.value, e.currentTarget.id)
            }
          >
            <GoTrash key={image.id} />
          </button>
        </div>
      ) : (
        <div key={image.id}>
          <Image
            width={200}
            height={25}
            key={image.id}
            alt="Image"
            src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
          />
          <button
            id={image.id}
            key={image.id}
            value={image.file_path}
            type="button"
            onClick={(e) =>
              handleDelete(e, e.currentTarget.value, e.currentTarget.id)
            }
          >
            <GoTrash key={image.id} />
          </button>
        </div>
      )}
    </div>
  ));
};

export default ImageSelect;
