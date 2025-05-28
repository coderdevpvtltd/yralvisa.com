import React from 'react';

export function Ratings() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      <div className="flex items-center space-x-2">
        <span className="text-green-600 font-bold">★</span>
        <span className="font-medium">Trustpilot</span>
        <span className="bg-green-600 text-white px-2 py-0.5 text-sm rounded">GREAT</span>
        <div className="flex">
          <span className="text-green-600">★★★★</span><span className="text-gray-300">★</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-medium">App Store</span>
        <div className="flex">
          <span className="text-amber-400">★★★★★</span>
        </div>
        <span className="font-medium">4.7</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-medium">Google Play</span>
        <div className="flex">
          <span className="text-amber-400">★★★★</span><span className="text-gray-300">★</span>
        </div>
        <span className="font-medium">4.2</span>
      </div>
    </div>
  );
}
