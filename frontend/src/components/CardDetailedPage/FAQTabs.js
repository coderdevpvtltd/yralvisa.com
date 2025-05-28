import React from 'react';

export function FAQTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setActiveTab('general')}
        className={`px-4 py-2 rounded-md ${activeTab === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        General Information
      </button>
      <button
        onClick={() => setActiveTab('eligibility')}
        className={`px-4 py-2 rounded-md ${activeTab === 'eligibility' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        Eligibility & Requirements
      </button>
      <button
        onClick={() => setActiveTab('application')}
        className={`px-4 py-2 rounded-md ${activeTab === 'application' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        Application Process
      </button>
      <button
        onClick={() => setActiveTab('entry')}
        className={`px-4 py-2 rounded-md ${activeTab === 'entry' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        Entry & Exit Regulations
      </button>
    </div>
  );
}