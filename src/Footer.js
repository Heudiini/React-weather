import React from "react";
import "./css/App.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <small>
          {" "}
          App made with <img className="logo" src={logo} alt="Logo" />
          by{" "}
          <a href="https://heudiinis.netlify.app/" target="_blank" rel="noreferrer">
            {" "}
            Heudiini{" "}
          </a>
          <a href="https://github.com/Heudiini/React-Weather-app" target="_blank" rel="noreferrer">
            opensource code
          </a>
          <p>
            <a href="https://giphy.com/gifs/animation-animated-free-gZEBpuOkPuydi">via GIPHY</a>
          </p>
        </small>
      </footer>
    </div>
  );
}
