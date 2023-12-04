"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    //handle upload later
  };

  return (
    <div className="flex flex-col">
      <div
        className="
            flex
            items-center
            justify-between
            px-5
            pt-4
            "
      >
        <div
          className="
                inline-flex
                items-center
                gap-x-2
                "
        >
          <TbPlaylist size={26} className="text-neutral-400" />
          <p>Your library</p>
        </div>
        <AiOutlinePlus onClick={onClick} size={20} />
      </div>
      <div>Songs</div>
    </div>
  );
};

export default Library;
