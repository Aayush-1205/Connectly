import React from "react";

const NotificationEdit = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold">Notifications</h1>
      <p>You will get only notification what have enabled.</p>
      <div className="flex items-center gap-10 mt-5 ">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-lg font-medium text-gray-900">
              Comments
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-800"></div>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-lg font-medium text-gray-900">
              Likes
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-800"></div>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-lg font-medium text-gray-900">
              Party
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-800"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationEdit;
