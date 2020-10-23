import React, { useState } from "react";
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

export default function Today(props) {
  let [icon, setIcon] = useState(faSun);
  const [ready, setReady] = useState(false);
  console.log(props.cond);
  // console.log(props.desc);
  let condition = props.cond;
  let description = props.desc;
  if (ready) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card-today">
            <div className="card-body">
              <h2 class="card-title">{props.name}</h2>
              <h5 className="card-today-icon" id="todayIcon">
                <FontAwesomeIcon icon={icon} />
              </h5>
              <p className="card-today-text">
                <div id="weatherDescription">
                  humidity {props.humid} %, {props.desc}, wind {props.wind}
                  m/s
                </div>
                <div id="todayDate">
                  <DateFormat date={props.date} />
                </div>
                <div className="temperature-today">
                  {props.temp} °<span id="degree">C</span>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-info"
                    id="button-celsius"
                  >
                    °C
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    id="button-fahrenheit"
                  >
                    °F
                  </button>
                </div>
              </p>
            </div>
            <a
              href="https://app.netlify.com/sites/serene-bell-0f095b"
              id="back-to-you"
            >
              Back to your current position
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    if (condition === "Clear") {
      setIcon(faSun);
      setReady(true);
    } else {
      if (
        (condition === "Clouds" && description === "few clouds") ||
        (condition === "Clouds" && description === "scattered clouds")
      ) {
        setIcon(faCloudSun);
        setReady(true);
      } else {
        if (condition === "Clouds") {
          setIcon(faCloud);
          setReady(true);
        } else {
          if (condition === "Drizzle") {
            setIcon(faCloudShowersHeavy);
            setReady(true);
          } else {
            if (condition === "Rain") {
              setIcon(faCloudSunRain);
              setReady(true);
            } else {
              if (condition === "Thunder") {
                setIcon(faBolt);
                setReady(true);
              } else {
                if (condition === "Snow") {
                  setIcon(faSnowflake);
                  setReady(true);
                } else {
                  setIcon(faWater);
                  setReady(true);
                }
              }
            }
          }
        }
      }
    }
    return (
      <div className="row">
        <div className="col-12">
          <div className="card-today">
            <div className="card-body">
              <h2 class="card-title">Loading weather for {props.name}</h2>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-info"
                  id="button-celsius"
                >
                  °C
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  id="button-fahrenheit"
                >
                  °F
                </button>
              </div>
            </div>
            <a
              href="https://app.netlify.com/sites/serene-bell-0f095b"
              id="back-to-you"
            >
              Back to your current position
            </a>
          </div>
        </div>
      </div>
    );
  }
}
