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

export default function Today(props) {
  let [icon, setIcon] = useState(faSun);
  if (props.cond === "Clear") {
    setIcon(faSun);
  } else {
    if (
      (props.cond === "Clouds" && props.desc === "few clouds") ||
      props.desc === "scattered clouds"
    ) {
      setIcon(faCloudSun);
    } else {
      if (props.cond === "Clouds") {
        setIcon(faCloud);
      } else {
        if (props.cond === "Drizzle") {
          setIcon(faCloudShowersHeavy);
        } else {
          if (props.cond === "Rain") {
            setIcon(faCloudSunRain);
          } else {
            if (props.cond === "Thunder") {
              setIcon(faBolt);
            } else {
              if (props.cond === "Snow") {
                setIcon(faSnowflake);
              } else {
                {
                  setIcon(faWater);
                }
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
            <h2 class="card-title">{props.name}</h2>
            <h5 className="card-today-icon" id="todayIcon">
              <FontAwesomeIcon icon={icon} />
            </h5>
            <p className="card-today-text">
              <div id="weatherDescription">
                humidity {props.humid} %, {props.desc}, wind {props.wind}
                m/s
              </div>
              <div id="todayDate">Today</div>
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
}
