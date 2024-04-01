import React from "react";
import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";

import FileCard from "./FileCard";
import AuthLink from "@/components/AuthLink";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface OpportunitySubpageProps {
  oppDetails: any;
}

const OpportunitySubpage: React.FC<OpportunitySubpageProps> = async ({
  oppDetails,
}) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <div className="w-full flex flex-col">
      <Navbar>
        <AuthLink session={session} />
      </Navbar>
      <div className="bg-red-300 px-4 py-3 text-white w-full">
        <p className="text-center text-sm font-medium">
          Welcome to younifind's Pilot Program, in partnership with the Peel
          District School Board.
        </p>
      </div>
      <div className="flex w-full">
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
      </div>
    </div>
  );
};

export default OpportunitySubpage;
