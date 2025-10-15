import React from 'react';

export const MapSkeleton: React.FC = () => (
  <div className="w-full h-full border rounded bg-white overflow-hidden">
    <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="w-full border rounded bg-white p-3 animate-pulse">
    <div className="h-4 w-1/3 bg-gray-200 rounded mb-3" />
    <div className="space-y-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-6 bg-gray-100 rounded" />
      ))}
    </div>
  </div>
);
