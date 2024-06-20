import React from "react";

const Security = () => {
  return (
    <div className="flex flex-col p-5">
      <div>
        <h1 className="text-xl font-semibold">Security</h1>
        <p>Edit your account settings and change your password here.</p>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Email Address</h2>
        <p>
          Your current email address is{" "}
          <span className="text-red-500">fardeenahamed2001@gmail.com</span>
        </p>
        <form>
          {" "}
          <div className="w-1/2 mt-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-black  "
            >
              New Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-primary-50 border border-primary-300 text-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Enter new email"
              required
            />
            <button
              type="submit"
              className="p-2 bg-primary-600 rounded-xl mt-2 font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <p>
          We will email you a confirmation when changing your password, so
          please expect that email after submitting.
        </p>
        <form>
          {" "}
          <div className="w-1/2">
            <div className="mt-5">
              {" "}
              <label
                for="currPassword"
                className="block mb-2 text-sm font-medium text-black  "
              >
                Current password
              </label>
              <input
                type="password"
                id="currPassword"
                className="bg-primary-50 border border-primary-300 text-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Enter current password"
                required
              />
            </div>
            <div className="mt-5">
              {" "}
              <label
                for="newPassword"
                className="block mb-2 text-sm font-medium text-black  "
              >
                New password
              </label>
              <input
                type="password"
                id="newPassword"
                className="bg-primary-50 border border-primary-300 text-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="mt-5">
              {" "}
              <label
                for="confirmPassword"
                className="block mb-2 text-sm font-medium text-black "
              >
                Confirm New password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-primary-50 border border-primary-300 text-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Enter current password again"
                required
              />
            </div>

            <button
              type="submit"
              className="p-2 bg-primary-600 rounded-xl mt-2 font-bold"
            >
              Save password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
