import React, { useRef, useState } from "react";
import Map, { Marker, WebMercatorViewport } from "react-map-gl";
import pin from "../../images/pin.png";

import "mapbox-gl/dist/mapbox-gl.css";

export const Location = ({ startLocation, locations }) => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 3,
  });
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiMTk5N2hrIiwiYSI6ImNreWIzeGpnODBidHkyd3E3azd3c3lmdmQifQ.RGTSwgY7Pq5FEwR-74z5BA";

  return (
    <section className="map-section">
      <Map
        initialViewState={{
          zoom: 1,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/1997hk/cldym3tm7001c01pdnqt3qlen"
      >
        {locations?.map((location, index) => {
          return (
            <Marker
              key={index}
              longitude={location.coordinates[0]}
              latitude={location.coordinates[1]}
              anchor="bottom"
            >
              <img src={pin} alt="pin" className="pin" />
            </Marker>
          );
        })}
      </Map>
      ;
    </section>
  );
};
