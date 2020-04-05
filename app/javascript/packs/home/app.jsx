import React from "react";
import Map from "./components/map";
import LocationInput from "./components/locationInput";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZnJlZWZvcmVzdHNjaG9vbCIsImEiOiJjazhpNWcwcnAwMmxpM2ZwbTFlbmczZmNkIn0.pM5KRLaHYWUeGr0jOo352g";

const CHAPTERS = [
  {
    type: "Feature",
    id: 2,
    properties: {
      type: "Chapter",
      name: "CA - SF East Bay",
      learnMoreLink:
        "https://www.freeforestschool.org/free-forest-school-sf-east-bay-california",
      fbLink: "https://www.facebook.com/groups/FreeForestSchoolSFEastBayCA",
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
  },
  {
    type: "Feature",
    id: 2,
    properties: {
      type: "Chapter",
      name: "CA - San Francisco Peninsula / South Bay",
      learnMoreLink:
        "https://www.freeforestschool.org/free-forest-school-san-francisco-south-bay-california",
      fbLink:
        "https://www.facebook.com/groups/FreeForestSchoolSanFranSouthBayCA",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-122.428146, 37.706788],
          [-122.389807, 37.706788],
          [-122.11596, 37.504141],
          [-122.083098, 37.476757],
          [-122.154299, 37.285064],
          [-122.291222, 37.109802],
          [-122.504823, 37.706788],
          [-122.428146, 37.706788],
        ],
      ],
    },
  },
  {
    type: "Feature",
    id: 2,
    properties: {
      type: "Chapter",
      name: "CA - Marin County",
      learnMoreLink:
        "https://www.freeforestschool.org/free-forest-school-marin-county-california",
      fbLink: "https://www.facebook.com/groups/FreeForestSchoolMarinCountyCA",
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-122.844393, 38.27639],
          [-122.488392, 38.112082],
          [-122.504823, 37.821804],
          [-123.014178, 38.002543],
          [-123.003224, 38.298298],
          [-122.844393, 38.27639],
        ],
      ],
    },
  },
];

const LOCATION = {
  latitude: 37.75498,
  longitude: -122.39801,
};

function App() {
  const [location, setLocation] = React.useState(null);

  return (
    <React.Fragment>
      <LocationInput setLocation={setLocation} />
      <Map
        mapboxToken={MAPBOX_TOKEN}
        location={location || LOCATION}
        chapters={CHAPTERS}
        className="freeforestmap"
        setLocation={setLocation}
      />
    </React.Fragment>
  );
}

export default App;
