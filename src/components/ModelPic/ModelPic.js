import React from "react";
import "./ModelPic.css";

function RightSide() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/hero-desktop.jpg"}
        alt="model pic"
        id="model-pic"
      ></img>
    </div>
  );
}

export default RightSide;
