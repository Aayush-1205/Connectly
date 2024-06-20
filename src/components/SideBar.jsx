'use client'
import React, { useEffect, useState } from "react";
import { men_women } from "../app/assets";
import Link from "next/link";
import { Img } from "../app/assets";
import { MdEdit, MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import Image from "next/image";

const SideBar = ({ views, edit }) => {

  return (
    <div>
      {/* <!-- component --> */}
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-white text-white h-full md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-md"
          x-show="sidenav"
        >
          <div className="py-5 px-1">
            <div id="menu" className="flex flex-col gap-2 ">
              <div className="w-32 h-14 mx-auto">
                <Image alt="connectly" src={Img} className="object-cover" />
              </div>

              <div className="py-5 flex flex-col gap-1">
                <Link
                  href={"/Pref"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <MdOutlineInterests size={22} /> Interest
                </Link>

                <Link
                  href={"/groups"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <GrGroup size={22} /> Groups
                </Link>

                <Link
                  href={"/party"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LuPartyPopper size={22} /> Party
                </Link>

                <Link
                  href={"/"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LiaUserFriendsSolid size={22} /> Friends
                </Link>
              </div>

              {edit ? (
                <>
                  <div className="flex gap-5 flex-col">
                    <div className="rounded-lg overflow-hidden">
                      <div className="bg-[#F45044] text-white px-5 py-7">
                        <Link
                          href={"/editProfile"}
                          className="flex items-center gap-2"
                        >
                          Edit Profile <MdEdit size={22} />
                        </Link>
                      </div>

                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-black ">
                        <p>Language</p>
                        <p className="text-xs">English, Hindi</p>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-black ">
                        <p>Vibe Matches</p>
                        <p className="text-xs">12</p>
                      </div>
                      <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex flex-col text-black ">
                        <p>City/Town</p>
                        <p className="text-xs">Kolkata</p>
                      </div>
                    </div>
                    <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center rounded-lg text-black ">
                      <Image
                        alt="connectly"
                        src={men_women}
                        className="w-8 h-8"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#F45044]">Looking for</p>
                        <p className="text-xs">Men & Women</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
