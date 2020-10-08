import React from "react";

export default function Head() {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Weather App</title>
      <link rel="stylesheet" href="src/styles.css" />
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Signika:wght@300&family=Sniglet&display=swap"
        rel="stylesheet"
      />
    </head>
  );
}