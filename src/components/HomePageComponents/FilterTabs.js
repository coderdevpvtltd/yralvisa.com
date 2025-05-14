// src/components/FilterTabs.js
import React from 'react';

const FilterTabs = () => (
  <div className="container mx-auto flex justify-center my-3 px-4">
    <div className="inline-flex rounded-md shadow-sm">
      <button className="bg-blue-600 text-white py-2 px-4 rounded-l focus:outline-none">
        All
      </button>
      <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 focus:outline-none">
        Instant
      </button>
      <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 focus:outline-none">
        In a week
      </button>
      <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-r focus:outline-none">
        In a month
      </button>
    </div>
  </div>
);

export default FilterTabs;