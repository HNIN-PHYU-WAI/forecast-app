import React, { useState } from "react";
import axios from "axios";
import Forecast from "./forecast";

import "./App.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({
    show: false,
    city: props.defaultCity,
  });

  function handleSubmit(event) {
    event.preventDefault();

    showInfo();
  }
  
  function showInfo(){
    let apiKey = "09ab3fdfc4a9o862fa2fea44052tffba";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function showWeather(response) {
    setWeather({
      show: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      imageUrl: response.data.condition.icon_url,
      time: new Date(response.data.time),
      city: response.data.city,
    });
  }

  if (weather.show) {
    return (
      <div>
        <div className="Form" onSubmit={handleSubmit}>
          <form className="mb-3">
            <div className="row">
              <div className="col-sm-8">
                <input
                  className="form-control me-1 searchbar"
                  type="search"
                  id="input-text"
                  placeholder="Enter a city..."
                  aria-label="Search"
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
              <div className="col-sm-3">
                <input
                  className="btn btn-success"
                  type="submit"
                  id="search-button"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
        <Forecast weatherData={weather} />
      </div>
    );
  } else {
    showInfo();

    return "loading...";
  }
}
