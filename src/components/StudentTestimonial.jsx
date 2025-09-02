import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/Students/Charlotte.avif",
  "/images/Students/London.avif",
  "/images/Students/Rvani.avif",
];

const StudentTestimonial = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Force update on mount to fix initial render issues
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Force update after initial render
          setTimeout(() => swiper.update(), 100);
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Student testimonial ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentTestimonial;
