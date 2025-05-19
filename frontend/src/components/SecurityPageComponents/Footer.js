import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="font-bold text-2xl">yralvisa</div>
            <div className="text-xs ml-1 text-gray-500">visas on<br />time</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Careers</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Blog</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Privacy</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">TOOLS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Visa Photo Creator</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Schengen Cover Letter</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Schengen Invitation Letter</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Visa Eligibility Quiz</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Visa Glossary</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">UAE Status Checker</a></li>
              <li><a href="#" className="text-blue-500 hover:text-blue-700">Vietnam Status Checker</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">OFFICES</h3>
            <p className="text-gray-600 text-sm">301 Mission, San Francisco, CA, 94105</p>
            <p className="text-gray-600 text-sm">447 Broadway STE 851, New York, NY, 10013</p>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">© yralvisa, All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;