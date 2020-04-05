import React from "react";

function LocationInput(props) {
  return (
    <div>
      {navigator.geolocation && (
        <button
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                props.setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
              },
              (error) => {
                console.error(error);
              }
            );
          }}
        >
          Find me!
        </button>
      )}
    </div>
  );
}

export default LocationInput;
