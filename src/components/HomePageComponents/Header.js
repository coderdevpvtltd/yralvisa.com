const Header = () => (
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
  </nav>
);

export default Header;
