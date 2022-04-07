import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/wn/02n@2x.png",
      date: "Wednesday 7:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherContainer">
            <div className="row">
              <div className="col-6" id="temperature">
                <h1>
                  <span id="degree">{Math.round(weatherData.temperature)}</span>
                  <span>
                    <a href="#0" id="unit" class="active">
                      °C
                    </a>
                  </span>
                  <span id="bar"> | </span>
                  <span>
                    <a href="#0" id="fahrenheitUnit">
                      °F
                    </a>
                  </span>
                </h1>
              </div>
              <div className="col-2">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                ></img>
              </div>
              <div className="col-4">
                <ul>
                  <li id="currentCondition" className="text-capitalize">
                    {weatherData.condition}
                  </li>
                  <li>
                    Wind: <span id="windSpeed">{weatherData.wind}</span>
                    <span id="km">km/h</span>
                  </li>
                  <li>
                    Humidity: <span is="humidity">{weatherData.humidity}</span>%
                  </li>
                </ul>
              </div>
            </div>
            <div className="LastUpdatedDate">
              <h2>
                <span id="lastUpdated">Last Updated: </span> <br />
                <span id="currentDate">{weatherData.date}</span>
              </h2>
            </div>
            <div className="City">
              <h4>
                <span id="cityName">{weatherData.city}</span>,{" "}
                <span id="country">{weatherData.country}</span>
              </h4>
            </div>
            <div className="Search">
              <form id="searchForm">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      id="search-bar"
                      placeholder="Search by city name..."
                      autoComplete="off"
                      autoFocus="on"
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
    const apiKey = "0b44bb10c5ed254a363948e06377120f";
    let city = "Vancouver";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
