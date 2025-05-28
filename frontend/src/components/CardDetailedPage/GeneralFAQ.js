import React from 'react';

export function GeneralFAQ() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">Do Indians need a visa for Thailand?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            Indian citizens do not need a visa to visit Thailand. Still, as of May 1, 2025, the <span className="font-medium">Thailand Digital Arrival Card (TDAC)</span> is mandatory for all Indian travellers entering Thailand and must be completed online before arrival.
          </p>
        </div>
      </div>
      
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">Do Indians need a visa to Thailand for purposes other than tourism (e.g., work, study)?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            Indians planning to work, study, or do business in Thailand must apply for the appropriate Non-Immigrant visa before travelling. This requires submitting extra documentation, such as sponsorship letters, contracts, or enrollment letters (depending on the purpose of your visit) at the embassy.
          </p>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              <p className="text-green-700">
                <span className="font-bold">Note:</span> For urgent or ad-hoc work in Thailand under the visa-free regime (such as organizing a workshop, giving a lecture, or filming a movie), you only need to notify the registrar at an airport or local immigration office. The work must be completed within 15 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-b pb-4">
        <button className="flex justify-between items-center w-full text-left">
          <h3 className="text-lg font-medium text-gray-900">Do Indians need a transit visa to pass through Thailand?</h3>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="mt-4">
          <p className="text-gray-700">
            No, Indian citizens do not need a transit visa when passing through Thailand. However, if you plan to exit the airport during your layover, you'll need to complete the TDAC process before arrival.
          </p>
        </div>
      </div>
    </div>
  );
}
