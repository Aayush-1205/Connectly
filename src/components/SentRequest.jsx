import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

const SentRequest = (props) => {
  console.log(props);
  const [profileDetails, setProfileDetails] = useState({});

  async function getProfileDetails(userId) {
    const token = Cookies.get("token"); // Replace with the actual token

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/profileDetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
            "user-id": userId,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const profileDetails = await response.json();
      return profileDetails;
    } catch (error) {
      console.error("Error fetching profile details:", error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchAllProfileDetails() {
      const details = {};
      for (let item of props.sentRequestData) {
        const profile = await getProfileDetails(item._id);
        if (profile) {
          details[item._id] = profile;
        }
      }
      setProfileDetails(details);
    }

    fetchAllProfileDetails();
  }, [props.sentRequestData]);

  return (
    <>
      {props.sentRequestData && props.sentRequestData.length > 0 ? (
        props.sentRequestData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-5 text-black "
          >
            <div className="flex items-center gap-2">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-16 w-16 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold">
                    {profileDetails[item._id]?.name || "Loading..."}
                  </h1>
                  <h2>@{profileDetails[item._id]?.username || "Loading..."}</h2>
                </div>
                <p className="text-sm">
                  {profileDetails[item._id]?.bio || "Loading..."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaClock className="text-xl" />
                <span>{"3days"}</span>
              </div>
              <button className="bg-primary-300 p-2 rounded-lg">Ignore</button>
            </div>
          </div>
        ))
      ) : (
        <p>No sent requests.</p>
      )}
    </>
  );
};

export default SentRequest;
