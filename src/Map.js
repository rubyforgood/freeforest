import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZnJlZWZvcmVzdHNjaG9vbCIsImEiOiJjazhpNWcwcnAwMmxpM2ZwbTFlbmczZmNkIn0.pM5KRLaHYWUeGr0jOo352g";

const ALAMEDA = {
  type: "Feature",
  id: "6001",
  properties: { name: "Alameda" },
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

const mapStyle = {
  version: 8,
  sources: {
    points: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [ALAMEDA],
      },
    },
  },
  layers: [
    {
      id: "data",
      type: "fill",
      paint: {
        "fill-color": "#3288bd",
        "fill-opacity": 0.8,
      },
    },
  ],
};

function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = (event) => {
    let countyName = "";
    let hoverInfo = null;

    if (event.features) {
      const county = event.features[0];
      if (county && county.properties.name) {
        hoverInfo = {
          lngLat: event.lngLat,
          county: county.properties,
        };
      }
      setHoverInfo(hoverInfo);
      console.log(hoverInfo);
    }
  };

  const renderPopup = () => {
    if (hoverInfo) {
      return (
        <Popup
          longitude={hoverInfo.lngLat[0]}
          latitude={hoverInfo.lngLat[1]}
          closeButton={false}
        >
          <div className="county-info">{hoverInfo.county.name}</div>
        </Popup>
      );
    }
    return null;
  };

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onHover={onHover}
    >
      <Source type="geojson" data={mapStyle.sources.points.data}>
        <Layer {...mapStyle.layers[0]} />
      </Source>
      {renderPopup()}
    </ReactMapGL>
  );
}

export default Map;
