import React from 'react';
import type { SearchFilters } from '../types';

interface Props {
  filters: SearchFilters;
  onChange: (next: SearchFilters) => void;
}

const FilterPanel: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
        <input
          id="price"
          className="w-full border rounded px-3 py-2"
          type="number"
          placeholder="e.g. 2500"
          value={filters.price ?? ''}
          onChange={(e) => onChange({ ...filters, price: e.target.value === '' ? undefined : Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="beds">Beds</label>
        <input
          id="beds"
          className="w-full border rounded px-3 py-2"
          type="number"
          placeholder="e.g. 2"
          value={filters.bedrooms ?? ''}
          onChange={(e) => onChange({ ...filters, bedrooms: e.target.value === '' ? undefined : Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="baths">Baths</label>
        <input
          id="baths"
          className="w-full border rounded px-3 py-2"
          type="number"
          placeholder="e.g. 2"
          value={filters.bathrooms ?? ''}
          onChange={(e) => onChange({ ...filters, bathrooms: e.target.value === '' ? undefined : Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="sqft">SqFt</label>
        <input
          id="sqft"
          className="w-full border rounded px-3 py-2"
          type="number"
          placeholder="e.g. 1200"
          value={filters.square_footage ?? ''}
          onChange={(e) => onChange({ ...filters, square_footage: e.target.value === '' ? undefined : Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="radius">Radius (mi)</label>
        <input
          id="radius"
          className="w-full border rounded px-3 py-2"
          type="number"
          placeholder="e.g. 5"
          value={filters.radius_miles}
          onChange={(e) => onChange({ ...filters, radius_miles: Number(e.target.value || 0) })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="days">Days Old</label>
        <input
          id="days"
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="*:270"
          value={filters.days_old ?? ''}
          onChange={(e) => onChange({ ...filters, days_old: e.target.value || undefined })}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
