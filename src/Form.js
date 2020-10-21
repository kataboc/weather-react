import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Form() {
  const apiKey = `e04e51dd1592166f33d5c79d198d4731`;
  const [ready, setReady] = useState(false);
  let [search, setSearch] = useState(null);
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState("10");
  let [humidity, setHumidity] = useState("20");
  let [wind, setWind] = useState("5");
  let [description, setDescription] = useState("sunny");
  let [condition, setCondition] = useState("clear");
  let [place, setPlace] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    setCity(search);
  }
  function findCity(event) {
    setSearch(event.target.value);
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=${apiKey}`;
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
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setCondition(response.data.weather[0].main);
    setPlace(response.data.name);
    setReady(true);
  }
  function handleCityResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setCondition(response.data.weather[0].main);
    setPlace(response.data.name);
    setReady(true);
  }
  if (ready) {
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
            name={place}
            temp={temperature}
            humid={humidity}
            wind={wind}
            desc={description}
            cond={condition}
          />
        </div>
        <div>
          <Forecast city={city} />
        </div>
      </div>
    );
  } else {
    if (city === null || place === null) {
      navigator.geolocation.getCurrentPosition(myPosition);
    } else {
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
            <Today cityName={city} />
          </div>
          <div>
            <Forecast city={place} />
          </div>
        </div>
      );
    }
    return <h2>Loading...</h2>;
  }
}
