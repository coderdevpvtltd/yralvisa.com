const SearchBar = ({ scrolled }) => (
  <div className={`bg-white z-20 transition-all duration-300 ${scrolled ? 'fixed top-14 left-0 right-0 shadow-md' : 'relative -mt-8'}`}>
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
);

export default SearchBar;
