import React from 'react';

export function Partners() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Partners We Work With</h2>
      <div className="h-px bg-gray-200 my-6"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-4 rounded-lg flex items-center justify-center">
          <img src="/api/placeholder/120/60" alt="IATA logo" className="h-10" />
        </div>
        <div className="border p-4 rounded-lg flex items-center justify-center">
          <img src="/api/placeholder/120/61" alt="Thailand Ministry logo" className="h-10" />
        </div>
        <div className="border p-4 rounded-lg flex items-center justify-center">
          <img src="/api/placeholder/120/62" alt="Thailand Immigration logo" className="h-10" />
        </div>
        <div className="border p-4 rounded-lg flex items-center justify-center">
          <img src="/api/placeholder/120/63" alt="Thailand Tourism logo" className="h-10" />
        </div>
      </div>
    </div>
  );
}