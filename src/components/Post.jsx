"use client";
import React, { useEffect, useState } from "react";
import { Story, heart, comment, share } from "../app/assets";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Cookies from "js-cookie";
import Image from "next/image";

const Post = () => {
  const [like, setLike] = useState(0);
  const [newCommentText, setNewCommentText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleCommentClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSaveComment = (e) => {
    e.preventDefault();
    if (newCommentText.length > 1) {
      const newComment = {
        text: newCommentText,
        timestamp: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setNewCommentText("");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${Cookies.get("token")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      {posts && (
        <div className="flex flex-col gap-5 py-5">
          {posts.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-lg w-[700px] h-auto rounded-xl p-5"
            >
              <div className="head flex gap-3">
                <div>
                  {console.log(p)}
                  <Image alt="connectly" className="w-14 h-14" src={Story} />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col ">
                    <h1 className="font-medium">{p.user.name}</h1>
                    <p className="text-xs text-black ">{p.createdAt}</p>
                  </div>
                  <BsThreeDotsVertical size={22} />
                </div>
              </div>
              <div className="my-3 flex flex-col gap-2">
                <p className="text-black ">{p.content}</p>
                {p.Image && (
                  <Image
                    alt="connectly"
                    src={p.asset}
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <p className="text-black ">{p.likes} likes</p>
                  <p className="text-black ">{comments.length} comments</p>
                </div>
                <p className="text-black text-xs">2k share</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <p onClick={handleLike} className="flex items-center gap-2">
                    <Image width={22} src={heart} alt="heart icon" /> Like
                  </p>
                  <p
                    onClick={handleCommentClick}
                    className="flex items-center gap-2"
                  >
                    <Image width={22} src={comment} alt="comment icon" />{" "}
                    Comment
                  </p>
                </div>
                <p className="flex items-center gap-2">
                  <Image width={22} src={share} alt="share icon" /> Share
                </p>
              </div>
              {showPopup && (
                <div
                  onClick={handleCommentClick}
                  className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
                  role="dialog"
                  aria-modal="true"
                >
                  <div
                    className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                    aria-label="Popup content"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold">Comments</h2>
                      <button onClick={handleCommentClick}>
                        <RxCross1 size={22} />
                      </button>
                    </div>
                    <ul className="mt-4">
                      {comments.map((comment, index) => (
                        <li
                          key={index}
                          className="border border-gray-300 rounded-md p-2 mb-2"
                        >
                          <p className="text-gray-700">{comment.text}</p>
                          <p className="text-gray-700  text-sm">
                            {new Date(comment.timestamp).toLocaleString()}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <hr className="my-2" />
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Story}
                    className="rounded-full w-12 h-12"
                    alt="user story"
                  />
                </div>
                <div className="w-full">
                  <form onSubmit={handleSaveComment}>
                    <input
                      type="text"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      placeholder="Write a Comment..."
                      className="bg-[#FFEDED] rounded-xl w-full px-4 py-3"
                    />
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Post;
