"use client";
import React, { useState } from "react";

const ChatSideBar = () => {
  const [activeTab, setActiveTab] = useState("primary");
  return (
    <div className="w-[20vw] md:w-[30vw] h-screen bg-primary-600 rounded-lg md:flex flex-col  items-center p-4">
      <div className="border-b w-full">
        <h1 className="font-bold text-xl">CONNECTLY</h1>
      </div>
      <div className="flex items-center gap-4 w-full justify-center py-5">
        <h1
          className={`text-xl cursor-pointer ${
            activeTab === "primary" && "border-b-2 font-bold"
          }`}
          onClick={() => setActiveTab("primary")}
        >
          Primary
        </h1>
        <h1
          className={`text-xl cursor-pointer ${
            activeTab === "group" && "border-b-2 font-bold"
          }`}
          onClick={() => setActiveTab("group")}
        >
          Groups
        </h1>
      </div>
      <div>
        <input
          className="w-full border rounded-full py-2 px-4"
          type="text"
          placeholder="Search chat..."
        />
        {activeTab === "group" && (
          <ul className="flex flex-col items-center  w-full h-[68vh] overflow-y-scroll mt-2">
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1684746337008-b4a3ee946a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Memes here</div>
                <span className="">Send that meme video</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://Images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Trip Plan</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://Images.unsplash.com/photo-1461280360983-bd93eaa5051b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Besties</div>
                <span className="">send that Image</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://Images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Group Studies</div>
                <span className="">send notes</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Best Coders</div>
                <span className="">Send Code</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
          </ul>
        )}
        {activeTab === "primary" && (
          <ul className="flex flex-col items-center  w-full h-[68vh] overflow-y-scroll mt-2">
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Adarsh</div>
                <span className="">Working For Connectly</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
            <li className="w-full grid grid-cols-2 place-items-center border-b-2 py-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />

              <div>
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="">Pick me at 9Am</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatSideBar;
