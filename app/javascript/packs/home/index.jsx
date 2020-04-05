import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "mapbox-gl/dist/mapbox-gl.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
