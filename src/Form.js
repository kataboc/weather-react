import React, { useState } from "react";

export default function Form() {
  const [city, setCity] = useState("");
  const [text, setText] = useState("Your current position");
  function handleSubmit(event) {
    event.preventDefault();
    setText(city);
  }
  function findCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
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
      <div className="position">{text}</div>
    </div>
  );
}
