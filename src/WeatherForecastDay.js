export default function WeatherForecastDay(props) {
    console.log();
    function maxTemperature() {
      let temperature = Math.round(props.data.temperature.maximum);
      return `${temperature}°`;
    }
  
    function minTemperature() {
      let temperature = Math.round(props.data.temperature.minimum);
      return `${temperature}°`;
    }
    function dailyIcon() {
      let dailyIcon = props.data.condition.icon_url;
      return (
        <img src={dailyIcon} className="weather-app-icon" alt="weather icon" />
      );
    }
    function day() {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();
  
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
      return days[day];
    }
    return (
      <div className="WeatherForecast text-center" id="forecast">
        <div className="row">
          <div className="col">
            <div className="weather-forecast-date">{day()}</div>
            <div className="weather-forecast-icon "> {dailyIcon()}</div>
            <div className="weather-forecast-temperatures  d-flex align-items-center justify-content-center">
              <span className="max-temp"> {maxTemperature()}</span>{" "}
              <span className="min-temp ms-3 "> {minTemperature()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }