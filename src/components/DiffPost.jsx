import {
  Story,
  comment,
  heart,
  post3,
  post_img2,
  post_img_2,
  share,
} from "@/app/assets";
import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const DiffPost = ({
  like,
  newCommentText,
  showPopup,
  comments,
  handleLike,
  handleCommentClick,
  handleSaveComment,
  setNewCommentText,
}) => {
  return (
    <div className="bg-white w-[700px] h-auto rounded-xl p-5">
      <div className="head flex gap-3">
        <div>
          <Image alt="connectly" className="w-14 h-14" src={post3} />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col ">
            <h1 className="font-medium">Alexandro Vargas</h1>
            <p className="text-xs text-black ">2h Ago</p>
          </div>

          <BsThreeDotsVertical size={22} />
        </div>
      </div>

      <div className="my-10 border">
        <div>
          <Image alt="connectly" src={post_img2} />
        </div>

        <div className="h-[17rem]">
          <div className="flex items-center gap-5 relative bottom-12 left-5 ">
            <div>
              <Image
                alt="connectly"
                className="w-[143px] h-[143px]"
                src={post_img_2}
              />
            </div>
            <div className="flex flex-col mt-10">
              <h2>Heading Here</h2>
              <div className="flex">
                <p className="border rounded-full bg-[#FFEDED] p-2 text-xs">
                  36k Interested
                </p>
                <p className="border rounded-full bg-[#FFEDED] p-2 text-xs">
                  10k Going
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 p-4 relative bottom-10">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm">
                  Wednesday, 24 January 2023 from 11:00-12:30
                </p>
                <p>Tomorrow</p>
              </div>

              <p className="text-sm">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>

            <div className="flex gap-5">
              <button className="bg-[#FF578E] rounded-md text-white px-4 py-2">
                Be Our Sponsor
              </button>
              <button className="border border-[#FF578E] px-4 py-2">
                Book me in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <p className="text-black ">{like} likes</p>
          <p className="text-black ">{comments.length} comments</p>
        </div>

        <p className="text-black text-xs">2k share</p>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <p onClick={handleLike} className="flex items-center gap-2">
            <Image alt="connectly" width={22} src={heart} /> Like
          </p>

          <p onClick={handleCommentClick} className="flex items-center gap-2">
            <Image alt="connectly" width={22} src={comment} /> Comment
          </p>
        </div>

        <p className="flex items-center gap-2">
          <Image alt="connectly" width={22} src={share} /> Share
        </p>
      </div>

      {showPopup && (
        <div
          onClick={handleCommentClick}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center "
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
            alt="connectly"
            src={Story}
            className="rounded-full w-12 h-12"
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
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default DiffPost;
