import React, { useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const Location = ({ startLocation, locations }) => {
  const mapContainer = useRef(null);

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiMTk5N2hrIiwiYSI6ImNreWIzeGpnODBidHkyd3E3azd3c3lmdmQifQ.RGTSwgY7Pq5FEwR-74z5BA";
  return (
    <section className="map-section">
      <Map
        initialViewState={{
          zoom: 4,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {locations?.map((location, index) => {
          console.log(locations.length);
          console.log(location.coordinates[0]);
          return (
            <Marker
              key={index}
              longitude={location.coordinates[0]}
              latitude={location.coordinates[1]}
              anchor="bottom"
            ></Marker>
          );
        })}
        {/* <Marker
          longitude={-106.855385}
          latitude={39.182677}
          anchor="bottom"
        ></Marker>
        <Marker longitude={-100} latitude={40} anchor="bottom"></Marker> */}
      </Map>
      ;
    </section>
  );
};
