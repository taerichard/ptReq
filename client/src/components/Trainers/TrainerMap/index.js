//www.youtube.com/watch?v=Pf7g32CwX_s
import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.608013, lng: -122.335167 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function TrainerLocationMap() {
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "50%" }} />}
        containerElement={<div style={{ height: "300px", width: "700px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default TrainerLocationMap;
