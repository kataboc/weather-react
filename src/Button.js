import React, { useState } from "react";

export default function Button(props) {
  const [temperature, setTemperature] = useState(props.temp);
  const [unit, setUnit] = useState("°C");

  function showCelcius() {
    setTemperature(props.temp);
    setUnit("°C");
  }
  function showFahrenheit() {
    setTemperature(Math.round(props.temp * (9 / 5) + 32));
    setUnit("°F");
  }
  return (
    <div>
      <div className="temperature-today">
        {temperature} {unit}
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-info"
          id="button-celsius"
          onClick={showCelcius}
        >
          °C
        </button>
        <button
          type="button"
          className="btn btn-info"
          id="button-fahrenheit"
          onClick={showFahrenheit}
        >
          °F
        </button>
      </div>
    </div>
  );
}
