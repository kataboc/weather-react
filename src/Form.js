import React from "react";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  function findCity(event) {
    console.log(event.target.value);
  }
  return (
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
  );
}
