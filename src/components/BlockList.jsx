import React from "react";

const BlockList = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold">Block List</h1>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {" "}
            <img
              className="h-20 w-20 bg-white p-2 rounded-full   "
              src="https://Images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2>Name</h2>
          </div>
          <button className="p-2 bg-primary-700 rounded-lg">Unblock</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {" "}
            <img
              className="h-20 w-20 bg-white p-2 rounded-full   "
              src="https://Images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2>Name</h2>
          </div>
          <button className="p-2 bg-primary-700 rounded-lg">Unblock</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {" "}
            <img
              className="h-20 w-20 bg-white p-2 rounded-full   "
              src="https://Images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2>Name</h2>
          </div>
          <button className="p-2 bg-primary-700 rounded-lg">Unblock</button>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
