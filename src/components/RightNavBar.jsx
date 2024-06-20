import React, { useState } from "react";
import AvatarComponent from "./AvatarComponent";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import ThemeToggleMode from "./ThemeToggleMode";
const RightNavBar = () => {
  const [activeTab, setActiveTab] = useState("feed");
  return (
    <div className="h-[65vh] w-[20vw] rounded-lg flex flex-col justify-between items-start p-5 bg-secondary shadow-lg">
      <div className="flex items-center gap-2">
        <AvatarComponent
          imgSrc={"https://github.com/shadcn.png"}
          name={"fardeen"}
        />
        <h2 className="text-xl font-semibold">profile</h2>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/feed"} className="flex items-center gap-2 text-xl">
              <MdOutlineDashboard />
              Feed
            </Link>
          </li>
          <li>
            <Link href={"/explore"} className="flex items-center gap-2 text-xl">
              <AiOutlineCompass />
              Explore
            </Link>
          </li>
          <li>
            <Link href={"/chat"} className="flex items-center gap-2 text-xl">
              <IoChatbubbleEllipsesOutline />
              Chat
            </Link>
          </li>
          <li>
            <Link
              href={"/notification"}
              className="flex items-center gap-2 text-xl"
            >
              <FaRegBell />
              Notification
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightNavBar;
