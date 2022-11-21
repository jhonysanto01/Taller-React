import React from "react";
import GoogleMaps from "simple-react-google-maps";

export default function mapa() {
  return (
    <div className="container">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
        <GoogleMaps
            apiKey={"AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ"}
            style={{ height: "500px", width: "570px" }}
            zoom={11}
            center={{ lat: 40.748817, lng: -73.985428 }}
        />
    </div>
  )
}
