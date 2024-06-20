"use client";
import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ChatSideBar from "@/components/ChatSideBar";
const Chat = () => {
  const [chat, setChat] = useState("");
  return (
    <div className="flex">
      <ChatSideBar />
      <div className="h-screen w-full flex flex-col">
        <div className="w-full h-[10vh] p-4 flex items-center justify-between bg-primary">
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-12 bg-white  rounded-full"
              src="https://Images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div>
              <h1 className="text-xl font-bold">Adarsh</h1>
              <h2 className="text-sm">@adarsh123</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <IoCall />
            <FaVideo />
          </div>
        </div>
        <div className="w-full h-[80vh] bg-primary"></div>
        <form className="flex items-center w-full h-[10vh] gap-2 bg-primary p-2">
          <FaMicrophone className="text-2xl text-black " />
          <input
            className="w-full border rounded-full py-2 px-4 text-black "
            type="text"
            placeholder="Type your message..."
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-medium text-xl flex items-center gap-1 py-2 px-4 rounded-full"
          >
            Send <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
