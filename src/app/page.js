"use client";
import "./globals.css";
import {
  Post,
  SideBar,
  StoryCard,
  CreatePost,
  RightNav,
  Footer,
} from "../components";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/feed");
  }, []);
  return (
    <>
      <Loading />
      {/* <div className="grid-container relative">
        <div className="p-5 flex items-center gap-5 story-card">
          <StoryCard />
        </div>
        <div className="sidebar-left">
          <SideBar />
        </div>
        <div className="sidebar-right p-5">
          <RightNav />
        </div>
        <div className="feed-section mx-auto">
          <div className="flex items-center justify-center flex-col ">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
}
