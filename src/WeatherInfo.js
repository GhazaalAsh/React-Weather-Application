import React from "react";
import FormattedDate from "./FormattedDate";
import SunRelatedTimes from "./SunRelatedTimes";
import WeatherUnit from "./WeatherUnit";
import UVDewPoint from "./UVDewPoint";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  function calculateWindDegree(windDegree) {
    if (windDegree <= 23 || windDegree >= 337) {
      return "N";
    } else if (windDegree >= 24 && windDegree <= 68) {
      return "NE";
    } else if (windDegree >= 69 && windDegree <= 113) {
      return "E";
    } else if (windDegree >= 114 && windDegree <= 158) {
      return "SE";
    } else if (windDegree >= 159 && windDegree <= 203) {
      return "S";
    } else if (windDegree >= 204 && windDegree <= 248) {
      return "SW";
    } else if (windDegree >= 249 && windDegree <= 293) {
      return "W";
    } else {
      return "NW";
    }
  }
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5 MainTemperature">
          <WeatherUnit
            celsius={props.info.temperature}
            feels={props.info.feelsLike}
            mintemp={props.info.mintemperature}
            maxtemp={props.info.maxtemperature}
            code={props.info.icon}
          />
        </div>
        <div className="col-3 handleSpace">
          {" "}
          <ul>
            <li>Humidity: {props.info.humidity} %</li>
            <li>
              Wind: {Math.round(props.info.wind)} km/h{" "}
              <span className="windDegree">
                {calculateWindDegree(props.info.windDegree)}
              </span>
            </li>
            <li>
              <span className="description text-capitalize">
                {props.info.description}
              </span>
            </li>
          </ul>
          <div className="pressure">
            <ul>
              <li>Pressure: {props.info.pressure} mb</li>{" "}
              <li>Visibility: {props.info.visibility} m</li>
            </ul>
          </div>
        </div>
        <div className="col-4 handleSpace">
          <ul>
            <li>
              {props.info.cityName}, {props.info.country}
            </li>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            <li className="SunRelatedTimes">
              Sunrise: <SunRelatedTimes Time={props.info.sunrise} />
            </li>
            <li className="SunRelatedTimes">
              Sunset: <SunRelatedTimes Time={props.info.sunset} />
            </li>
          </ul>
          <div className="UV-Dew">
            <UVDewPoint coordinates={props.coordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}
