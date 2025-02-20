import React from "react";
import "./WeatherInfo.css";
export default function WeatherIcon(props) {
  return (
    <img src={props.iconUrl} className="weather-app-icon" alt="" />
  );
}