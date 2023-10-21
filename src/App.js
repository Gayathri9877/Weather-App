// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpNew } from "../src/Components/SignUpNew/SignUpNew";
import { Login } from "../src/Components/Login/Login";
import { Detail } from "../src/Components/Detail/Detail";
import { MDetails } from "../src/Components/MDetails/MDetails";

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignUpNew" element={<SignUpNew />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/MDetails" element={<MDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
