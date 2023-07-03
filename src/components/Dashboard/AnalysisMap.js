import React from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "./Map.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { data } from "./stores.js";

const AnalysisMap = ({ stores }) => {
  const position3 = [37.593883, -119.88281];
  return (
    <div className="leaflet-container">
      <MapContainer center={position3} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((item) => {
          return (
            <Marker
              key={item.distance}
              position={[Number(item.latitude), Number(item.longitude)]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>
                <p>{`${item.city}, ${item.state_abbr} ${item.zipcode}, ${item.state}`}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      ,
    </div>
  );
};

export default AnalysisMap;
