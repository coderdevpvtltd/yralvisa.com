import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';

const navLinks = [
  { name: 'Cards', path: '/admin/cards' },
  // Add more links here as needed
];

export default function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }
  // Attach event listener for outside click
  React.useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-lg">
        <div className="h-16 flex items-center justify-center font-bold text-2xl border-b border-gray-800 tracking-wide">
          {/* Logo Placeholder */}
          <span className="mr-2">🌐</span> yralvisa Admin
        </div>
        <nav className="flex-1 py-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-6 py-3 rounded transition font-medium
                ${location.pathname === link.path ? 'bg-blue-600 text-white shadow' : 'hover:bg-blue-700 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Admin Header/Topbar */}
        <header className="h-16 bg-gray-800 flex items-center justify-between px-8 shadow text-white">
          <div className="text-lg font-semibold tracking-wide">Admin Dashboard</div>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700 focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-label="User menu"
            >
              {/* User SVG icon from old navbar */}
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.12">
                  <path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8Z" fill="currentColor"></path>
                  <path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" fill="currentColor"></path>
                </g>
                <path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8V18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8V18.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50 text-gray-800">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setDropdownOpen(false); navigate('/'); }}
                >
                  Home
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setDropdownOpen(false); /* Add logout logic here */ }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
} 