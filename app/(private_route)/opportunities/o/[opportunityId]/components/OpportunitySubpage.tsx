import React from "react";
import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";

import FileCard from "./FileCard";



interface OpportunitySubpageProps {
  oppDetails: any;
}

const OpportunitySubpage: React.FC<OpportunitySubpageProps> = ({
  oppDetails,
}) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar>
        <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
      </Navbar>
      <div className="flex w-full">
        {/* // sidebar end, body start */}
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="mx-auto p-4">
            <h1 className="font-semibold text-3xl text-center">
              {oppDetails.title}
            </h1>
            <p className="font-medium my-8 flex justify-center text-center">
              {oppDetails.provider} · {oppDetails.industry}
            </p>
            <div className="flex ">
              <div className="flex justify-evenly w-full gap-2">
                <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
                  {oppDetails.mode}
                </div>
                <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
                  {oppDetails.typelabel}
                </div>

                {/* <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
            {recordData.location}
          </div> */}

                <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
                  {oppDetails.isfor}
                </div>

                <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
                  {oppDetails.season}
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/5 mx-auto ">
            <h2 className="font-semibold mb-4 flex justify-center ">
              Description:{" "}
            </h2>
            <p>{oppDetails.description}</p>
          </div>

          <div className="">
            {/* <div className="flex flex-col">
              {oppImages ? (
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
            </div> */}
            <FileCard id={oppDetails.id} />
          </div>

          <div className="w-2/5 mx-auto">
            <h2 className="font-semibold mt-4 flex justify-center">
              Location:{" "}
              {oppDetails.location ? oppDetails.location : "Unavailable"}
            </h2>
          </div>

          <div className="w-2/5 mx-auto">
            <h2 className="font-semibold mb-4 flex justify-center">
              Contact Email:{" "}
              {oppDetails.contact_email
                ? oppDetails.contact_email
                : "Unavailable"}
            </h2>
          </div>
        </div>
        {/* // sidebar */}
        {/* <div className="w-1/4"></div> */}
      </div>
    </div>
  );
};

export default OpportunitySubpage;
