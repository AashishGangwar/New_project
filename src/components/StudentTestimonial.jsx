import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/images/Students/Charlotte.avif",
  "/images/Students/London.avif",
  "/images/Students/Rvani.avif",
];

const StudentTestimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        loop={true} // ✅ Infinite looping enabled
        autoplay={{
          delay: 3000, // auto scroll every 3s
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5, // show center + peek left/right
          },
          1024: {
            slidesPerView: 1.5,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentTestimonial;
