import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
      <div className="flex gap-2">
        <input id="address" className="flex-1 border rounded px-3 py-2" placeholder="Enter address or click on map" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Clear</button>
      </div>
      <p className="text-xs text-gray-500 mt-1">Autocomplete and map click will be implemented.</p>
    </div>
  );
};

export default SearchBar;
