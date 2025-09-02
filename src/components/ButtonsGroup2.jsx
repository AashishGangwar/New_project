import React from "react";

const ButtonsGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto px-4 sm:px-0">
      {/* Teachers Button */}
      <button 
        className="relative w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold 
        px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg 
        shadow-[4px_4px_0px_0px_rgba(236,72,153,0.6)] sm:shadow-[6px_6px_0px_0px_rgba(236,72,153,0.6)]
        transition-all duration-200 ease-in-out 
        hover:-translate-y-1 hover:translate-x-1 sm:hover:-translate-y-2 sm:hover:translate-x-2 
        hover:shadow-none active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(236,72,153,0.6)]"
        aria-label="Teachers sign up">
        <div className="flex flex-col items-center justify-center leading-tight text-center w-full">
          <span className="text-xs sm:text-sm font-semibold">TEACHERS</span>
          <span className="text-base sm:text-lg md:text-xl font-bold">Sign up free</span>
        </div>
      </button>

      {/* Admins Button */}
      <button 
        className="relative w-full sm:w-auto bg-[#3b142b] hover:bg-[#2c0f21] text-[#f2efda] font-bold 
        px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg 
        shadow-[4px_4px_0px_0px_rgba(43,14,37,0.6)] sm:shadow-[6px_6px_0px_0px_rgba(43,14,37,0.6)]
        transition-all duration-200 ease-in-out 
        hover:-translate-y-1 hover:translate-x-1 sm:hover:-translate-y-2 sm:hover:translate-x-2 
        hover:shadow-none active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(43,14,37,0.6)]"
        aria-label="Administrators get a quote">
        <div className="flex flex-col items-center justify-center leading-tight text-center w-full">
          <span className="text-xs sm:text-sm font-semibold">ADMINS</span>
          <span className="text-base sm:text-lg md:text-xl font-bold">Get a quote</span>
        </div>
      </button>
    </div>
  );
};

export default ButtonsGroup;
