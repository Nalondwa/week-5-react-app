import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lusaka" />
       
        <footer>This project was coded by Iza Nalondwa
          
        , is{" "}
          <a
            href="https://github.com/Nalondwa/week-5-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://gentle-torte-87304a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>  
          
          
        
          </footer>
      </div>
      </div>
  );
}