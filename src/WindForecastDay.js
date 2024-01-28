import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WindForecastDay(props) {
  function windSpeed() {
    let speed = Math.round(props.data.wind_speed);
    return `${speed} km/h`;
  }
  function windDegree() {
    let degree = props.data.wind_deg;
    if (degree <= 23 || degree >= 337) {
      return "N";
    } else if (degree >= 24 && degree <= 68) {
      return "NE";
    } else if (degree >= 69 && degree <= 113) {
      return "E";
    } else if (degree >= 114 && degree <= 158) {
      return "SE";
    } else if (degree >= 159 && degree <= 203) {
      return "S";
    } else if (degree >= 204 && degree <= 248) {
      return "SW";
    } else if (degree >= 249 && degree <= 293) {
      return "W";
    } else {
      return "NW";
    }
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
      <div className="WindForecast-wind">
        <span className="WindForecast-wind-speed">{windSpeed()}</span>
        <span className="WindForecast-wind-degree">{windDegree()}</span>
      </div>
    </div>
  );
}
