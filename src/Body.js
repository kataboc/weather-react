import React from "react";
import Form from "./Form";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Body() {
  return (
    <div className="body">
      <div className="container">
        <Form />
        <Today />
      </div>
      <Forecast />
    </div>
  );
}
