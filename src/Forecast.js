import React from "react";
import Tomorrow from "./Tomorrow";
import Tomorrow1 from "./Tomorrow1";
import Tomorrow2 from "./Tomorrow2";
import Tomorrow3 from "./Tomorrow3";
import Tomorrow4 from "./Tomorrow4";

export default function Forecast() {
  return (
    <div className="row" id="forecast-row">
      <Tomorrow />
      <Tomorrow1 />
      <Tomorrow2 />
      <Tomorrow3 />
      <Tomorrow4 />
    </div>
  );
}
