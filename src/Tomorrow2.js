import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow2(props) {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow2Icon">
            <FontAwesomeIcon icon={faCloud} />
          </h5>
          <p className="card-text">
            <div id="tomorrow">{props.date}</div>
            <div className="temperature">
              {props.temp} °<span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
