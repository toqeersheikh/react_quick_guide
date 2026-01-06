import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="bg-red-400 w-80 overflow-hidden h-150 relative rounded-4xl">
      <img
        className="w-full h-full object-cover cover"
        src={props.img}
        alt=""
      />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCard;
