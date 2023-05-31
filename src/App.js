import React from "react";
import Weather from "./weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Bangkok" />
      </div>
      <p className="coder text-center">
        Coded by{" "}
        <a
          href="https://github.com/HNIN-PHYU-WAI"
          target="_blank"
          rel="noreferrer noopenner"
        >
          HNIN PHYU WAI
        </a>
      </p>
    </div>
  );
}
