import React from 'react';
import Footer from './HomePageComponents/Footer'; // Import your Footer component

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="text-2xl font-bold">yralvisa</div>
            <div className="ml-1 text-xs text-indigo-600 font-semibold">VISAS ON TIME</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-indigo-600">
              <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 6-6" />
              </svg>
              <div>
                <span className="font-medium">On Time</span>
                <div className="text-xs">Guaranteed</div>
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with proper spacing */}
      <main className="flex-grow flex items-center justify-center py-[2px] px-4 bg-gray-50">
  <div className="m-[2px]">
    {children}
  </div>
</main>

      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;