import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ResponsiveSidebar() {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollInterval = useRef(null);
  const containerRef = useRef(null);

  const imageSize = 230; // card height/width in px

  const cards = [
    { id: 1, img: "/images/sidebar/Math.avif", link: "/math", title: "Math" },
    { id: 2, img: "/images/sidebar/Science.avif", link: "/science", title: "Science" },
    { id: 3, img: "/images/sidebar/SocialStudies.avif", link: "/social", title: "Social Studies" },
    { id: 4, img: "/images/sidebar/Reading.avif", link: "/reading", title: "Reading" },
    { id: 5, img: "/images/sidebar/ForeignLanguage.avif", link: "/foreign", title: "Foreign Language" },
    { id: 6, img: "/images/sidebar/ELA.avif", link: "/ela", title: "ELA" },
    { id: 7, img: "/images/sidebar/TestPrep.avif", link: "/testprep", title: "Test Prep" },
    { id: 8, img: "/images/sidebar/Elementary.avif", link: "/elementary", title: "Elementary" },
    { id: 9, img: "/images/sidebar/Career.avif", link: "/career", title: "Career" },
    { id: 10, img: "/images/sidebar/Writing.avif", link: "/writing", title: "Writing" }
  ];

  // Auto-scroll for vertical version
  useEffect(() => {
    scrollInterval.current = setInterval(() => {
      if (!isHovered) {
        setStartIndex((prev) => (prev + 1) % cards.length);
      }
    }, 5000);
    return () => clearInterval(scrollInterval.current);
  }, [isHovered]);

  const visibleCards = Array.from({ length: 3 }, (_, i) => cards[(startIndex + i) % cards.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
      setStartIndex((prev) => (prev + 1) % cards.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const scrollToCard = (index) => {
    setCurrentCardIndex(index);
    setStartIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Mobile Carousel */}
      <div className="md:hidden flex flex-col w-full bg-[#3b142b] py-4">
        <div 
          className="relative w-full h-64 overflow-hidden touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          <div 
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="w-full flex-shrink-0 h-full px-2"
                onClick={() => navigate(card.link)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={card.img}
                    className="h-full w-auto max-w-full object-contain"
                    alt={`${card.title}`}
                    style={{ maxHeight: '100%' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x400';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium text-center px-2">{card.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-colors ${currentCardIndex === index ? 'bg-white w-4' : 'bg-gray-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Sidebar */}
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <div className="flex justify-center w-full p-1 bg-[#3b142b]">
          <button 
            onClick={() => scrollToCard((currentCardIndex - 1 + cards.length) % cards.length)}
            className="w-[3rem] h-[3rem] flex items-center justify-center bg-[#4a1a37] hover:bg-[#5d2246] text-white rounded-full transition-all duration-200 shadow-lg hover:scale-110"
            aria-label="Scroll up"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>

        <div
          className="
            flex flex-col
            items-center
            gap-4
            overflow-y-auto
            w-full md:w-[270px] lg:w-[310px]
            px-3 py-2
            hide-scrollbar
            bg-[#3b142b]
          "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="
                relative group cursor-pointer transition-all duration-300 ease-in-out
                transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden
                flex-shrink-0 w-40 h-40 md:w-[240px] md:h-[220px]"
              onClick={() => navigate(card.link)}
            >
              <img
                src={card.img}
                className="w-full h-full object-cover"
                alt={`${card.title}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/400`;
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full p-1 bg-[#3b142b]">
          <button 
            onClick={() => scrollToCard((currentCardIndex + 1) % cards.length)}
            className="w-[3rem] h-[3rem] flex items-center justify-center bg-[#4a1a37] hover:bg-[#5d2246] text-white rounded-full transition-all duration-200 shadow-lg hover:scale-110"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

    </div>
  );
}
