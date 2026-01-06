import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="flex items-center gap-10  pt-10 pb-16 px-18">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
