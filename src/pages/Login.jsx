import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center px-3 py-2 sm:px-6 sm:py-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/LoginSignup/logo-logged-out.png" alt="Wayground Logo" className="h-7 sm:h-10" />
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-1.5 sm:space-x-4">
          <Link
            to="/join-game"
            className="px-2.5 py-1 text-black text-bold rounded border border-gray-300 text-xs hover:bg-gray-100 sm:px-4 sm:py-1.5 sm:text-sm"
          >
            Enter join code
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1 rounded bg-pink-600 text-white font-medium text-xs hover:bg-pink-700 transition sm:px-5 sm:py-1.5 sm:text-sm"
            onClick={() => window.scrollTo(0, 0)}
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-1 justify-center items-start pt-16 px-4 relative">
        {/* Left Image (desktop only) */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/6">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img 
              src="/images/LoginSignup/auth_teacher_left.webp" 
              alt="" 
              className="h-full w-auto object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>

        {/* Right Image (desktop only) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/6">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img 
              src="/images/LoginSignup/signup_teacher_right.webp" 
              alt="" 
              className="h-full w-auto object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        </div>

        {/* Login Box */}
        <div className="w-full max-w-lg bg-white p-8 rounded-lg z-10 -mt-12 sm:mt-0">
          <h2 className="text-4xl text-black font-bold text-center mb-2">
            Login to your Wayground account
          </h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            New to Wayground?{" "}
            <Link to="/signup" className="text-blue-600 text-md font-medium">
              Create a free account
            </Link>
          </p>

          {/* Login Options */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-between px-4 hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/LoginSignup/google-logo-1.png"
                  alt="Google"
                  className="h-5 w-5"
                />
                <span className="font-bold text-black text-lg">Continue with Google</span>
              </div>
              <span className="text-gray-600 font-bold text-xl">&rarr;</span>
            </button>

            <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-between px-4 hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/LoginSignup/phone-icon.png"
                  alt="Phone"
                  className="h-5 w-5"
                />
                <span className="font-bold text-black text-lg">Continue with Phone</span>
              </div>
              <span className="text-gray-600 font-bold text-xl">&rarr;</span>
            </button>

            <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-between px-4 hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/LoginSignup/envelope-regular.png"
                  alt="Email"
                  className="h-5 w-5"
                />
                <span className="font-bold text-black text-lg">Continue with Email</span>
              </div>
              <span className="text-gray-600 font-bold text-xl">&rarr;</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Providers */}
          <div className="flex justify-center space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center mb-1">
                <img
                  src="/images/LoginSignup/facebook_blue.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-xs text-gray-600">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center mb-1">
                <img
                  src="/images/LoginSignup/ms-logo.png"
                  alt="Microsoft"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-xs text-gray-600">Microsoft</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center mb-1">
                <img
                  src="/images/LoginSignup/Apple.png"
                  alt="Apple"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-xs text-gray-600">Apple</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center mb-1">
                <img
                  src="/images/LoginSignup/grey_key_icon.png"
                  alt="Others"
                  className="h-6 w-6"
                />
              </div>
              <span className="text-xs text-gray-600">Others</span>
            </div>
          </div>

          {/* Bottom Badges - Mobile Only */}
          <div className="lg:hidden mt-10 mb-6">
            <div className="flex flex-wrap justify-center gap-8">
              <img src="/images/trustedbrands/6848501bf7aaf381374a130a_Logo 1.avif" alt="Badge 1" className="h-14" />
              <img src="/images/trustedbrands/6848501bde45cfb387978c5f_Logo 2.avif" alt="Badge 2" className="h-14" />
              <img src="/images/trustedbrands/6848501beaec64fb4625adbf_Logo 4.avif" alt="Badge 3" className="h-14" />
              <img src="/images/trustedbrands/6848501b3bb50c97ade034fa_Logo 5.avif" alt="Badge 4" className="h-14" />
              <img src="/images/trustedbrands/6848501b82aef8744f2574c1_Logo 6.avif" alt="Badge 5" className="h-14" />
            </div>
            <p className="text-center text-base text-gray-500 mt-6">
              Trusted by educators in{" "}
              <span className="text-pink-600 font-semibold">90% of US schools</span>{" "}
              and over{" "}
              <span className="text-pink-600 font-semibold">150+ countries</span>.
            </p>
          </div>
        </div>
      </main>
      
      {/* Trusted Brands Section - Desktop (Fixed at bottom) */}
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 bg-white py-6 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-10 mb-3">
              <img src="/images/trustedbrands/6848501bf7aaf381374a130a_Logo 1.avif" alt="Badge 1" className="h-22" />
              <img src="/images/trustedbrands/6848501bde45cfb387978c5f_Logo 2.avif" alt="Badge 2" className="h-22" />
              <img src="/images/trustedbrands/6848501beaec64fb4625adbf_Logo 4.avif" alt="Badge 3" className="h-22" />
              <img src="/images/trustedbrands/6848501b3bb50c97ade034fa_Logo 5.avif" alt="Badge 4" className="h-22" />
              <img src="/images/trustedbrands/6848501b82aef8744f2574c1_Logo 6.avif" alt="Badge 5" className="h-22" />
            </div>
            <p className="text-xl text-gray-600">
              Trusted by educators in{' '}
              <span className="text-pink-600 font-semibold">90% of US schools</span>{' '}
              and over{' '}
              <span className="text-pink-600 font-semibold">150+ countries</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
