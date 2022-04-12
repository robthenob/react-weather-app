import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div id="nextFiveDays">{day()}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} />
      <div id="nextFiveTemp">
        <span className="forecastMax">{maxTemperature()} </span>
        <span className="forecastMin">{minTemperature()}°</span>
      </div>
    </div>
  );
}
