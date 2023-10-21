import React, { useEffect, useState } from "react";
import "./MDetails.css";
import img from "../../Assets/Images/ginkgo.jpg";

export const MDetails = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [daysData, setDaysData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it to the state
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat=6.927079&lon=79.861244&units=metric&exclude={hourly}&appid=2e1d8a39fc5dcbee1dee351a038df739";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.list);
        makeNewArray(data?.list);
      })
      .catch((error) => console.error(error));
  }, []);

  function makeNewArray(data) {
    const filteredData = data.reduce((result, entry, index, array) => {
      // Extract the date part from dt_txt
      const currentDate = entry.dt_txt.split(" ")[0];

      // Check if it's the first entry for each date
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

  return (
    <div
      className=""
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
          {daysData.map((item, index) => (
            <div key={index} className="day-card">
              <span>Date: {item.dt_txt.split(" ")[0]}</span>

              <span>Temperature: {item.main.temp}</span>

              <span>Humidity: {item.main.humidity}</span>

              <span>Wind: {item.wind.speed}</span>

              <span>Status: {item.weather[0].main}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
