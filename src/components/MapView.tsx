import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView: React.FC = () => {
  const center: [number, number] = [30.2672, -97.7431]; // Austin default

  return (
    <div className="w-full h-full border rounded overflow-hidden">
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Search location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
