import React from 'react';

export const MapContainer: React.FC<React.PropsWithChildren<{ center?: any; zoom?: number; style?: React.CSSProperties }>> = ({ children }) => {
  return React.createElement('div', { 'data-testid': 'map-container' }, children);
};

export const TileLayer: React.FC = () => {
  return React.createElement('div', { 'data-testid': 'tile-layer' });
};

export const Marker: React.FC<React.PropsWithChildren<{ position?: [number, number]; eventHandlers?: any }>> = ({ children }) => {
  return React.createElement('div', { 'data-testid': 'marker' }, children);
};

export const Popup: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return React.createElement('div', { 'data-testid': 'popup' }, children);
};

export const useMapEvents = (_?: any) => {
  // No-op hook replacement used in tests
  return {} as any;
};

export const CircleMarker: React.FC<{ center?: [number, number]; radius?: number; pathOptions?: any }> = () => {
  return React.createElement('div', { 'data-testid': 'circle-marker' });
};

export default {} as any;
