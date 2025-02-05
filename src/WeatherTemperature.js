import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      {Math.round(props.celsius)}°C
    </span>
  );
}
