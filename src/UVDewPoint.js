import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UVDewPoint(props) {
  let [loaded, setLoaded] = useState(false);
  let [detailedData, setDetailedData] = useState(null);

  function handleResponse(response) {
    setDetailedData(response.data.current);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="UVDewPoint">
        <ul>
          <li>Dew Point: {detailedData.dew_point}</li>
          <li>UV Index: {detailedData.uvi}</li>
        </ul>
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
