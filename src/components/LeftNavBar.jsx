import Link from "next/link";
import React from "react";

const LeftNavBar = () => {
  return (
    <div className="h-[80vh] w-[22vw] flex flex-col p-5 bg-secondary shadow-lg">
      <div>
        <h1>Connectly</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/intrest"}>Intrests</Link>
          </li>
          <li>
            <Link href={"/grouos"}>Groups</Link>
          </li>
          <li>
            <Link href={"/party"}>Party</Link>
          </li>
          <li>
            <Link href={"/friends"}>Friends</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBar;
