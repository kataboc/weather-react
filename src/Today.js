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
import DateFormat from "./DateFormat";
import Button from "./Button";

export default function Today(props) {
  let condition = props.cond;
  let description = props.desc;

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
    <div className="row">
      <div className="col-12">
        <div className="card-today">
          <div className="card-body">
            <h2 class="card-title">{props.name}</h2>
            <h5 className="card-today-icon" id="todayIcon">
              <FontAwesomeIcon icon={getIcon()} />
            </h5>
            <p className="card-today-text">
              <div id="weatherDescription">
                humidity {props.humid} %, {props.desc}, wind {props.wind}
                m/s
              </div>
              <div id="todayDate">
                <DateFormat date={props.date} />
              </div>
              <Button temp={props.temp} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
