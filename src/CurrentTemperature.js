import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <h1>
          <span id="degree">{Math.round(props.celsius)}</span>
          <span id="unit" className="active">
            °C
          </span>
          <span id="bar"> | </span>
          <span>
            <a href="#0" id="fahrenheitUnit" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="CurrentTemperature">
        <h1>
          <span id="degree">{Math.round(fahrenheit)}</span>
          <span id="degree"></span>
          <span>
            <a href="#" id="unit" onClick={showCelsius}>
              °C
            </a>
          </span>
          <span id="bar"> | </span>
          <span id="fahrenheitUnit" className="active">
            °F
          </span>
        </h1>
      </div>
    );
  }
}
