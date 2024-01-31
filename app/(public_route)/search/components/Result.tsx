import React from "react";

interface ResultCardProps {
  recordData?: any | null;
}

const ResultCard: React.FC<ResultCardProps> = ({ recordData }) => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl  flex">
      <div className="w-2/3 flex-column p-4">
        <h1 className="font-bold text-2xl ">{recordData.title}</h1>
        <div className="flex font-medium">
          {recordData.provider} - {recordData.industry}
        </div>
        <div className="text-md mt-4">{recordData.description}</div>
      </div>
      <div
        className="w-1/3 bg-royalyellow pl-[20px] relative flex flex-col p-4 items-center justify-center rounded-2xl "
        style={{
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "45px",
          borderBottomRightRadius: "0px",
        }}
      >
        {" "}
        <div className="flex justify-evenly w-full">
          <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
            {recordData.mode}
          </div>
          <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
            {recordData.typelabel}
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-8">
          <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
            {recordData.isfor}
          </div>

          <div className="px-2 py-1 rounded-lg text-sm bg-royalblue text-white font-medium">
            {recordData.season}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
