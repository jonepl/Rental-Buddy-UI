import React from 'react';

const FilterPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
        <input id="price" className="w-full border rounded px-3 py-2" type="number" placeholder="e.g. 2500" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="beds">Beds</label>
        <input id="beds" className="w-full border rounded px-3 py-2" type="number" placeholder="e.g. 2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="baths">Baths</label>
        <input id="baths" className="w-full border rounded px-3 py-2" type="number" placeholder="e.g. 2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="sqft">SqFt</label>
        <input id="sqft" className="w-full border rounded px-3 py-2" type="number" placeholder="e.g. 1200" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="radius">Radius (mi)</label>
        <input id="radius" className="w-full border rounded px-3 py-2" type="number" placeholder="e.g. 5" defaultValue={5} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="days">Days Old</label>
        <input id="days" className="w-full border rounded px-3 py-2" type="text" placeholder="*:270" />
      </div>
    </div>
  );
};

export default FilterPanel;
