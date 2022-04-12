import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    //city
    const apiKey = "0b44bb10c5ed254a363948e06377120f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // search for a city
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherContainer">
            <WeatherDisplay data={weatherData} />

            <Forecast coordinates={weatherData.coordinates} />
            <div className="Search">
              <form id="searchForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      id="search-bar"
                      placeholder="Search by city name..."
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <button id="searchButton" type="submit" value="seach">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
