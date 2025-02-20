import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function Search() {
    let apiKey = "441fcacb9dt020b37114da0ba3e3f5of";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Enter a city..."
                required
                id="search-form-input"
                className="search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-3 ">
              <input
                type="submit"
                className="search-submit-button"
                value="search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return (
      <div className="d-flex align-items-center justify-content-center">
       
      </div>
    );
  }
}