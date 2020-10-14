import React from "react";
import Form from "./Form";
import Forecast from "./Forecast";

export default function Body() {
  return (
    <div className="body">
      <div className="container">
        <Form />
      </div>
      <Forecast />
    </div>
  );
}
