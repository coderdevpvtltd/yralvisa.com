import React from 'react';

export function Gallery() {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="h-48 rounded-lg overflow-hidden">
          <img src="/api/placeholder/500/300" alt="Thailand temple" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 rounded-lg overflow-hidden">
          <img src="/api/placeholder/500/301" alt="Thailand beach" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 rounded-lg overflow-hidden">
          <img src="/api/placeholder/500/302" alt="Thailand landscape" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 rounded-lg overflow-hidden">
          <img src="/api/placeholder/500/303" alt="Thailand temple" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}