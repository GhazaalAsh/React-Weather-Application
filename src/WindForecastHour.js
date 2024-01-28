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
  function time() {
    let date = new Date(props.data.dt * 1000);
    let Hour = date.getHours();
    if (Hour < 10) {
      Hour = `0${Hour}`;
    }
    let Minutes = date.getMinutes();
    if (Minutes < 10) {
      Minutes = `0${Minutes}`;
    }
    return (
      <div>
        {Hour}:{Minutes}
      </div>
    );
  }

  return (
    <div ClassName="WindForecastHour">
      <div className="WindForecast-hour">{time()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WindForecast-temperature">
        <span className="WindForecast-temperature-max">{windSpeed()}</span>
        <span className="WindForecast-temperature-min">{windDegree()}</span>
      </div>
    </div>
  );
}
