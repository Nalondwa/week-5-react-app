import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lusaka" />
       
        <footer>This project was coded by Iza Nalondwa and is open-sourced on <a href="https://github.com/Nalondwa/week-5-react-app" target="_blank" rel="noreferrer">GitHub</a></footer>
      </div>
      </div>
  );
}