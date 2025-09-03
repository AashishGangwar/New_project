import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dropdown, DropdownButton, DropdownMenu, DropdownMenuMulti } from './dropdown/index';
import { menuData } from '../data/menuData';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSchoolDistrictActive = location.pathname === '/school-district';
  const isPlansActive = location.pathname === '/plans';
  const isBusinessActive = location.pathname === '/business';
  const isBrowseActive = location.pathname.startsWith('/browse');

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#3b142b] text-white w-full fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-28">
          {/* Left group (logo + nav links) */}
          <div className="flex items-center space-x-2 md:space-x-8">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Wayground Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex space-x-2 items-center">
              <Link
                to="/school-district"
                className={`px-4 py-2 rounded-md transition font-bold ${
                  isSchoolDistrictActive ? 'bg-white/30' : 'hover:bg-white/30'
                }`}
              >
                School & District
              </Link>
              <Link
                to="/plans"
                className={`px-4 py-2 rounded-md transition font-bold ${
                  isPlansActive ? 'bg-white/30' : 'hover:bg-white/30'
                }`}
              >
                Plans
              </Link>
              <Dropdown>
                <DropdownButton>
                  <span className={isBrowseActive ? 'font-bold' : ''}>
                    Library
                  </span>
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </DropdownButton>
                <DropdownMenu width="w-auto" className="p-0">
                  <DropdownMenuMulti 
                    items={menuData} 
                    onClose={() => {}}
                    onItemClick={(item) => {
                      if (item.type === 'link' && item.href) {
                        navigate(item.href);
                      } else if (item.children && typeof item.children === 'string') {
                        // Handle subject click (e.g., "Math", "Science")
                        const grade = item.parentLabel?.toLowerCase().replace(' ', '-');
                        const subject = item.children.toLowerCase().replace(/\s+/g, '-');
                        navigate(`/library/grade/${grade}/subject/${subject}`);
                      } else if (item.label) {
                        // Handle grade level click (e.g., "1st grade")
                        const grade = item.label.toLowerCase().replace(' ', '-');
                        navigate(`/library/grade/${grade}`);
                      }
                    }}
                  />
                </DropdownMenu>
              </Dropdown>
              <div className="h-10 w-px bg-white/30 mx-3"></div>
              <Link
                to="/business"
                className={`px-4 py-2 rounded-md transition font-bold ${
                  isBusinessActive ? 'bg-white/30' : 'hover:bg-white/30'
                }`}
              >
                For Business
              </Link>
            </div>
          </div>

          {/* Right group (buttons) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/get-quote"
              className="px-3 py-2 rounded-md bg-[#f1e8da] text-[#3b142b] font-medium hover:bg-white/80"
            >
              Get a quote
            </Link>
            <div className="h-12 w-px bg-white/30"></div>
            <Link to="/join-game" className="px-3 py-2 rounded-md font-medium text-white hover:bg-white/40 transition-colors">
              Enter code
            </Link>
            <Link to="/login" className="px-3 py-2 rounded-md font-medium text-white hover:bg-white/40 transition-colors">
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 rounded-md bg-[#ff1ead] font-medium text-white hover:bg-[#ff4cc6]"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile section (hamburger + Enter code) */}
          <div className="md:hidden flex items-center space-x-3 mr-2">
            <Link 
              to="/join-game" 
              className={`px-2 py-1 rounded-md bg-[#ffffff]/30 text-white hover:bg-[#7d75ff] transition-colors ${mobileOpen ? 'hidden' : 'block'}`}
            >
              Enter code
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#3b142b] flex flex-col">
          {/* Top bar inside drawer */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="Wayground Logo" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center space-x-4">
              <button onClick={() => setMobileOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col space-y-4 p-6">
            <Link to="/school-district" onClick={() => setMobileOpen(false)} className="font-bold hover:text-gray-200">
              School & District
            </Link>
            <Link to="/plans" onClick={() => setMobileOpen(false)} className="font-bold hover:text-gray-200">
              Plans
            </Link>
            <button className="flex items-center font-bold hover:text-gray-200">
              Library <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <Link to="/business" onClick={() => setMobileOpen(false)} className="font-bold hover:text-gray-200">
              For Business
            </Link>
          </div>

          {/* Bottom buttons */}
          <div className="p-6 space-y-3">
          <Link
              to="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md bg-[#f1e8da] text-[#3b142b] font-bold hover:bg-white/80"
            >
              Get a quote
            </Link>
            <Link 
              to="/login" 
              onClick={() => setMobileOpen(false)} 
              className="block w-full text-center px-4 py-3 rounded-md bg-[#ff1ead] font-bold text-white hover:bg-white/20"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md bg-[#ff1ead] font-bold hover:bg-[#ff4cc6] text-white"
            >
              Sign up
            </Link>
      
          </div>
        </div>
      )}
    </nav>
  );
}
