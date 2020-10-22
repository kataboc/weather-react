import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Form() {
  const apiKey = `e04e51dd1592166f33d5c79d198d4731`;
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function findCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(apiUrlCity);
    axios.get(apiUrlCity).then(handleCityResponse);
  }
  function myPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlCoord).then(handleCoordResponse);
  }
  function handleCoordResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      condition: response.data.weather[0].main,
      place: response.data.name,
      ready: true,
    });
  }
  function handleCityResponse(response) {
    console.log(response.data.name);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      condition: response.data.weather[0].main,
      place: response.data.name,
      ready: true,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
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
          <Today
            name={weatherData.place}
            temp={weatherData.temperature}
            humid={weatherData.humidity}
            wind={weatherData.wind}
            desc={weatherData.description}
            cond={weatherData.condition}
          />
        </div>
        <div>
          <Forecast city={weatherData.place} />
        </div>
      </div>
    );
  } else {
    if (city === null) {
      navigator.geolocation.getCurrentPosition(myPosition);
    }
    return (
      <div>
        <div className="container">
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
          Loading...
        </div>
        <div>Loading..</div>
      </div>
    );
  }
}
