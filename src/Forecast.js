import React, { useState } from "react";

import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <h3>Forecast</h3>
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0b44bb10c5ed254a363948e06377120f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
