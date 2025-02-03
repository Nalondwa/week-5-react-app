import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Iza Nalondwa
          <a
            href="https://github.com/Nalondwa/week-5-react-app"
            target="_blank"
            
          >
                  open-sourced on GitHub
                  </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/gentle-torte-87304a/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
            </a>
        </footer>
      </div>
      </div>
  );
}