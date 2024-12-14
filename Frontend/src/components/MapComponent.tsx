// src/components/MapComponent.tsx
// https://andresmpa.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18
// https://github.com/PaulLeCam/react-leaflet/issues/1133 
// Either set react strict mode false with dependencies of latest (Kevinbioj), or use the experimental versions of dependencies for React, reactleaflet and react-dom


"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng, LatLngExpression, LatLngTuple, map } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLng,
  zoom?: number,
}

const defaults = {
  zoom: 19,
}

const Map = (Map: MapProps) => {
  return (
    <MapContainer
      zoom= {Map.zoom}
      center= {Map.posix} // latlng.
      scrollWheelZoom= {false}
      style= {{height: "100%", width: "100%"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={Map.posix} draggable={false} > {/* latlng.*/}
        <Popup>Placeholder Shelter Here</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map