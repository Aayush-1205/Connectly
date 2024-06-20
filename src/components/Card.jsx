import Image from "next/image";
import React from "react";

const Card = ({ profile }) => {
  return (
    <div className="card relative w-[200px] h-[150px] bg-white rounded-lg hover:h-[300px]">
      <div className="imgBox absolute left-1/2 -top-[50px] -translate-x-[50%] w-[100px] h-[100px] bg-white rounded-lg overflow-hidden">
        <Image
          src={profile.profilePicture}
          alt={profile.name}
          width={100}
          height={100}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      </div>

      <div className="content absolute w-full h-full flex justify-center items-end overflow-hidden">
        <div className="details py-[20px] px-[20px] text-center w-full translate-y-[115px]">
          <h2 className="text-[1.2rem] font-semibold text-[#555] leading-[1.2em]">
            {profile.name}
          </h2>
          <span className="text-[0.75em] font-medium opacity-50">
            {profile.location}
          </span>

          <div className="data flex justify-between my-[20px]">
            <h3 className="text-[0.8rem] text-[#555] leading-[1.2em] font-semibold">
              342 <br />{" "}
              <span className="text-[0.5rem] font-medium opacity-50">
                Posts
              </span>
            </h3>

            <h3 className="text-[0.8rem] text-[#555] leading-[1.2em] font-semibold">
              {profile.followers} <br />{" "}
              <span className="text-[0.5rem] font-medium opacity-50">
                Followers
              </span>
            </h3>

            <h3 className="text-[0.8rem] text-[#555] leading-[1.2em] font-semibold">
              {profile.following} <br />{" "}
              <span className="text-[0.5rem] font-medium opacity-50">
                Following
              </span>
            </h3>
          </div>

          <div className="actionBtn flex justify-between">
            <button className="py-[5px] px-[10px] rounded-md text-[0.8rem] font-medium cursor-pointer bg-[#ff5f95] text-white">
              Follow
            </button>
            <button className="py-[5px] px-[10px] rounded-md text-[0.8rem] font-medium cursor-pointer border-[1px] border-[#ff5f95] bg-white">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
