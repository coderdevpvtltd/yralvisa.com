import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schengen Visa Appointment Availability From India
          </h1>
          <p className="text-gray-700 mb-6">
            Find Schengen visa appointment available dates, book appointments,
            locate application centers, and access visa tips for smooth travel
            planning.
          </p>
        </div>
        <div className="md:w-5/12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Find Schengen Visa Appointments
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">From</label>
            <div className="relative">
              <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>India</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">To</label>
            <div className="relative">
              <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Schengen Countries</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            Search Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
