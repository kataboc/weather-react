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
import Button from "./Button";

export default function Today(props) {
  let [icon, setIcon] = useState(faSun);
  const [ready, setReady] = useState(false);
  let condition = props.cond;
  let description = props.desc;
  console.log(props.cond);
  if (ready) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card-today">
            <div className="card-body">
              <h2 className="card-title">{props.name}</h2>
              <h5 className="card-today-icon" id="todayIcon">
                <FontAwesomeIcon icon={icon} />
              </h5>
              <div className="card-today-text">
                <div id="weatherDescription">
                  humidity {props.humid} %, {props.desc}, wind {props.wind}
                  m/s
                </div>
                <div id="todayDate">
                  <DateFormat date={props.date} />
                </div>
                <Button temp={props.temp} />
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
    <div className="row">
      <div className="col-12">
        <div className="card-today">
          <div className="card-body">
            <h2 class="card-title">Loading the weather...</h2>
          </div>
          <Button temp={props.temp} />
        </div>
      </div>
    </div>
  );
}
