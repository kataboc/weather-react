import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";

export default function Form() {
  const apiKey = `e04e51dd1592166f33d5c79d198d4731`;
  const [ready, setReady] = useState(false);
  let [city, setCity] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
  }
  function findCity(event) {
    setCity(event.target.value);
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrlCity).then(handleCityResponse());
  }

  function myPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlCoord).then(handleCoordResponse());
  }
  function handleCoordResponse(response) {
    console.log(response.data);
    setReady(true);
  }
  function handleCityResponse(response) {
    console.log(response.data);
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <form className="form-row" onSubmit={handleSubmit}>
          <div className="col-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your city"
                aria-describedby="button-addon1"
                id="your-city"
                onChange={findCity}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  id="button-addon1"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </form>
        <Today cityName={city} />
      </div>
    );
  } else {
    if ((city = null)) {
      navigator.geolocation.getCurrentPosition(myPosition);
    } else {
      return (
        <div>
          <form className="form-row" onSubmit={handleSubmit}>
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your city"
                  aria-describedby="button-addon1"
                  id="your-city"
                  onChange={findCity}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    id="button-addon1"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Today cityName={city} />
        </div>
      );
    }
    return <h2>Loading...</h2>;
  }
}
