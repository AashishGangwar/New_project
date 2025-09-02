import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusinessNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f2efda]">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-8 pt-0">
        <div className="bg-[#f2efda] backdrop-blur-md rounded-b-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/Business/BusinessLogo.svg" 
                alt="Wayground Business" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/Business/BusinessLogo.svg";
                }}
              />
            </Link>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                to="/solutions" 
                className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                Solutions
              </Link>
              <Link 
                to="/industries" 
                className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                Industries
              </Link>
              <Link 
                to="/get-demo" 
                className="px-6 py-2.5 text-lg font-bold text-white bg-[#3b142b] hover:bg-[#2a0f1f] rounded-full transition-all duration-200 shadow-sm"
              >
                Get Demo
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-2.5 text-lg font-bold text-[#f2feda] bg-[#FF8A3D] hover:bg-[#FF8A3D]/80 rounded-full transition-all duration-200 shadow-sm border border-[#3b142b]/20"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3b142b]"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link 
                to="/solutions" 
                className="block px-4 py-3 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/industries" 
                className="block px-4 py-3 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/get-demo" 
                  className="block px-4 py-3 text-center text-lg font-bold text-white bg-[#3b142b] hover:bg-[#2a0f1f] rounded-lg transition-all duration-200 shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Get Demo
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-4 py-3 text-center text-lg font-bold text-[#3b142b] bg-[#FF8A3D] hover:bg-[#FF8A3D]/90 rounded-lg transition-all duration-200 shadow-sm border border-[#3b142b]/20"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;
