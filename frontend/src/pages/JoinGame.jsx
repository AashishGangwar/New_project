import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUniversalAccess } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const JoinGame = () => {
  const [gameCode, setGameCode] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <div 
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(27, 11, 24, 0.9), rgba(59, 20, 43, 0.9)), url("/images/Background/JOIN_gAME.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={closeAllDropdowns}
    >
      <nav className="bg-[#3b142b] text-white w-full fixed top-0 left-0 right-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-2 sm:py-4">
          {/* Left: Logo */}
          <div className="flex items-center mr-2 sm:mr-0">
            <Link to="/">
              <img src={logo} alt="Wayground Logo" className="h-7 sm:h-10 w-auto" />
            </Link>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/images/Navbar/headphone.png" alt="Support" className="hidden sm:block h-12" />
              <div className="hidden sm:block h-6 w-px bg-white/40"></div>
              <Link
                to="/shop"
                className="px-3 sm:px-6 py-1 sm:py-2 font-bold rounded-md bg-[#f2efda]/30 hover:opacity-75 text-xs sm:text-xl transition text-white whitespace-nowrap"
              >
                Go to shop
              </Link>
            </div>
            
            <Link
              to="/dashboard"
              className="px-3 sm:px-6 py-1 sm:py-2 rounded-md bg-[#f2efda] font-bold hover:opacity-75 text-xs sm:text-xl transition text-[#3b142b] whitespace-nowrap"
            >
              My Dashboard
            </Link>
          </div>
        </div>
      </nav>
      {/* MAIN */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
        {/* LOGO + WORDMARK */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* ICON + LETTERS INLINE */}
            <div className="flex items-center space-x-3">
              {/* Left Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 100"
                className="h-45 -mt-20 w-24 text-[#F3EFDA]"
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M25.0039 75.0138C24.9507 74.8245 25.0896 74.6351 25.2876 74.6351H28.696C28.8733 74.6351 29.0123 74.4783 28.9886 74.3038L28.4891 70.28C28.4713 70.132 28.3442 70.0195 28.1964 70.0195H12.2958C12.08 70.0195 11.9381 70.2414 12.0268 70.4367L24.2648 97.5445C24.3122 97.651 24.4185 97.719 24.5339 97.719H31.3652C31.4628 97.719 31.5338 97.6244 31.5072 97.5297L25.0039 75.0138Z" fill="#F3EFDA"/>
                <path d="M45.4591 65.7054C45.4501 65.5368 45.5832 65.3918 45.7546 65.3918H50.4873C50.641 65.3918 50.7681 65.2735 50.7829 65.1225L51.1258 61.1106C51.1406 60.939 51.0046 60.7881 50.8301 60.7881H31.0897C30.9152 60.7881 30.7793 60.939 30.7941 61.1135L34.3709 97.4494C34.3857 97.6004 34.5128 97.7157 34.6665 97.7157L46.9193 97.7039C47.0878 97.7039 47.2238 97.5619 47.2149 97.3903L45.4619 65.7024L45.4591 65.7054Z" fill="#F3EFDA"/>
                <path d="M55.6853 51.5508H79.2687C79.4638 51.5508 79.6056 51.7371 79.5524 51.9265L66.8296 97.4995C66.7941 97.6268 66.6788 97.7156 66.5458 97.7156H50.5448C50.3674 97.7156 50.2313 97.5617 50.2521 97.3871L55.3926 51.8141C55.4104 51.6632 55.5345 51.5508 55.6853 51.5508Z" fill="#F3EFDA"/>
              </svg>

              {/* Wordmark (letters) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 100"
                className="h-12 sm:h-16 md:h-20 w-auto text-[#F3EFDA]"
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M59.5952 2.53659L56.0243 32.3951C56.0076 32.5346 55.8904 32.6407 55.7453 32.6407H55.1093C54.9865 32.6407 54.8749 32.557 54.8414 32.4398L46.4052 2.43057C46.3382 2.19063 46.1206 2.02323 45.8695 2.02323L35.7147 1.98975C35.4916 1.98975 35.2907 2.12367 35.2014 2.32454L22.1676 32.5402C22.1229 32.6407 22.0225 32.7076 21.9109 32.7076H21.4701C21.3139 32.7076 21.1912 32.5849 21.1912 32.4286V2.54775C21.1912 2.24085 20.9401 1.98975 20.6332 1.98975H0.557956C0.25108 1.98975 0 2.24085 0 2.54775V71.3993C0 71.7062 0.25108 71.9573 0.557956 71.9573H21.0573C21.2749 71.9573 21.4757 71.8289 21.565 71.6281L37.1766 37.1214C37.2212 37.0209 37.3217 36.9596 37.4333 36.9596H38.5882C38.711 36.9596 38.8226 37.0433 38.856 37.1604L49.0276 71.5611C49.1001 71.7955 49.3121 71.9629 49.5632 71.9629L70.1796 72.0075C70.453 72.0075 70.6874 71.8066 70.732 71.5388L81.6847 2.6984C81.7405 2.35802 81.4782 2.05113 81.1323 2.05113H60.142C59.8575 2.05113 59.6231 2.26317 59.5897 2.54217L59.5952 2.53659Z" fill="#F3EFDA" /> <path d="M113.814 0.801025C97.1424 0.801025 86.6974 9.63974 84.2257 25.1019L76.8439 71.3545C76.7881 71.6949 77.0504 72.0018 77.3963 72.0018H97.8956C98.169 72.0018 98.4033 71.8009 98.448 71.533L101.132 54.6982C101.154 54.5643 101.271 54.4638 101.405 54.4638H108.999C109.172 54.4638 109.3 54.6201 109.272 54.7875L106.628 71.3601C106.572 71.7004 106.834 72.0073 107.18 72.0073H127.646C127.919 72.0073 128.154 71.8065 128.198 71.5386L135.608 25.1075C138.074 9.63974 130.48 0.806606 113.808 0.806606L113.814 0.801025ZM105.746 25.8161C106.226 22.7918 107.911 21.1289 110.483 21.1289C111.672 21.1289 112.581 21.4916 113.189 22.2059C113.909 23.054 114.143 24.3263 113.875 25.9947L112.151 36.8199C112.129 36.9538 112.012 37.0542 111.878 37.0542H104.284C104.111 37.0542 103.983 36.898 104.011 36.7306L105.752 25.8161H105.746Z" fill="#F3EFDA" /> <path d="M172.248 2.62301L162.668 36.8284C162.635 36.9511 162.523 37.0348 162.4 37.0348H161.502C161.346 37.0348 161.223 36.9121 161.223 36.7558L161.195 2.63417C161.195 2.32727 160.944 2.07617 160.637 2.07617H139.005C138.681 2.07617 138.425 2.34959 138.447 2.66765L141.042 42.5534C141.131 43.9038 141.371 45.243 141.856 46.5041C143.848 51.699 148.87 55.2758 154.617 55.2758H157.317C157.412 55.2758 157.479 55.3651 157.451 55.4544L153.015 71.2848C152.915 71.6419 153.183 71.9935 153.551 71.9935H174.597C174.848 71.9935 175.066 71.8261 175.133 71.5861L194.365 2.92433C194.466 2.56721 194.198 2.21567 193.83 2.21567H172.784C172.533 2.21567 172.315 2.38307 172.248 2.62301Z" fill="#F3EFDA" /> <path d="M225.98 73.0464C201.52 73.0464 190.07 58.9234 190.07 37.8366C190.07 13.9319 204.917 1.10352 226.739 1.10352C232.826 1.10352 237.725 1.51643 244.376 2.74961C244.633 2.79425 244.822 3.01187 244.834 3.26855L245.888 23.4067C245.899 23.602 245.71 23.7471 245.525 23.6857C241.547 22.4023 236.554 21.1692 228.603 21.1692C220.652 21.1692 211.451 26.007 211.451 37.0554C211.451 48.8738 218.721 52.8021 226.421 52.8021C229.133 52.8021 230.544 52.4729 230.544 52.4729C230.684 52.4562 230.784 52.339 230.784 52.1939V46.0392C230.784 45.883 230.667 45.7602 230.511 45.7602H221.031C220.724 45.7602 220.473 45.5091 220.473 45.2022V28.903C220.473 28.5961 220.724 28.345 221.031 28.345H246.005C246.301 28.345 246.541 28.5738 246.563 28.8696L249.208 70.4238C249.225 70.7139 249.024 70.9706 248.734 71.0097C241.854 72.0308 234.461 73.0464 225.98 73.0408V73.0464Z" fill="#F3EFDA" /> <path d="M295.593 40.1208C295.565 40.0594 295.587 39.9869 295.643 39.9478C299.766 37.381 302.667 31.9015 302.651 23.0014C302.651 22.8563 302.651 22.7057 302.651 22.5606C302.651 22.5383 302.651 22.516 302.651 22.4936C302.651 22.4769 302.651 22.4602 302.651 22.4434C302.634 21.4892 302.573 20.5518 302.455 19.6367C300.77 5.9936 292.429 2.04297 278.642 2.04297H251.001C250.677 2.04297 250.42 2.31639 250.443 2.64003L255.102 71.5306C255.124 71.8207 255.364 72.0495 255.66 72.0495H276.337C276.661 72.0495 276.918 71.7761 276.895 71.4525L275.043 46.0077C275.032 45.8459 275.16 45.7064 275.322 45.7064H277.308C277.431 45.7064 277.537 45.7845 277.576 45.9017L285.778 71.6589C285.851 71.8877 286.068 72.0495 286.308 72.0495H309.218C309.625 72.0495 309.893 71.631 309.726 71.2627L295.593 40.1208ZM279.92 27.8448C278.999 28.8269 277.626 29.3291 275.846 29.3291H273.682C273.537 29.3291 273.414 29.2175 273.403 29.0669L272.633 17.639C272.622 17.4772 272.75 17.3433 272.912 17.3433H275.11C278.82 17.3433 280.857 18.7271 281.181 23.3027C281.32 25.278 280.89 26.807 279.92 27.8448Z" fill="#F3EFDA" /> <path d="M341.051 0.75293C318.973 0.75293 304.589 14.8592 304.589 36.5207C304.589 58.1822 318.979 72.294 341.051 72.294C363.124 72.294 377.72 58.0874 377.72 36.5207C377.72 14.954 363.236 0.75293 341.051 0.75293ZM341.152 49.2375C333.96 49.2375 329.066 44.0704 329.066 36.5151C329.066 28.9598 333.96 23.6979 341.152 23.6979C348.344 23.6979 353.343 28.8649 353.343 36.5151C353.343 44.1653 348.344 49.2375 341.152 49.2375Z" fill="#F3EFDA" /> <path d="M417.215 2.08175C416.942 2.08175 416.707 2.28263 416.663 2.55047L409.287 48.5296C408.729 52.0394 406.569 52.776 404.856 52.776C403.69 52.776 402.809 52.4356 402.24 51.7716C401.592 51.0127 401.386 49.8632 401.631 48.3566L408.902 2.72345C408.957 2.38307 408.695 2.07617 408.349 2.07617H387.794C387.521 2.07617 387.286 2.27705 387.242 2.54489L379.838 49.0374C377.394 64.3377 385.043 73.0816 401.537 73.0816C418.03 73.0816 428.369 64.3377 430.812 49.0374L438.244 2.72345C438.3 2.38307 438.038 2.07617 437.692 2.07617H417.221L417.215 2.08175Z" fill="#F3EFDA" /> <path d="M480.821 2.11133C480.514 2.11133 480.263 2.36243 480.263 2.66933L480.196 32.5948C480.196 32.7511 480.073 32.8738 479.917 32.8738H479.895C479.783 32.8738 479.683 32.8069 479.638 32.7064L465.985 2.44055C465.896 2.23967 465.695 2.11133 465.477 2.11133H444.788C444.515 2.11133 444.28 2.31221 444.236 2.58005L433.305 71.4093C433.25 71.7496 433.512 72.0565 433.858 72.0565L454.307 72.0454C454.586 72.0454 454.82 71.8445 454.859 71.5655L460.444 33.1138C460.461 32.9743 460.578 32.8682 460.723 32.8682H460.974C461.08 32.8682 461.181 32.9296 461.225 33.0245L480.084 71.7441C480.179 71.9338 480.374 72.0565 480.586 72.0565H501.354C501.66 72.0565 501.912 71.8054 501.912 71.4985V2.66933C501.912 2.36243 501.66 2.11133 501.354 2.11133H480.826H480.821Z" fill="#F3EFDA" /> <path d="M531.781 2.20166H508.291C507.984 2.20166 507.733 2.45276 507.733 2.75966V71.494C507.733 71.8009 507.984 72.052 508.291 72.052H531.781C553.229 72.052 566.001 59.1455 566.001 37.1213C566.001 15.1026 553.229 2.20166 531.781 2.20166ZM531.675 52.9573H530.258C530.102 52.9573 529.979 52.8345 529.979 52.6783V21.5754C529.979 21.4192 530.102 21.2964 530.258 21.2964H531.675C538.46 21.2964 542.059 27.306 542.059 37.1213C542.059 46.942 538.466 52.9517 531.675 52.9517V52.9573Z" fill="#F3EFDA" />
              </svg>
            </div>
          </div>

          <p className="text-3xl sm:text-lg md:text-4xl text-gray-300 ">
            formerly <span className="font-medium">Quizizz</span>
          </p>
        </div>

        {/* JOIN CODE INPUT */}
        <div className="flex items-center w-full max-w-md h-12 sm:h-14 md:h-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter a join code"
            className="flex-grow px-4 py-2 outline-none text-black text-sm sm:text-base md:text-lg"
          />
          <button className="h-full px-3 sm:px-5 md:px-6 bg-[#e72d91] text-white font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base md:text-lg">
            Join
          </button>
        </div>
      </main>


      {/* Footer */}
      <footer className="w-full bg-[#3b142b] border-t border-[#552144] py-4 text-lg text-gray-300 mt-auto">
        <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left - Quick Links */}
          <div className="flex gap-8 relative">
      
      {/* Quick Links with dropdown */}
      <div className="relative">
        <div className="inline-block">
          <button 
            className="hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth >= 640) { // Only open on sm breakpoint (640px) and above
                toggleDropdown('quickLinks');
              }
            }}
          >
            Quick links
          </button>
          
          {openDropdown === 'quickLinks' && (
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#f2efda] text-[#3b142b] p-4 sm:p-5 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 w-[90vw] sm:w-[600px] max-h-[80vh] overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-3 sm:pr-6 sm:border-r sm:border-gray-600">
                <a href="#" className="hover:underline">Wayground For School</a>
                <a href="#" className="hover:underline">Wayground for Business</a>
                <a href="#" className="hover:underline">VoyageMath</a>
                <a href="#" className="hover:underline">Join a Quiz</a>
                <a href="#" className="hover:underline">Plans</a>
                <a href="#" className="hover:underline">About Us</a>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 sm:pl-6 mt-4 sm:mt-0">
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">Reseller Program</a>
                <a href="#" className="hover:underline">Accessibility & Inclusion</a>
                <a href="#" className="hover:underline">Sitemap</a>
              </div>
            </div>
          )}
        </div>
      </div>


      {/* Worksheets */}
      <div className="relative">
        <div className="inline-block">
          <button 
            className="hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth >= 640) { // Only open on sm breakpoint (640px) and above
                toggleDropdown('worksheets');
              }
            }}
          >
            Worksheets
          </button>
          {openDropdown === 'worksheets' && (
            <div 
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#f2efda] text-[#3b142b] p-4 sm:p-5 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 w-[90vw] sm:w-[600px] max-h-[80vh] overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3 sm:pr-6 sm:border-r sm:border-gray-600">
                <h1 className='font-bold text-lg sm:text-xl italic underline mb-2'>Worksheet by Class</h1>
                <a href="#" className="hover:underline">Kindergarten</a>
                <a href="#" className="hover:underline">Class 1</a>
                <a href="#" className="hover:underline">Class 2</a>
                <a href="#" className="hover:underline">Class 3</a>
                <a href="#" className="hover:underline">Class 4</a>
                <a href="#" className="hover:underline">Class 5</a>
                <a href="#" className="hover:underline">Class 6</a>
                <a href="#" className="hover:underline">Class 7</a>
                <a href="#" className="hover:underline">Class 8</a>
                <a href="#" className="hover:underline">Class 9</a>
                <a href="#" className="hover:underline">Class 10</a>
                <a href="#" className="hover:underline">Class 11</a>
                <a href="#" className="hover:underline">Class 12</a>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 sm:pl-6 mt-4 sm:mt-0">
                <h1 className='font-bold text-lg sm:text-xl italic underline mb-2'>Worksheet by Subject</h1>
                <a href="#" className="hover:underline">Math</a>
                <a href="#" className="hover:underline">English</a>
                <a href="#" className="hover:underline">Science</a>
                <a href="#" className="hover:underline">Social Studies</a>
                <a href="#" className="hover:underline">Social Emotional</a>
                <a href="#" className="hover:underline">Fine Arts</a>
                <a href="#" className="hover:underline">Foreign Language</a>
                <a href="#" className="hover:underline">Reading and Writing</a>
                <a href="#" className="hover:underline">Typing</a>
                <a href="#" className="hover:underline">All Worksheets</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Teacher Resources */}
      <div className="relative">
        <div className="inline-block">
          <button 
            className="hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth >= 640) { // Only open on sm breakpoint (640px) and above
                toggleDropdown('teacherResources');
              }
            }}
          >
            Teacher resources
          </button>
          {openDropdown === 'teacherResources' && (
            <div 
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#f2efda] text-[#3b142b] p-4 sm:p-5 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 w-[90vw] sm:w-[600px] max-h-[80vh] overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3 sm:pr-6 sm:border-r sm:border-gray-600">
                <a href="#" className="hover:underline">Request a feature</a>
                <a href="#" className="hover:underline">Get Certified</a>
                <a href="#" className="hover:underline">Blog</a>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 sm:pl-6 mt-4 sm:mt-0">
                <a href="#" className="hover:underline">Help Center</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Library */}
      <div className="relative">
        <div className="inline-block">
          <button 
            className="hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth >= 640) { // Only open on sm breakpoint (640px) and above
                toggleDropdown('library');
              }
            }}
          >
            Library
          </button>
          {openDropdown === 'library' && (
            <div 
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#f2efda] text-[#3b142b] p-4 sm:p-5 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 w-[90vw] sm:w-[600px] max-h-[80vh] overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3 sm:pr-6 sm:border-r sm:border-gray-600">
                <h1 className='font-bold text-xl italic underline mb-2'>Browse by Class</h1>
                <a href="#" className="hover:underline">Kindergarten</a>
                <a href="#" className="hover:underline">Class 1</a>
                <a href="#" className="hover:underline">Class 2</a>
                <a href="#" className="hover:underline">Class 3</a>
                <a href="#" className="hover:underline">Class 4</a>
                <a href="#" className="hover:underline">Class 5</a>
                <a href="#" className="hover:underline">Class 6</a>
                <a href="#" className="hover:underline">Class 7</a>
                <a href="#" className="hover:underline">Class 8</a>
                <a href="#" className="hover:underline">Class 9</a>
                <a href="#" className="hover:underline">Class 10</a>
                <a href="#" className="hover:underline">Class 11</a>
                <a href="#" className="hover:underline">Class 12</a>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 sm:pl-6 mt-4 sm:mt-0">
                <h1 className='font-bold text-xl italic underline mb-2'>Browse by Subject</h1>
                <a href="#" className="hover:underline">Math</a>
                <a href="#" className="hover:underline">Science</a>
                <a href="#" className="hover:underline">Social Studies</a>
                <a href="#" className="hover:underline">Foreign Language</a>
                <a href="#" className="hover:underline">Reading and Writing</a>
                <a href="#" className="hover:underline">All Resources</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
          {/* Center - Accessibility + Copyright */}
          <div className="flex items-center gap-4 text-gray-400 text-center md:text-left">
            <span className="flex items-center gap-2">                    
                <FaUniversalAccess className="w-8 h-8 text-[#f2efda]"/>
              Accessibility & Inclusion
            </span>
            <span>© 2025 Quizizz Inc. (DBA Wayground)</span>
          </div>

          {/* Right - Social + Store Buttons */}
          <div className="flex items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="w-40 h-auto"
                  />
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="w-40 h-auto"
                  />
          </div>
        </div>
      </footer>

    </div>
  );
}

export default JoinGame;