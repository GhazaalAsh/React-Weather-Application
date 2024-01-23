import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function Temperature() {
    let temperture = Math.round(props.data.temp);
    return `${temperture}°`;
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
    <div ClassName="WeatherForecastHour">
      <div className="WeatherForecast-hour">{time()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">{Temperature()}</div>
    </div>
  );
}
