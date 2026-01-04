import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS, ARTIST_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light bg-opacity-90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo/Artist Name */}
        <div className="flex-shrink-0">
          <RouterNavLink to="/" className="text-xl font-bold text-dark hover:text-primary transition-colors">
            {ARTIST_NAME}
          </RouterNavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-dark hover:text-primary font-medium transition-colors ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-dark hover:text-primary focus:outline-none focus:text-primary transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-light bg-opacity-95 backdrop-blur-md pb-4 border-t border-gray-200`}
      >
        <div className="px-2 pt-2 space-y-2">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-secondary transition-colors ${
                  isActive ? 'bg-secondary text-primary' : ''
                }`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;