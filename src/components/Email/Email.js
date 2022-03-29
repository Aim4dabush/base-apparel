import React from "react";
import "./Email.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Email() {
  return (
    <div id="email">
      <input type="text"></input>
      <button>
        <FontAwesomeIcon icon={faAngleRight} id="arrow-color"></FontAwesomeIcon>
      </button>
      <p id="validate">Please provide a valid email</p>
    </div>
  );
}

export default Email;
