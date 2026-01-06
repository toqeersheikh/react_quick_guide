import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-between   p-6">
      <h1 className="bg-white h-10 w-10 flex justify-center items-center rounded-full font-semibold">
        {props.id + 1}
      </h1>
      <div className="">
        <p className="text-lg text-white mb-10 leading-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint
          fugit voluptatum vero inventore dolorum.
        </p>
        <div className="">
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 ml-2 text-white px-4 py-2 rounded-full">
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
