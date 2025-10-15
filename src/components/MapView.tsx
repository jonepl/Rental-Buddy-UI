import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Comp } from '../types';

interface Props {
  comps: Comp[];
  selectedId?: string;
  onSelect?: (id?: string) => void;
  onMapClick?: (lat: number, lng: number) => void;
  searchLocation?: { latitude: number; longitude: number } | undefined;
  hoveredId?: string;
  onHover?: (id?: string) => void;
}

const MapClick: React.FC<{ onClick?: (lat: number, lng: number) => void }> = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick?.(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const MapView: React.FC<Props> = ({ comps, selectedId, onSelect, onMapClick, searchLocation, hoveredId, onHover }) => {
  const center: [number, number] = comps.length
    ? [comps[0].latitude, comps[0].longitude]
    : [30.2672, -97.7431]; // Austin default

  return (
    <div className="w-full h-full border rounded overflow-hidden">
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClick onClick={onMapClick} />
        {searchLocation && (
          <Marker position={[searchLocation.latitude, searchLocation.longitude]}>
            <Popup>Search location</Popup>
          </Marker>
        )}
        {comps.map((c, idx) => (
          <Marker
            key={c.id ?? `${c.latitude}-${c.longitude}`}
            position={[c.latitude, c.longitude]}
            eventHandlers={{
              click: () => onSelect?.(c.id ?? `${c.latitude}-${c.longitude}`),
              mouseover: () => onHover?.(c.id ?? `${c.latitude}-${c.longitude}`),
              mouseout: () => onHover?.(undefined),
            }}
          >
            <Popup>
              <div className={selectedId === (c.id ?? `${c.latitude}-${c.longitude}`) ? 'font-bold' : ''}>
                {c.address}<br />${c.price} / {c.bedrooms}bd {c.bathrooms}ba
              </div>
            </Popup>
          </Marker>
        ))}
        {hoveredId && comps.map((c, idx) => {
          const id = c.id ?? `${c.latitude}-${c.longitude}`;
          if (id !== hoveredId) return null;
          return (
            <CircleMarker key={`hover-${id}`} center={[c.latitude, c.longitude]} radius={12} pathOptions={{ color: '#3b82f6', weight: 2, fillOpacity: 0.1 }} />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
