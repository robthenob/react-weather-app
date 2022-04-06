import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container">
        <div class="weatherContainer">
          <div class="row">
            <div class="col-6" id="temperature">
              <h1>
                <span id="degree">7</span>
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
            <div class="col-2">
              <img
                src="https://openweathermap.org/img/wn/02n@2x.png"
                alt="weather icon"
                id="icon"
              ></img>
            </div>
            <div class="col-4">
              <ul>
                <li id="currentCondition">few clouds</li>
                <li>
                  Wind: <span id="windSpeed">5</span>
                  <span id="km">km/h</span>
                </li>
                <li>
                  Humidity: <span is="humidity">72</span>%
                </li>
              </ul>
            </div>
          </div>
          <div className="LastUpdatedDate">
            <h2>
              <span id="lastUpdated">Last Updated: </span> <br />
              <span id="currentDate">Wednesday 21:35</span>
            </h2>
          </div>
          <div className="City">
            <h4>
              <span id="cityName">Vancouver</span>, <span id="country">CA</span>
            </h4>
          </div>
          <div className="Search">
            <form id="searchForm">
              <div class="row">
                <div class="col-6">
                  <input
                    type="search"
                    id="search-bar"
                    placeholder="Search by city name..."
                    autocomplete="off"
                  />
                </div>
                <div class="col-3">
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
}
