// App.js
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignUpNew } from "../src/Components/SignUpNew/SignUpNew";
import { Login } from "../src/Components/Login/Login";
import { Detail } from "../src/Components/Detail/Detail";
import { MDetails } from "../src/Components/MDetails/MDetails";
import "./App.css";

function App() {
  let user;
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  if (userData?.username === "admin" && userData?.password === "123321") {
    user = true;
  } else {
    user = false;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Detail /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/MDetails"
            element={user ? <MDetails /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/sign-up"
            element={!user ? <SignUpNew /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
