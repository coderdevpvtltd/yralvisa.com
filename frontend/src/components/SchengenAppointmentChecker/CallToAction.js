import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Schengen Visa Appointment?</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Check available dates, find application centers, and get started with your Schengen visa process today.
        </p>
        <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-md transition duration-300">
          Check Appointment Availability
        </button>
      </div>
    </div>
  );
};

export default CallToAction;