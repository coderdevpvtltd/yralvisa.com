import React from 'react';
import { ArrowUp } from 'lucide-react';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="font-bold text-2xl">atlys</div>
        <div className="text-xs ml-1 text-gray-500">visas on<br />time</div>
      </div>
      <div>
        <div className="flex items-center text-indigo-600">
          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <div>
            <div className="text-sm font-medium">On Time</div>
            <div className="text-xs">Guaranteed</div>
          </div>
        </div>
      </div>
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-black rounded-full p-3 z-50">
        <ArrowUp className="text-white" size={24} />
      </button>
    </div>
  );
};

export default Navbar;