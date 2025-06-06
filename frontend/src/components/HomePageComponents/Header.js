import { useState, useEffect } from 'react';
import { FiSearch, FiShield } from 'react-icons/fi';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showNavbarSearch, setShowNavbarSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mainHeroSearchBar = document.getElementById('main-hero-search-bar');
    const handleScrollAndVisibility = () => {
      const isScrolledPastThreshold = window.scrollY > 50;
      let isHeroSearchVisible = false;

      if (mainHeroSearchBar) {
        const rect = mainHeroSearchBar.getBoundingClientRect();
        isHeroSearchVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      }

      if (isScrolledPastThreshold && !isHeroSearchVisible) {
        setShowNavbarSearch(true);
      } else {
        setShowNavbarSearch(false);
      }
    };

    window.addEventListener('scroll', handleScrollAndVisibility);
    window.addEventListener('resize', handleScrollAndVisibility);
    handleScrollAndVisibility();

    return () => {
      window.removeEventListener('scroll', handleScrollAndVisibility);
      window.removeEventListener('resize', handleScrollAndVisibility);
    };
  }, []);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <nav className={clsx('bg-indigo-600 py-3 sticky top-0 z-50 transition-all duration-300 shadow-lg')}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">yralvisa</span>
        </div>
        <div className={clsx('flex-1 mx-4 transition-all duration-300 ease-in-out', showNavbarSearch ? 'opacity-100 translate-y-0 max-w-lg' : 'opacity-0 -translate-y-2 max-w-md pointer-events-none', 'hidden sm:flex')}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full max-w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 font-medium transition-all placeholder:text-gray-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex items-center text-white space-x-2">
            <FiShield size={26} className="hidden md:block" />
            <div className="text-sm hidden md:block">
              <div className="font-medium">On Time</div>
              <div className="font-normal text-xs underline">Guaranteed</div>
            </div>
          </div>
          <button 
            className="p-1.5 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={handleRegisterClick}
          >
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.12">
                <path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8Z" fill="currentColor"></path>
                <path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" fill="currentColor"></path>
              </g>
              <path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8V18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8V18.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              <path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={clsx('px-4 pb-3 sm:hidden transition-all duration-300 ease-in-out', showNavbarSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none h-0')}>
        <div className="relative w-full mt-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Where to?"
            className="block w-full bg-white/90 backdrop-blur-sm border border-transparent rounded-lg py-2.5 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent sm:text-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
