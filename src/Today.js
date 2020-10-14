import React from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Today(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card-today">
          <div className="card-body">
            <h2 class="card-title">{props.cityName}</h2>
            <h5 className="card-today-icon" id="todayIcon">
              <FontAwesomeIcon icon={faSun} />
            </h5>
            <p className="card-today-text">
              <div id="weatherDescription">
                humidity <span id="humidity">20</span>%,{" "}
                <span id="description">clear sky</span>, wind{" "}
                <span id="wind">speed</span>
                m/s
              </div>
              <div id="todayDate">Today</div>
              <div className="temperature-today">
                <span id="temperature">20</span> °<span id="degree">C</span>
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
