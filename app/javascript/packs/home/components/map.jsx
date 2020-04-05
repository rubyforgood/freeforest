import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import Pins from "./pins";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZnJlZWZvcmVzdHNjaG9vbCIsImEiOiJjazhpNWcwcnAwMmxpM2ZwbTFlbmczZmNkIn0.pM5KRLaHYWUeGr0jOo352g";

function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
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
          <div className="name">{hoverInfo.county.name}</div>
          <div className="learn">
            {" "}
            Learn More:{" "}
            <a href={hoverInfo.county.learnMoreLink}>
              {hoverInfo.county.learnMoreLink}
            </a>
          </div>
          <div className="join">
            {" "}
            Join Us:{" "}
            <a href={hoverInfo.county.fbLink}>{hoverInfo.county.fbLink}</a>
          </div>
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
      height={500}
    >
      <Pins data={props.location} />

      <Source
        type="geojson"
        data={{
          type: "FeatureCollection",
          features: props.features,
        }}
      >
        <Layer
          {...{
            id: "data",
            type: "fill",
            paint: {
              "fill-color": "#3288bd",
              "fill-opacity": 0.8,
            },
          }}
        />
      </Source>
      {renderPopup()}
    </ReactMapGL>
  );
}

export default Map;
