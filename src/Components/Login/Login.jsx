import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logInHandle = () => {
    const user = {
      username,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();

    // setInterval(() => {
    //   navigate("/");
    // }, 2000);
  };
  // useState(() => {
  //   navigate("/");
  // }, []);
  return (
    <div className="head">
      <div className="form-container">
        <div className="form-section image-section">
          <h1 className="log">Login Here</h1>
        </div>
        <div className="form-section input-section">
          <form>
            <div className="input-group">
              <label htmlFor="email" className="po">
                UserName
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="po">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="button-container">
              <Link to="/SignUpNew">
                <button type="submit">Sign Up</button>
              </Link>
              {/* <Link to="/Detail"> */}
              <button type="button" onClick={logInHandle}>
                Login
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
