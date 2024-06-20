import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const PendingRequest = (props) => {
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
      for (let item of props.pendingRequestData) {
        const profile = await getProfileDetails(item._id);
        if (profile) {
          details[item._id] = profile;
        }
      }
      setProfileDetails(details);
    }

    fetchAllProfileDetails();
  }, [props.pendingRequestData]);

  return (
    <>
      {props.pendingRequestData && props.pendingRequestData.length > 0 ? (
        props.pendingRequestData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-5 text-black "
          >
            <div className="flex items-center gap-2">
              <img
                src={
                  profileDetails[item._id]?.profilePicture ||
                  "https://source.unsplash.com/vpOeXr5wmR4/600x600"
                }
                className="object-cover h-16 w-16 rounded-full"
                alt={item.name || "Loading..."}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold">
                    {item?.name || "Loading..."}
                  </h1>
                </div>
                {console.log(profileDetails[item._id]?.bio)}
                <p className="text-sm">
                  {profileDetails[item._id]?.bio || "Loading..."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-primary-300 p-2 rounded-lg">Ignore</button>

              <button
                onClick={async () => {
                  const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/request/acceptFriendRequest`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        userId: props.myData.user._id,
                        requestId: profileDetails[item._id].user,
                      }),
                    }
                  );

                  const responseData = await response.json();
                  console.log(responseData);
                }}
                className="bg-primary-500 font-bold p-2 rounded-lg"
              >
                Accept
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No pending requests.</p>
      )}
    </>
  );
};

export default PendingRequest;
