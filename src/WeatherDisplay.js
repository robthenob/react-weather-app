import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col-md-6 col-sm-6" id="temperature">
          <CurrentTemperature celsius={Math.round(props.data.temperature)} />
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="WeatherIcon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
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
          <span id="lastUpdated">Last Updated: </span>
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
