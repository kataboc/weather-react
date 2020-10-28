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

export default function Tomorrow1(props) {
  let [icon, setIcon] = useState(faSun);
  const [ready, setReady] = useState(false);
  let condition = props.cond;
  let description = props.desc;
  if (ready) {
    return (
      <div className="col">
        <div className="card-f">
          <div className="card-body">
            <h5 className="card-icon" id="tomorrowIcon">
              <FontAwesomeIcon icon={icon} />
            </h5>
            <div className="card-text">
              <div id="tomorrow">{props.date}</div>
              <div className="temperature">
                {props.temp} °<span className="degrees">C</span>
              </div>
            </div>
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
  }
  return (
    <div className="col">
      <div className="card-f">
        <div className="card-body">
          <h5 className="card-icon" id="tomorrowIcon">
            <FontAwesomeIcon icon={icon} />
          </h5>
          <div className="card-text">
            <div id="tomorrow">{props.date}</div>
            <div className="temperature">
              {props.temp} °<span className="degrees">C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
