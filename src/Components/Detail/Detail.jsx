import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../Assets/Images/ginkgo.jpg";

export const Detail = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [daysData, setDaysData] = useState([]);
  const [lat, setLat] = useState(6.927079);
  const [lon, setLon] = useState(79.861244);

  const navigate = useNavigate();

  const handleSearch = () => {
    fetchCurrentData();
    fetchDayData();
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);
    fetchCurrentData();
    fetchDayData();
  }, []);

  function fetchCurrentData() {
    // Fetch data from the API and set it to the state
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e1d8a39fc5dcbee1dee351a038df739`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  function fetchDayData() {
    // Fetch data from the API and set it to the state
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude={hourly}&appid=2e1d8a39fc5dcbee1dee351a038df739`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // setAllWeatherData(data.list);
        console.log(data);
        makeNewArray(data?.list);
      })
      .catch((error) => console.error(error));
  }

  function makeNewArray(data) {
    const filteredData = data?.reduce((result, entry, index, array) => {
      // Extract the date part from dt_txt
      const currentDate = entry.dt_txt.split(" ")[0];
      if (
        index === 0 ||
        currentDate !== array[index - 1].dt_txt.split(" ")[0]
      ) {
        result.push(entry);
      }
      return result;
    }, []);
    setDaysData(filteredData);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "wheat",
        minHeight: "100vh",
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "relative",
        overflowY: "scroll",
      }}
    >
      <img
        src={img}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          zIndex: "1",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "centers",
          alignItems: "center",
          overflowY: "scroll",
        }}
      >
        {/* search box and button */}
        <div
          className="top-bar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "600px",
            marginTop: "60px",
            columnGap: "30px",
          }}
        >
          <input
            type="text"
            placeholder="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <input
            type="text"
            placeholder="lon"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
          <button
            style={{
              all: "unset",
              backgroundColor: "black",
              paddingRight: "20px",
              paddingLeft: "20px",
              color: "white",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            style={{
              all: "unset",
              backgroundColor: "green",
              paddingRight: "20px",
              paddingLeft: "20px",
              color: "white",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>

        {/* current weather card */}
        <div
          style={{
            backgroundColor: "white",
            marginTop: "20px",
            marginRight: "20px",
            marginLeft: "20px",
            color: "black",
            padding: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            borderRadius: "10px",
          }}
        >
          <span className="card-title">
            Current Weather in{" "}
            <span
              style={{
                color: "green",
              }}
            >
              {weatherData.name}, {weatherData.sys.country}
            </span>
          </span>
          <div className="form-group">
            <span>Temperature :{weatherData.main.temp} </span>
          </div>
          <div className="form-group">
            <span>Humidity : {weatherData?.main.humidity}</span>
          </div>
          <div className="form-group">
            <span>Wind : {weatherData.wind.speed}</span>
          </div>
          <div className="form-group">
            <span>Status : {weatherData.weather[0].main}</span>
          </div>
          <div className="form-group">
            <span>Description : {weatherData.weather[0].description}</span>
          </div>
        </div>

        {/* 3 days cards */}
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            columnGap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {daysData?.slice(1, 4).map((item, index) => (
            <div key={index} className="day-card">
              <span>Date: {item.dt_txt.split(" ")[0]}</span>

              <span>Temperature: {item.main.temp}</span>

              <span>Humidity: {item.main.humidity}</span>

              <span>Wind: {item.wind.speed}</span>

              <span>Status: {item.weather[0].main}</span>
            </div>
          ))}

          <Link
            to="/MDetails"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className="day-card see-more-div">See More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
