import React from "react";
import "./App.css";
import Form from "./Form";

export default function App() {
  return (
    <div>
      <div className="body">
        <Form />
      </div>
      <p>
        Coded by{" "}
        <a href="https://github.com/kataboc/weather-react">
          {" "}
          Katarzyna Boćkowska{" "}
        </a>
      </p>
    </div>
  );
}
