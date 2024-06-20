import React from "react";
import {
  Img,
  Pic,
  feed,
  group,
  vibe,
  pending,
  bell,
  bag,
  message,
} from "../app/assets";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="px-4 py-2 flex items-center justify-between bg-white sticky top-0 z-30">
        <div className="logo w-32">
          {/* logo */}
          <Image
            alt="connectly"
            src={Img}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2">
            {/* NavLinks */}
            <Link
              href={"/"}
              className="text-white bg-[#FF578E] text-xs rounded-full px-4 py-2 flex items-center gap-2"
            >
              <Image alt="connectly" width={22} src={feed} />
              Feed
            </Link>

            <Link
              href={"/"}
              className="bg-[#FFEDED] focus:text-white focus:bg-[#FF578E] rounded-full text-xs px-4 py-2 flex items-center gap-2"
            >
              <Image alt="connectly" width={22} src={group} />
              Explore
            </Link>

            <Link
              href={"/"}
              className="bg-[#FFEDED] focus:text-white focus:bg-[#FF578E] rounded-full text-xs px-4 py-2 flex items-center gap-2"
            >
              <Image alt="connectly" width={22} src={vibe} />
              Vibes
            </Link>

            <Link
              href={"/"}
              className="bg-[#FFEDED] focus:text-white focus:bg-[#FF578E] rounded-full text-xs px-4 py-2 flex items-center gap-2"
            >
              <Image alt="connectly" width={22} src={pending} />
              Pending Requests
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-black ">
          {/* sideProfile links */}
          <Image alt="connectly" width={21} src={bell} />
          <Image alt="connectly" width={21} src={bag} />
          <Image alt="connectly" width={21} src={message} />

          {/* Profile */}
          <div className="pic w-10 h-10">
            <Image
              alt="connectly"
              src={Pic}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
