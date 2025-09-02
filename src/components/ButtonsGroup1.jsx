import React from "react";

const ButtonsGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-4xl mx-auto px-4">
      {/* Teachers Button */}
      <button className="relative w-full sm:w-auto bg-pink-500 text-white font-bold px-8 py-5 rounded-lg shadow-[6px_6px_0px_0px_rgba(236,72,153,0.6)] 
        transition-all duration-200 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-none">
        <div className="flex flex-col items-center justify-center leading-tight text-center w-full">
          <span className="text-sm font-semibold">TEACHERS</span>
          <span className="text-xl font-bold">Sign up free</span>
        </div>
      </button>

      {/* Admins Button */}
      <button className="relative w-full sm:w-auto bg-[#f2efda] text-[#3b142b] font-bold px-8 py-5 rounded-lg shadow-[6px_6px_0px_0px_rgba(242,239,218,0.6)] 
        transition-all duration-200 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-none">
        <div className="flex flex-col items-center justify-center leading-tight text-center w-full">
          <span className="text-sm font-semibold">ADMINISTRATORS</span>
          <span className="text-xl font-bold">Get in touch</span>
        </div>
      </button>
    </div>
  );
};

export default ButtonsGroup;
