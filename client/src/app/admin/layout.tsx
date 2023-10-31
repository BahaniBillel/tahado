import React from "react";

function layout({ children }) {
  return (
    <div className="flex flex-row justify-start items-center ">
      <div className="border border-r border-charcoal w-1/6 ">
        side bar goes here
      </div>

      {children}
    </div>
  );
}

export default layout;
