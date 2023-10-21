import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

export const Detail = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    // Fetch data from the API and set it to the state
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=2e1d8a39fc5dcbee1dee351a038df739";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="head">
      <div className="center-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="City, Latitude and Longitude"
            value={searchQuery}
            className="Sinput"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="search">
            Search
          </button>
        </div>
        <div className="box-container">
          <div className="box">
            <h1>Today</h1>
            {/* ------- */}
            <form className="form">
              <span>
                Current Weather in {weatherData.name}, {weatherData.sys.country}
              </span>
              <div className="form-group">
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder="Temperature"
                  value={weatherData.main.temp}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder="Humidity"
                  value={weatherData.main.humidity}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Wind</label>
                <input
                  type="text"
                  placeholder="Wind"
                  value={weatherData.wind.speed}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].main}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].description}
                  readOnly
                />
              </div>
            </form>
          </div>
          <div className="box">
            <h1>Tommarrow</h1>
            {/* ------- */}
            <form className="form">
              <span>
                Current Weather in {weatherData.name}, {weatherData.sys.country}
              </span>
              <div className="form-group">
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder="Temperature"
                  value={weatherData.main.temp}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder="Humidity"
                  value={weatherData.main.humidity}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Wind</label>
                <input
                  type="text"
                  placeholder="Wind"
                  value={weatherData.wind.speed}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].main}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].description}
                  readOnly
                />
              </div>
            </form>
          </div>
          <div className="box">
            <h1>Day After Tommarrow</h1>
            {/* ------- */}
            <form className="form">
              <span>
                Current Weather in {weatherData.name}, {weatherData.sys.country}
              </span>
              <div className="form-group">
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder="Temperature"
                  value={weatherData.main.temp}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder="Humidity"
                  value={weatherData.main.humidity}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Wind</label>
                <input
                  type="text"
                  placeholder="Wind"
                  value={weatherData.wind.speed}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].main}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Status"
                  value={weatherData.weather[0].description}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <Link to="MDetails">
            <button className="seem">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
