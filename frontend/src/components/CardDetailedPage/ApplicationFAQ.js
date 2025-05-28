import React from 'react';

export function ApplicationFAQ() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">How do I apply for a TDAC?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            You can apply for your TDAC online through Atlys with these simple steps:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700">
            <li>Create your Atlys account</li>
            <li>Enter your traveler information</li>
            <li>Upload your passport photo</li>
            <li>Provide your travel details</li>
            <li>Pay the processing fee</li>
            <li>Receive your approved TDAC via email</li>
          </ol>
        </div>
      </div>
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">How long does it take to process a TDAC?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            With Atlys, your TDAC will be processed and delivered within 5 hours guaranteed. If it takes longer, our service is free.
          </p>
        </div>
      </div>
    </div>
  );
}