import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 bg-gradient-to-r from-blue-100 to-indigo-300 min-h-[500px]">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Private.</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Transparent.</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure.</h1>
        <p className="text-gray-600 mb-8">
          Customers worldwide trust us to look after millions of sensitive documents.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative transform rotate-12 shadow-lg bg-white p-6 rounded-lg w-64 h-96">
          <div className="text-xs text-gray-500 rotate-90 absolute -right-8 top-16">PASSPORT</div>
          <div className="border-b border-gray-200 pb-2 pt-4">
            <div className="text-xs text-gray-500">PHOTO</div>
            <div className="w-24 h-32 bg-gray-200 mx-auto mt-2"></div>
          </div>
          <div className="pt-4">
            <div className="text-xs text-gray-500">INFORMATION</div>
            <div className="space-y-2 mt-2">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <svg className="w-16 h-16 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;