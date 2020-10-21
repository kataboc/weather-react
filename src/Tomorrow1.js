import React from "react";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow1(props) {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow1Icon">
            <FontAwesomeIcon icon={faCloudSun} />
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
