import React from "react";

function Background() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/bg-pattern-desktop.svg"}
        alt="background"
      ></img>
    </div>
  );
}

export default Background;
