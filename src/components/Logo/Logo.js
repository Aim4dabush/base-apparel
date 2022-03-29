import React from "react";
import "./Logo.css";

function Logo() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/logo.svg"}
        alt="logo"
        id="logo"
      ></img>
    </div>
  );
}

export default Logo;
