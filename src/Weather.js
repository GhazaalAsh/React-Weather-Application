import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ ready: false });
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function changeToParis(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function changeToLondon(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function changeToNewYork(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      mintemperature: response.data.main.temp_min,
      maxtemperature: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      cityName: response.data.name,
      country: response.data.sys.country,
      windDegree: response.data.wind.deg,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  function Search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search for a city..."
          id="search-input"
          autoComplete="off"
          onChange={updateCity}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
        <button
          className="btn btn-outline-secondary addMore"
          type="button"
          id="currentLocation"
          title="Current Location"
        >
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </form>
  );
  let header = (
    <div className="header">
      <div className="row">
        <div className="col-2">
          <a href="./" onClick={changeToParis}>
            Paris
          </a>
        </div>
        <div className="col-2">
          <a href="./" onClick={changeToLondon}>
            London
          </a>
        </div>
        <div className="col-2">
          <a href="./" onClick={changeToNewYork}>
            New York
          </a>
        </div>
      </div>
    </div>
  );
  if (weather.ready) {
    return (
      <div className="Weather">
        {header}
        {form}
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    Search();
    return (
      <div className="Weather">
        {header}
        {form}
      </div>
    );
  }
}
