import React from "react";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow1() {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow1Icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </h5>
          <p className="card-text">
            <div id="tomorrow1">Today</div>
            <div className="temperature">
              <span id="tomorrow1Temp">20</span> °
              <span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
