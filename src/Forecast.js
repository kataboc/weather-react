import React, { useState } from "react";
import Tomorrow from "./Tomorrow";
import Tomorrow1 from "./Tomorrow1";
import Tomorrow2 from "./Tomorrow2";
import Tomorrow3 from "./Tomorrow3";
import Tomorrow4 from "./Tomorrow4";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = `e04e51dd1592166f33d5c79d198d4731`;
  const [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState("10");
  let [date, setDate] = useState("");
  let [temperature1, setTemperature1] = useState("10");
  let [date1, setDate1] = useState("");
  let [temperature2, setTemperature2] = useState("10");
  let [date2, setDate2] = useState("");
  let [temperature3, setTemperature3] = useState("10");
  let [date3, setDate3] = useState("");
  let [temperature4, setTemperature4] = useState("10");
  let [date4, setDate4] = useState("");

  let [description, setDescription] = useState("sunny");
  let [condition, setCondition] = useState("clear");
  let [description1, setDescription1] = useState("sunny");
  let [condition1, setCondition1] = useState("clear");
  let [description2, setDescription2] = useState("sunny");
  let [condition2, setCondition2] = useState("clear");
  let [description3, setDescription3] = useState("sunny");
  let [condition3, setCondition3] = useState("clear");
  let [description4, setDescription4] = useState("sunny");
  let [condition4, setCondition4] = useState("clear");
  function myPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiUrlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlCoord).then(handleCoordResponse);
  }
  function handleCoordResponse(response) {
    let place = response.data.name;
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlForecast).then(handleCoordForecast);
  }
  function handleCoordForecast(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.list[7].main.temp));
    setDate(response.data.list[7].dt_txt);
    setDescription(response.data.list[7].weather[0].description);
    setCondition(response.data.list[7].weather[0].main);
    setTemperature1(Math.round(response.data.list[15].main.temp));
    setDate1(response.data.list[15].dt_txt);
    setDescription1(response.data.list[15].weather[0].description);
    setCondition1(response.data.list[15].weather[0].main);
    setTemperature2(Math.round(response.data.list[23].main.temp));
    setDate2(response.data.list[23].dt_txt);
    setDescription2(response.data.list[23].weather[0].description);
    setCondition2(response.data.list[23].weather[0].main);
    setTemperature3(Math.round(response.data.list[31].main.temp));
    setDate3(response.data.list[31].dt_txt);
    setDescription3(response.data.list[31].weather[0].description);
    setCondition3(response.data.list[31].weather[0].main);
    setTemperature4(Math.round(response.data.list[39].main.temp));
    setDate4(response.data.list[39].dt_txt);
    setDescription4(response.data.list[39].weather[0].description);
    setCondition4(response.data.list[39].weather[0].main);

    setReady(true);
  }

  if (ready) {
    return (
      <div className="row" id="forecast-row">
        <Tomorrow
          date={date}
          temp={temperature}
          desc={description}
          cond={condition}
        />
        <Tomorrow1
          date={date1}
          temp={temperature1}
          desc={description1}
          cond={condition1}
        />
        <Tomorrow2
          date={date2}
          temp={temperature2}
          desc={description2}
          cond={condition2}
        />
        <Tomorrow3
          date={date3}
          temp={temperature3}
          desc={description3}
          cond={condition3}
        />
        <Tomorrow4
          date={date4}
          temp={temperature4}
          desc={description4}
          cond={condition4}
        />
      </div>
    );
  } else {
    if (props.city === null) {
      navigator.geolocation.getCurrentPosition(myPosition);
    } else {
      return (
        <div className="row" id="forecast-row">
          <Tomorrow city={props.city} />
          <Tomorrow1 city={props.city} />
          <Tomorrow2 city={props.city} />
          <Tomorrow3 city={props.city} />
          <Tomorrow4 city={props.city} />
        </div>
      );
    }
    return <h2>Loading...</h2>;
  }
}
