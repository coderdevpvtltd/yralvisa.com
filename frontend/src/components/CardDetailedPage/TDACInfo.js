import React from 'react';

export function TDACInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">TDAC Information</h2>
      <div className="h-px bg-gray-200 my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <p className="text-gray-500">Type:</p>
            <p className="font-medium">TDAC</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <p className="text-gray-500">Length of Stay:</p>
            <p className="font-medium">90 days</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-gray-500">Validity:</p>
            <p className="font-medium">90 days</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
          </div>
          <div>
            <p className="text-gray-500">Entry:</p>
            <p className="font-medium">Single</p>
          </div>
        </div>
      </div>
    </div>
  );
}