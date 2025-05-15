const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col space-y-16">
          {/* Logo and Menu Sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div>
              <div className="flex items-start">
                <h1 className="text-2xl font-bold">yralvisa</h1>
                <span className="text-xs ml-1 mt-1">visas on<br />time</span>
              </div>
            </div>
            
            {/* Navigation Columns */}
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">TOOLS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Photo Creator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Schengen Cover Letter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Schengen Invitation Letter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Eligibility Quiz</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Glossary</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">UAE Status Checker</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Vietnam Status Checker</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and Address Section */}
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <p className="text-gray-500 text-sm">© yralvisa, All rights reserved</p>
              </div>
              
              <div className="md:text-right mt-4 md:mt-0">
                <h3 className="text-lg font-semibold mb-2">OFFICES</h3>
                <p className="text-gray-400 text-sm">301 Mission, San Francisco, CA, 94105</p>
                <p className="text-gray-400 text-sm">447 Broadway STE 851, New York, NY, 10013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;