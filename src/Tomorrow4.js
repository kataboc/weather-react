import React from "react";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow4() {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow4Icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </h5>
          <p className="card-text">
            <div id="tomorrow4">Today</div>
            <div className="temperature">
              <span id="tomorrow4Temp">20</span> °
              <span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
