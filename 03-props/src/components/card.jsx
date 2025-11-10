import React from "react";

const card = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <div>
        <img src={props.img} alt="User Image" />
      </div>
      <div>
        <h2>{props.user}</h2>
        <p>
          Front-end Developer passionate about creating modern web experiences.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default card;
