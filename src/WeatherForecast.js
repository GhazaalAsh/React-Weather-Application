import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHour from "./WeatherForecastHour";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecastData, setDailyForecastData] = useState(null);
  let [hourlyForecastData, setHourlyForecastData] = useState(null);

  function handleResponse(response) {
    setDailyForecastData(response.data.daily);
    setHourlyForecastData(response.data.hourly);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {hourlyForecastData.map(function (hourlyforecast, index) {
            if (index < 6) {
              return (
                <div className="col">
                  <WeatherForecastHour data={hourlyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row">
          {dailyForecastData.map(function (dailyforecast, index) {
            if (index < 6) {
              return (
                <div className="col">
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apikey = "25fad9f7e87157d33dde0f82ab269ee8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
