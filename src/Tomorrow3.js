import React from "react";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow3() {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow3Icon">
            <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </h5>
          <p className="card-text">
            <div id="tomorrow3">Today</div>
            <div className="temperature">
              <span id="tomorrow3Temp">20</span> °
              <span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
