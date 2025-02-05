import React from "react";

export default function WeatherIcon(props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.code}@2x.png`;

  return <img src={iconUrl} alt="Weather Icon" width={props.size} />;
}
