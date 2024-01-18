import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(props) {
    return (props * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="icon">
          <WeatherIcon code={props.code} size={52} />
        </span>
        <span className="WeatherUnit">
          <span className="tempNumb">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C |
            <a href="./" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
        <div className="otherTemperatures">
          <ul>
            <li> Feels Like {Math.round(props.feels)} °C</li>
            <li>L: {Math.round(props.mintemp)} °C</li>
            <li>H: {Math.round(props.maxtemp)} °C</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="icon">
          <WeatherIcon code={props.code} />
        </span>
        <span className="WeatherUnit">
          <span className="tempNumb">
            {Math.round(fahrenheit(props.celsius))}
          </span>
          <span className="unit">
            °F |
            <a href="./" onClick={showCelsius}>
              °C
            </a>
          </span>
        </span>
        <div className="otherTemperatures">
          <ul>
            <li> Feels Like {Math.round(fahrenheit(props.feels))} °F</li>
            <li>L: {Math.round(fahrenheit(props.mintemp))} °F</li>
            <li>H: {Math.round(fahrenheit(props.maxtemp))} °F</li>
          </ul>
        </div>
      </div>
    );
  }
}
