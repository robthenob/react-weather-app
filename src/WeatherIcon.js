import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "1d": "CLEAR_DAY",
    "1n": "CLEAR_NIGHT",
    "2d": "PARTLY_CLOUDY_DAY",
    "2n": "PARTLY_CLOUDY_NIGHT",
    "3d": "CLOUDY",
    "3n": "CLOUDY",
    "4d": "PARTLY_CLOUDY_DAY",
    "4n": "PARTLY_CLOUDY_NIGHT",
    "9d": "RAIN",
    "9n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="white"
      size={100}
      animate={true}
    />
  );
}
