import React from 'react';
import Hero from '../components/SchengenAppointmentChecker/Hero.jsx';
import Features from '../components/SchengenAppointmentChecker/Features.js';
import HowItWorks from '../components/SchengenAppointmentChecker/HowItWorks.js';
import Testimonials from '../components/SchengenAppointmentChecker/Testimonials.js';

const SchengenAppointmentChecker = () => {
  return (
    <div className="schengen-appointment-checker">
      {/* Header Placeholder - You can import and add your header component here */}
      <div className="header-placeholder">
        {/* <Header /> */}
      </div>
      
      {/* Main content sections */}
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      
      {/* Footer Placeholder - You can import and add your footer component here */}
      <div className="footer-placeholder">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default SchengenAppointmentChecker;