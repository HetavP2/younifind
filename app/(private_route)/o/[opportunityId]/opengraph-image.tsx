import getOpportunity from "@/actions/opportunity/get-opps/getOpportunity";
import getOpportunityImages from "@/actions/opportunity/opp-images/getOpportunityImages";
import { ImageResponse } from "next/og";

export const size = {
  width: 850,
  height: 450,
};

export const contentType = "image/png";

export default async function og({
  params,
}: {
  params: { opportunityId: string };
}) {
  const oppId = parseInt(params.opportunityId);
  const [opportunityDetails] = await getOpportunity(oppId);
  const oppImages: any = await getOpportunityImages(oppId);

  return new ImageResponse(
    (
      //copied from video
      <div tw="relative flex items-center justify-center">
        {oppImages.map((image: any) => (
          <img
            key={image.file_path}
            src={`https://qbfbghtpknhobofhpxfr.supabase.co/storage/v1/object/public/opportunity-images/${image.file_path}`}
            alt={opportunityDetails?.title}
          />
        ))}
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <div tw="absolute flex items-center top-2 w-full ">
          <p tw="text-white text-4xl flex font-bold m-5">
            {opportunityDetails?.title}
          </p>
          <p tw="text-indigo-200 text-xl flex font-bold m-5">
            {opportunityDetails?.provider}
          </p>
          <p tw="text-purple-200 text-xl flex font-bold m-5">
            {opportunityDetails?.updated_at?.toString()}
          </p>
        </div>
      </div>
    ),
    size
  );
}
