import React from 'react';

export function WhyAtlys() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Why Atlys?</h2>
      <div className="h-px bg-gray-200 my-6"></div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Skip the Long Immigration Lines</h3>
            <p className="text-gray-600 mt-1">Glide through immigration with a pre-approved TDAC with Atlys</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Hassle-Free Application</h3>
            <p className="text-gray-600 mt-1">We handle the paperwork and complexity — so you don't have to</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Always On Time</h3>
            <p className="text-gray-600 mt-1">Guaranteed delivery before your travel date</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Risk-Free Guarantee</h3>
            <p className="text-gray-600 mt-1">Delayed? No Atlys fee. Rejected? Full refund</p>
          </div>
        </div>
      </div>
    </div>
  );
}
