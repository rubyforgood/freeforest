import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/map";
import "mapbox-gl/dist/mapbox-gl.css";

const ALAMEDA = {
  type: "Feature",
  id: "6001",
  properties: {
    name: "CA - SF East Bay",
    learnMoreLink:
      "https://www.freeforestschool.org/free-forest-school-sf-east-bay-california",
    fbLink: "https://www.facebook.com/groups/FreeForestSchoolSFEastBayCA/",
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-122.269314, 37.903958],
        [-121.557312, 37.821804],
        [-121.469681, 37.482234],
        [-121.475158, 37.482234],
        [-121.853067, 37.482234],
        [-122.083098, 37.476757],
        [-122.11596, 37.504141],
        [-122.31313, 37.898481],
        [-122.269314, 37.903958],
      ],
    ],
  },
};

const FEATURES = [ALAMEDA];

const ME_LOCATION = [
  {
    latitude: 37.75498,
    longitude: -122.39801,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Map location={ME_LOCATION} features={FEATURES} className='freeforestmap' />,
    document.body.appendChild(document.createElement("div"))
  );
});
