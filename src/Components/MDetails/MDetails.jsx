import React, { useEffect, useState } from "react";
import "./MDetails.css";

export const MDetails = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it to the state
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat=6.927079&lon=79.861244&units=metric&exclude={hourly}&appid=2e1d8a39fc5dcbee1dee351a038df739";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.list);
        console.log(data);
        makeNewArray(data?.list);
      })
      .catch((error) => console.error(error));
  }, []);

  function makeNewArray(data) {
    console.log(data);
    const newArray = data.reduce((result, item) => {
      let entryData = item.dt_txt;
      const dateRegex = /^(\d{4}-\d{2}-\d{2})/; // Match the date portion
      const match = entryData.match(dateRegex);
      if (match) {
        const extractedDate = match[1]; // The matched date portion
        console.log(extractedDate);
      } else {
        console.log("No date found in the string.");
      }
    }, {});
  }

  return (
    <div className="head">
      <h1 className="hd">Upcoming Five days Weather Forcasting Report</h1>
      <div className="box-container" >
        
        {weatherData.slice(0, 5).map((item, index) => (
          <div key={index} className="box">
            <h1 className="dat">Date: {item.dt_txt}</h1>
            <form className="form">
              <div className="form-group">
                <label>Temperature</label>
                <input type="text" placeholder="Temperature" />
              </div>
              <div className="form-group">
                <label>Humidity</label>
                <input type="text" placeholder="Humidity" />
              </div>
              <div className="form-group">
                <label>Wind</label>
                <input type="text" placeholder="Wind" />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input type="text" placeholder="Status" />
              </div>
            </form>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
