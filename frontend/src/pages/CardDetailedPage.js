// pages/CardDetailedPage.jsx
import React, { useState } from 'react';

// Import all components from components/CardDetailedPage directory

import { HeroSection } from '../components/CardDetailedPage/HeroSection';
import { Gallery } from '../components/CardDetailedPage/Gallery';
import { Ratings } from '../components/CardDetailedPage/Ratings';
import { TDACInfo } from '../components/CardDetailedPage/TDACInfo';
import { WhatIsTDAC } from '../components/CardDetailedPage/TDAC';
import { WhyAtlys } from '../components/CardDetailedPage/WhyAtlys';
import { Partners } from '../components/CardDetailedPage/Partners';
import { FAQTabs } from '../components/CardDetailedPage/FAQTabs';
import { GeneralFAQ } from '../components/CardDetailedPage/GeneralFAQ';
import { EligibilityFAQ } from '../components/CardDetailedPage/EligibilityFAQ';
import { ApplicationFAQ } from '../components/CardDetailedPage/ApplicationFAQ';
import { EntryExitFAQ } from '../components/CardDetailedPage/EntryExitFAQ';

function CardDetailedPage() {
  // State for the active FAQ tab
  const [activeTab, setActiveTab] = useState('general');

  // Function to render the appropriate FAQ component based on active tab
  const renderActiveFAQ = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralFAQ />;
      case 'eligibility':
        return <EligibilityFAQ />;
      case 'application':
        return <ApplicationFAQ />;
      case 'entry':
        return <EntryExitFAQ />;
      default:
        return <GeneralFAQ />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 md:px-8 pb-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Gallery */}
        <Gallery />

        {/* Ratings Section */}
        <Ratings />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* TDAC Information Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <TDACInfo />
            </section>

            {/* What is TDAC Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <WhatIsTDAC />
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
              <div className="h-px bg-gray-200 my-6"></div>
              
              {/* FAQ Tabs */}
              <FAQTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {/* Render active FAQ content */}
              {renderActiveFAQ()}
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Why Atlys Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <WhyAtlys />
            </section>

            {/* Call to Action Button */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                Apply for TDAC Now
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Get your TDAC in as little as 5 hours
              </p>
            </div>

            {/* Partners Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <Partners />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardDetailedPage;