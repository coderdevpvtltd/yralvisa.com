import React from 'react';

export function EligibilityFAQ() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">What are the requirements for Indians to enter Thailand?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            Indian citizens need the following documents to enter Thailand:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>A valid passport with at least 6 months validity</li>
            <li>A completed Thailand Digital Arrival Card (TDAC)</li>
            <li>Proof of sufficient funds (at least 20,000 THB per person or 40,000 THB per family)</li>
            <li>Confirmed return ticket or onward journey ticket</li>
            <li>Proof of accommodation for your stay</li>
          </ul>
        </div>
      </div>
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">Can I extend my visa-free stay in Thailand?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            Yes, you can apply for an extension at any Thailand Immigration Office for up to 30 additional days, subject to approval. The fee is 1,900 THB. You must apply before your current permission to stay expires.
          </p>
        </div>
      </div>
    </div>
  );
}
