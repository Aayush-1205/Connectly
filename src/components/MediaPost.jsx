"use client";
import { Media_profile, Photos, Photos2 } from "@/app/assets";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const MediaPost = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab("photo");
  }, []);

  const media_photo = [
    Media_profile,
    Photos,
    Photos2,
    Media_profile,
    Photos,
    Photos2,
    Media_profile,
    Photos,
  ];

  return (
    <div className="bg-white w-[760px] rounded-xl px-5 py-3 flex flex-col gap-5">
      <h1 className="text-lg font-semibold">Media</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={() => handleTabChange("photo")}
          className={`font-medium hover:text-[#F45044]  ${
            activeTab === "photo"
              ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
              : "font-medium"
          }`}
        >
          Photos
        </button>
        <button
          onClick={() => handleTabChange("video")}
          className={`font-medium hover:text-[#F45044]  ${
            activeTab === "video"
              ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
              : "font-medium"
          }`}
        >
          Video
        </button>
        <button
          onClick={() => handleTabChange("audio")}
          className={`font-medium hover:text-[#F45044]  ${
            activeTab === "audio"
              ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
              : "font-medium"
          }`}
        >
          Audio
        </button>
      </div>

      <div>
        <div className="w-full h-full rounded-lg mx-auto">
          {activeTab === "photo" && (
            <>
              <div className="grid grid-cols-2 gap-3 px-1 py-3">
                {media_photo.map((photo, index) => {
                  return (
                    <div key={index} className="">
                      <Image
                        alt="connectly"
                        className="h-72 w-full rounded"
                        src={photo}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaPost;
