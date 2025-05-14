// src/components/BottomToggle.js
import React from 'react';

const BottomToggle = () => (
  <div className="container mx-auto text-center my-4 px-4">
    <div className="inline-flex rounded-md shadow-sm">
      <button className="bg-gray-800 text-white py-2 px-4 rounded-l focus:outline-none">
        Show Grid
      </button>
      <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-r focus:outline-none">
        Show Map
      </button>
    </div>
  </div>
);

export default BottomToggle;