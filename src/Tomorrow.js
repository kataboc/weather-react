import React from "react";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow() {
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrowIcon">
            <FontAwesomeIcon icon={faCloudSunRain} />
          </h5>
          <p className="card-text">
            <div id="tomorrow">Today</div>
            <div className="temperature">
              <span id="tomorrowTemp">20</span> °
              <span className="degrees">C</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
