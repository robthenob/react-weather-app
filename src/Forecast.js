import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>Forecast</h3>
      <div className="row">
        <div className="col-2">
          <div id="nextFiveDays">Mon</div>
          <WeatherIcon code="01d" />
          <div id="nextFiveTemp">
            <span className="forecastMax">19° </span>
            <span className="forecastMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
