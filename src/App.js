import React from "react";
import "./App.css";
import Head from "./Head";
import Body from "./Body";

export default function App() {
  return (
    <div>
      <Head />
      <Body />
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
