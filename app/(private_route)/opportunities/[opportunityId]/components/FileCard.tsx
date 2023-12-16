"use client";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import React, { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";

interface FileCardProps {
  id: any;
}

const FileCard: React.FC<FileCardProps> = ({ id }) => {
  const [oppImages, setOppImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getOpportunityImages(parseInt(id));
        setOppImages(data);
      } catch (error) {
        // Handle errors, e.g., log or display an error message
        console.error("Error fetching opportunity images:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col">
      {oppImages.length >= 1 ? (
        oppImages.map((image: any) => (
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
        ))
      ) : (
        <p>No files attached.</p>
      )}
    </div>
  );
};

export default FileCard;
