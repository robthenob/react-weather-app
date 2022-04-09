import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col-6" id="temperature">
          <h1>
            <span id="degree">{Math.round(props.data.temperature)}</span>
            <span>
              <a href="#0" id="unit" className="active">
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
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
          ></img>
        </div>
        <div className="col-4">
          <ul>
            <li id="currentCondition" className="text-capitalize">
              {props.data.condition}
            </li>
            <li>
              Wind: <span id="windSpeed">{props.data.wind}</span>
              <span id="km">km/h</span>
            </li>
            <li>
              Humidity: <span is="humidity">{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
      <div className="LastUpdatedDate">
        <h2>
          <span id="lastUpdated">Last Updated: </span> <br />
          <span id="currentDate">
            <FormattedDate date={props.data.date} />
          </span>
        </h2>
      </div>
      <div className="City">
        <h4>
          <span id="cityName">{props.data.city}</span>,{" "}
          <span id="country">{props.data.country}</span>
        </h4>
      </div>
    </div>
  );
}
