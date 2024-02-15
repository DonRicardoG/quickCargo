import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCXPYYGMFI6AQTPZ4s0LBrb5LWv_VKyzfc",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="map-container top-50 start-50">
      <GoogleMap
        zoom={17}
        center={{ lat: 27.626385260962543, lng: -99.53763580171666 }}
        mapContainerClassName="map"
      >
        <Marker
          position={{ lat: 27.626385260962543, lng: -99.53763580171666 }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
