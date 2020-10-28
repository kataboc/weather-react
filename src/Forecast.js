import React, { useState } from "react";
import Tomorrow from "./Tomorrow";
import Tomorrow1 from "./Tomorrow1";
import Tomorrow2 from "./Tomorrow2";
import Tomorrow3 from "./Tomorrow3";
import Tomorrow4 from "./Tomorrow4";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = `e04e51dd1592166f33d5c79d198d4731`;
  let [forecastData, setForecastData] = useState({ ready: false });
  let [ready, setReady] = useState(false);

  function handleCityResponse() {
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlForecast).then(handleForecast);
  }
  function handleForecast(response) {
    setForecastData({
      city: response.data.city.name,
      temperature: Math.round(response.data.list[7].main.temp),
      date: response.data.list[7].dt_txt,
      description: response.data.list[7].weather[0].description,
      condition: response.data.list[7].weather[0].main,
      temperature1: Math.round(response.data.list[15].main.temp),
      date1: response.data.list[15].dt_txt,
      description1: response.data.list[15].weather[0].description,
      condition1: response.data.list[15].weather[0].main,
      temperature2: Math.round(response.data.list[23].main.temp),
      date2: response.data.list[23].dt_txt,
      description2: response.data.list[23].weather[0].description,
      condition2: response.data.list[23].weather[0].main,
      temperature3: Math.round(response.data.list[31].main.temp),
      date3: response.data.list[31].dt_txt,
      description3: response.data.list[31].weather[0].description,
      condition3: response.data.list[31].weather[0].main,
      temperature4: Math.round(response.data.list[39].main.temp),
      date4: response.data.list[39].dt_txt,
      description4: response.data.list[39].weather[0].description,
      condition4: response.data.list[39].weather[0].main,
    });
    setReady(true);
  }
  if (ready && props.city === forecastData.city) {
    return (
      <div className="row" id="forecast-row">
        <Tomorrow
          date={forecastData.date}
          temp={forecastData.temperature}
          desc={forecastData.description}
          cond={forecastData.condition}
        />
        <Tomorrow1
          date={forecastData.date1}
          temp={forecastData.temperature1}
          desc={forecastData.description1}
          cond={forecastData.condition1}
        />
        <Tomorrow2
          date={forecastData.date2}
          temp={forecastData.temperature2}
          desc={forecastData.description2}
          cond={forecastData.condition2}
        />
        <Tomorrow3
          date={forecastData.date3}
          temp={forecastData.temperature3}
          desc={forecastData.description3}
          cond={forecastData.condition3}
        />
        <Tomorrow4
          date={forecastData.date4}
          temp={forecastData.temperature4}
          desc={forecastData.description4}
          cond={forecastData.condition4}
        />
      </div>
    );
  } else {
    handleCityResponse(props.city);

    return (
      <div className="row" id="forecast-row">
        Loading the forecast...
      </div>
    );
  }
}
