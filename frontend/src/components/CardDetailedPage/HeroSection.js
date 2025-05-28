import React from 'react';

export function HeroSection() {
  return (
    <div className="mt-6 relative rounded-lg overflow-hidden h-96">
      <img src="/api/placeholder/1000/600" alt="Thailand landscape" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <h1 className="absolute bottom-8 left-8 text-white text-4xl md:text-5xl font-bold">Thailand Visa for Indians</h1>
    </div>
  );
}
