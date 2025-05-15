export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-3 fixed top-0 w-full z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold flex items-center">
          <span className="text-2xl">yralvisa</span>
          <sup className="ml-1 text-xs">®</sup>
          <span className="ml-1 text-xs font-normal">VISAS ON TIME</span>
        </div>
        <div className="flex gap-3 items-center text-white">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xs">On Time</span>
              <span className="text-xs">Guaranteed</span>
            </div>
          </div>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 9a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </div>
      </div>
      {/* Static search bar below navbar, as in homepage SearchBar.js */}
      <div className="bg-white z-20 transition-all duration-300 relative">
        <div className="container mx-auto px-4 py-3">
          <div className="bg-white rounded-lg shadow-lg flex items-center overflow-hidden max-w-xl mx-auto">
            <div className="pl-4 pr-2">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full py-3 px-2 focus:outline-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </nav>
  );
} 