import React from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tomorrow3(props) {
  let condition = props.cond;
  let description = props.desc;
  let fahrenheit = Math.round(props.temp * (9 / 5) + 32);
  function getIcon() {
    let icon = "";
    if (condition === "Clear") {
      icon = faSun;
    } else if (
      (condition === "Clouds" && description === "few clouds") ||
      (condition === "Clouds" && description === "scattered clouds")
    ) {
      icon = faCloudSun;
    } else if (condition === "Clouds") {
      icon = faCloud;
    } else if (condition === "Drizzle") {
      icon = faCloudShowersHeavy;
    } else if (condition === "Rain") {
      icon = faCloudSunRain;
    } else if (condition === "Thunder") {
      icon = faBolt;
    } else if (condition === "Snow") {
      icon = faSnowflake;
    } else {
      icon = faWater;
    }

    return icon;
  }
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrowIcon">
            <FontAwesomeIcon icon={getIcon()} />
          </h5>
          <div className="card-text">
            <div id="tomorrow">{props.date}</div>
            <div className="temperature">
              {props.temp} °<span className="degrees">C</span>
              <div className="fahrenheit">{fahrenheit} °F</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
