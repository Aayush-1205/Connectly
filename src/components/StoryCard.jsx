import React from "react";
import {
  Story,
  Story2,
  Story3,
  Story4,
  Story5,
  Story6,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
} from "../app/assets";

import { GoPlus } from "react-icons/go";
import Image from "next/image";

const StoryCard = () => {
  return (
    <>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <GoPlus className="text-white" size={30} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs text-black ">
          Create Story
        </p>
      </div>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story2} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <Image alt="connectly" src={profile2} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs font-medium">
          Annette Black
        </p>
      </div>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story3} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <Image alt="connectly" src={profile3} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs font-medium">
          Cody Fisher
        </p>
      </div>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story4} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <Image alt="connectly" src={profile4} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs font-medium">
          Jane Cooper
        </p>
      </div>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story5} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <Image alt="connectly" src={profile5} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs font-medium">
          Jerome Bell
        </p>
      </div>
      <div className="w-[6.5rem] h-[10.5rem] flex flex-col bg-white rounded-xl relative">
        <div>
          <Image alt="connectly" src={Story6} className="h-32" />
        </div>

        <div className="bg-[#FF578E] w-10 h-10 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2">
          <Image alt="connectly" src={profile6} />
        </div>

        <p className="absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-xs font-medium">
          Darrell Steward
        </p>
      </div>
    </>
  );
};

export default StoryCard;
