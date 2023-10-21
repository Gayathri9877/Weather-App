import React from "react";
import "./SignUpNew.css";
import { Link } from "react-router-dom";

export const SignUpNew = () => {
  return (
    <div className="head">
      <div className="form-container">
        <div className="form-section image-section-sign">
          <h1 className="wel">
            welcome <br />
            to <br />
            TheWeatherNest.com{" "}
          </h1>
          <p className="contp">
            Stay ahead of the weather with WeatherWise. Get real-time forecasts,
            alerts, and accurate weather updates at your fingertips. Plan your
            day with confidence, no matter what's in the forecast. Download
            WeatherWise now and make every day a good weather day.
          </p>
        </div>
        <div className="form-section input-section">
          <form>
            <div className="input-group">
              <label htmlFor="firstName" className="po">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName" className="po">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="po">
                Email
              </label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="po">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="button-container">
              <button type="submit">Sign Up</button>

              <Link to="/Login">
                <button type="button">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
