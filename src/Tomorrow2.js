import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow2() {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrow2Icon">
            <FontAwesomeIcon icon={faCloud} />
          </h5>
          <p className="card-text">
            <div id="tomorrow2">Today</div>
            <div className="temperature">
              <span id="tomorrow2Temp">20</span> °
              <span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
