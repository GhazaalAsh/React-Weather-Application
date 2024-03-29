import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import WindForecast from "./WindForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("");
  const [showWeatherForecast, setShowWeatherForecast] = useState(true);
  const [showWindForecast, setshowWindForecast] = useState(false);
  let [loaded, setLoaded] = useState(false);

  const getTimeBasedBackground = () => {
    const currentTime = moment().format("HH:mm");
    const morningStart = moment("06:00", "HH:mm");
    const afternoonStart = moment("12:00", "HH:mm");
    const eveningStart = moment("18:00", "HH:mm");
    const nightStart = moment("24:00", "HH:mm");

    if (moment(currentTime, "HH:mm").isBetween(morningStart, afternoonStart)) {
      return "morning-background";
    } else if (
      moment(currentTime, "HH:mm").isBetween(afternoonStart, eveningStart)
    ) {
      return "afternoon-background";
    } else if (
      moment(currentTime, "HH:mm").isBetween(eveningStart, nightStart)
    ) {
      return "evening-background";
    } else {
      return "night-background";
    }
  };

  const backgroundClass = getTimeBasedBackground();

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  const getCurrentLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  };

  const getPosition = (position) => {
    let currentLongitude = position.coords.longitude;
    let currentLatitude = position.coords.latitude;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  };

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
  function convertToTemperature(event) {
    event.preventDefault();
    setshowWindForecast(false);
    setShowWeatherForecast(true);
  }

  function convertToWind(event) {
    event.preventDefault();
    setShowWeatherForecast(false);
    setshowWindForecast(true);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility,
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
          value={city}
          onClick={updateCity}
        />
        {city && (
          <button
            className="btn btn-outline-secondary clear-button"
            type="button"
            onClick={() => setCity("")} // clear the input value
          >
            &#10006;
          </button>
        )}
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
        <button
          className="btn btn-outline-secondary addMore"
          type="button"
          id="currentLocation"
          title="Current Location"
          onClick={getCurrentLocation}
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
  let temperatureWindButton = (
    <div className="temperatureWindButton">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked
          onChange={convertToTemperature}
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio1">
          Temperature
        </label>

        <input
          type="radio"
          className="btn-check "
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          onChange={convertToWind}
        />

        <label
          className="btn btn-outline-secondary wind-button"
          htmlFor="btnradio2"
        >
          Wind{" "}
        </label>
      </div>
    </div>
  );
  if (loaded) {
    return (
      <div className={`Weather ${backgroundClass}`}>
        {header}
        {form}
        <WeatherInfo info={weather} coordinates={weather.coordinates} />
        {temperatureWindButton}
        {showWeatherForecast && (
          <WeatherForecast coordinates={weather.coordinates} />
        )}
        {showWindForecast && <WindForecast coordinates={weather.coordinates} />}
      </div>
    );
  } else {
    Search();
    return (
      <div className={`Weather ${backgroundClass}`}>
        {header}
        {form}
        {temperatureWindButton}
      </div>
    );
  }
}
