import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { FaPinterest, FaXTwitter, FaUniversalAccess } from 'react-icons/fa6';
import logo from '../assets/logo.svg';

export default function FooterCard() {
  return (
    <>
      {/* Mobile Footer */}
      <div className="w-full bg-[#3b142b] text-white pt-20 pb-10 mt-10 relative overflow-hidden block md:hidden">
        {/* Background shape */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-auto object-cover"
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0V500H1440V0C1440,0 1300,100 1080,100C860,100 800,200 580,200C360,200 200,50 0,100Z"
              fill="#3b142b"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Logo and Accessibility */}
            <div className="md:col-span-3">
              <div className="flex flex-col h-full">
                <img src={logo} alt="Wayground Logo" className="h-14 w-auto mb-6" />
                <div className="flex items-center gap-3 mt-auto">
                  <FaUniversalAccess className="w-10 h-10 text-[#f2efda] flex-shrink-0" />
                  <span className="text-lg font-medium">Accessibility</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-6 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#f2efda]">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors text-base">School & District</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">For Business</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Webinars</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#f2efda]">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors text-base">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Privacy Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-base">Media Kit</a></li>
                </ul>
              </div>
            </div>

            {/* App Downloads */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4 text-[#f2efda]">Get the app</h3>
              <div className="space-y-4">
                <a href="#" className="block w-full max-w-[180px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="w-full h-auto"
                  />
                </a>
                <a href="#" className="block w-full max-w-[180px]">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 Quizizz Inc. <span className="font-medium">(DBA Wayground)</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#ff1ead] hover:text-white transition-colors"><FaPinterest className="w-6 h-6" /></a>
              <a href="#" className="text-[#ff1ead] hover:text-white transition-colors"><FaXTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-[#ff1ead] hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-[#ff1ead] hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="relative w-full justify-center hidden md:flex">
        <div className="w-full max-w-[1741px]">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1741 705"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 124.57C0 116.658 6.14543 110.106 14.0413 109.601L1725.04 0.0220491C1733.69 -0.531528 1741 6.32994 1741 14.9914V590.5C1741 598.784 1734.28 605.5 1726 605.5H15C6.71572 605.5 0 598.784 0 590.5V124.57Z"
              fill="#3b142b"
            />
            {/* Content inside SVG */}
            <foreignObject x="0" y="120" width="100%" height="485" className="text-white">
              <div className="px-10 pb-8 pt-12">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
                    {/* Left: Logo + Accessibility */}
                    <div className="flex flex-col items-start">
                      <img src={logo} alt="Wayground Logo" className="h-18 w-auto mb-4" />
                      <div className="flex items-center gap-3 text-white mt-20">
                        <FaUniversalAccess className="w-14 h-14 text-[#f2efda]" />
                        <span className="text-2xl font-medium">Accessibility</span>
                      </div>
                    </div>
                    {/* Middle: Links */}
                    <div className="grid grid-cols-2 gap-12">
                      <ul className="space-y-4">
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">School & District</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Blog</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">For Business</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">About us</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Webinars</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Help Center</a></li>
                      </ul>
                      <ul className="space-y-4">
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Privacy Center</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Careers</a></li>
                        <li><a href="#" className="hover:underline text-[#f2efda] hover:text-white text-xl block py-1">Media Kit</a></li>
                      </ul>
                    </div>
                    {/* Right: App Download */}
                    <div className="flex flex-col items-end gap-5 ml-auto">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-60 h-auto" />
                      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-60 h-auto" />
                    </div>
                  </div>
                  {/* Bottom Bar */}
                  <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/60 text-base mb-4 md:mb-0">
                      2025 Quizizz Inc. <em className="not-italic">(DBA Wayground)</em>
                    </p>
                    <div className="flex space-x-6 text-[#ff1ead]">
                      <a href="#" className="hover:text-white transition-colors"><FaPinterest className="w-10 h-10" /></a>
                      <a href="#" className="hover:text-white transition-colors"><FaXTwitter className="w-10 h-10" /></a>
                      <a href="#" className="hover:text-white transition-colors"><Facebook className="w-10 h-10" /></a>
                      <a href="#" className="hover:text-white transition-colors"><Instagram className="w-10 h-10" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </>
  );
}
