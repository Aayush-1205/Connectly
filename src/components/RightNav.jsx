import React from "react";
import Link from "next/link";
import { Pic, feed } from "../app/assets";
import { MdOutlineExplore } from "react-icons/md";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import AvatarComponent from "./AvatarComponent";
import Image from "next/image";
import { User } from "lucide-react";

const RightNav = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-white text-black  h-fit md:block shadow-xl px-3 w-[14rem] overflow-x-hidden transition-transform duration-300 ease-in-out rounded-lg"
          x-show="sidenav"
        >
          <div className="py-3 px-1">
            <div id="menu" className="flex flex-col gap-2">
              <div>
                <Link
                  href={"/profile"}
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <AvatarComponent
                    imgSrc={"https://github.com/shadcn.png"}
                    name={"fardeen"}
                  />{" "}
                  <span>Profile</span>
                </Link>
              </div>

              <Link
                href={"/feed"}
                className="font-medium py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <Image
                  alt="connectly"
                  src={feed}
                  className="text-black  w-5 h-5"
                />{" "}
                Feeds
              </Link>

              <Link
                href={"/explore"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <MdOutlineExplore size={22} /> Explore
              </Link>

              <Link
                href={"/chat"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <IoChatbubbleEllipsesOutline size={22} /> Chat
              </Link>

              <Link
                href={"/notification"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <IoNotificationsOutline size={22} /> Notification
              </Link>
              <Link
                href={"/auth"}
                className="font-medium text-gray-700 py-2 px-2 hover:bg-[#F45044] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
              >
                <User size={22} /> Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNav;
