import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WindForecastDay(props) {
  function windSpeed() {
    let speed = Math.round(props.data.wind_speed);
    return `${speed} km/h`;
  }
  function windDegree() {
    let degree = Math.round(props.data.wind_deg);
    return `${degree}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div ClassName="WindForecastDay">
      <div className="WindForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WindForecast-temperature">
        <span className="WindForecast-temperature-max">{windSpeed()}</span>
        <span className="WindForecast-temperature-min">{windDegree()}</span>
      </div>
    </div>
  );
}
