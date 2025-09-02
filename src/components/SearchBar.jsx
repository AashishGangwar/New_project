import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex items-center w-full 
        h-[50px] sm:h-[60px] 
        max-w-full sm:max-w-4xl 
        rounded-[8px] sm:rounded-[10px] 
        overflow-hidden border border-gray-600 
        bg-white backdrop-blur-sm relative
      "
    >
      {/* Search Icon */}
      <div className="pl-3 sm:pl-4 flex items-center text-gray-400">
        <Search
          size={20}
          className="text-[#3b142b] sm:w-6 sm:h-6 w-5 h-5"
        />
      </div>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find anything you need to teach"
        className="
          flex-1 px-2 sm:px-3 py-2 sm:py-3 
          text-base sm:text-lg 
          focus:outline-none 
          placeholder:text-[#3b142b] 
          bg-transparent placeholder:text-base sm:placeholder:text-lg
        "
      />

      {/* Custom SVG Button */}
      <button
        type="submit"
        className="
          absolute right-1 sm:right-[6px] 
          top-1/2 -translate-y-1/2 
          h-[42px] w-[42px] sm:h-[52px] sm:w-[52px] 
          flex-shrink-0 focus:outline-none group
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 50"
          className="
            h-full w-full 
            transition-colors duration-200 
            group-hover:fill-[#ff4cc6]
          "
          fill="#ff1ead"
        >
          <path d="M6.80009 0.648197L45.4022 0.648214C49.0461 0.648215 52 3.60214 52 7.24599L52 42.874C52 46.5178 49.0461 49.4718 45.4022 49.4718L16.2333 49.4718C13.2398 49.4718 10.6215 47.4565 9.85529 44.5627L0.422082 8.93468C-0.68621 4.74881 2.46998 0.648195 6.80009 0.648197Z" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          <ArrowRight
            size={20}
            strokeWidth={3}
            className="ml-0.5 sm:ml-1.5 sm:w-6 sm:h-6 w-5 h-5"
          />
        </span>
      </button>
    </form>
  );
}
