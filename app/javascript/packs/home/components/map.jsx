import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Pins from "./pins";

function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: props.location.latitude,
    longitude: props.location.longitude,
    zoom: 8,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const onClickChapter = (event) => {
    let popupInfo = null;

    if (event.features) {
      const feature = event.features[0];
      if (feature && feature.properties.type === "Chapter") {
        popupInfo = {
          latitude: event.lngLat[1],
          longitude: event.lngLat[0],
          county: feature.properties,
        };
      }
      setPopupInfo(popupInfo);
    }
  };

  const renderPopup = () => {
    if (popupInfo) {
      return (
        <Popup
          anchor="top"
          latitude={popupInfo.latitude}
          longitude={popupInfo.longitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <div className="name">{popupInfo.county.name}</div>
          <div className="learn">
            {" "}
            Learn More: <a href={popupInfo.county.learnMoreLink}>Here</a>
          </div>
          <div className="join">
            {" "}
            Join Us: <a href={popupInfo.county.fbLink}>Here</a>
          </div>
        </Popup>
      );
    }
    return null;
  };

  const mapRef = React.useRef();

  return (
    <ReactMapGL
      ref={mapRef}
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={props.mapboxToken}
      height={500}
      onClick={onClickChapter}
    >
      <Geocoder
        mapRef={mapRef}
        onViewportChange={(viewport) => {
          props.setLocation({
            longitude: viewport.longitude,
            latitude: viewport.latitude,
          });
          setViewport((state) => { 
            return {
              ...state,
              latitude: viewport.latitude,
              longitude: viewport.longitude
            };
          });
        }}
        mapboxApiAccessToken={props.mapboxToken}
      />
      <Pins data={[props.location]} />

      <Source
        type="geojson"
        data={{
          type: "FeatureCollection",
          features: props.chapters,
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
