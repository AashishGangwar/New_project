import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../components/Footer";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Gary Lambert",
    role: "Beekmantown CSD, New York",
    content:
      "It's a Swiss Army knife. Every teacher finds something new to do with it and we use it as admins too. The first time I used the AI I said there's no way it can be that easy and I emailed my staff.",
    image: "/images/Educators/GaryLambert.avif",
    tintColor: "from-[#c6b4e3] to-[#9b7fc9]",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica Mitchell",
    role: "Middle High School Teacher",
    content:
      "I can use Wayground for almost every topic I teach. I have especially enjoyed the lessons.",
    image: "/images/Educators/JessicaMitchell.avif",
    tintColor: "from-[#eceb75] to-[#d1d04a]",
    rating: 5,
  },
  {
    id: 3,
    name: "James Newman",
    role: "Sr. Manager of Academic Instructional Technology",
    content:
      "Wayground Motivates [students], increases confidence, and can help to establish a culture of learning and growing from mistakes.",
    image: "/images/Educators/JamesNewman.avif",
    tintColor: "from-[#ffc48a] to-[#ffa64d]",
    rating: 4,
  },
  {
    id: 4,
    name: "Shallamar Goodwin-Richards",
    role: "High School Math Teacher",
    content:
      "I have students with IEPs, I am able to find lessons catering to their abilities and accommodation while being able to assign the other students with more rigorous assessments.",
    image: "/images/Educators/GoodwinRichards.avif",
    tintColor: "from-[#a3e5e0] to-[#6cc9c1]",
    rating: 5,
  },
  {
    id: 5,
    name: "Tifarah Dial",
    role: "Middle/High School Math Teacher",
    content:
      "This Extremely quiet, shy kid was really excited. He was high fiving students, making excited exclamations, and really into it. This Wayground exercise completely opened him up and brought out his personality.",
    image: "/images/Educators/TifarahDial.avif",
    tintColor: "from-[#f9d5d5] to-[#f5b5b5]",
    rating: 5,
  },
];

const SchoolDistrictTestimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      {/* ================== Testimonials Section 1 ================== */}
      <section className="relative py-16 md:py-24 bg-[#3b142b] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Educators Are Saying
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of educators transforming their classrooms with our
              platform
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-white/20">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br ${testimonial.tintColor}`}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testimonial.name
                            )}&background=random`;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-white/20 text-2xl mb-2" />
                    <p className="text-gray-200 flex-grow">
                      "{testimonial.content}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ================== Features Grid Section ================== */}
      <section className="w-full bg-[#3b142b] py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="w-full">
              <div className="bg-[#3b142b] rounded-2xl overflow-hidden shadow-2xl h-full border border-[#f3efda]/10 flex flex-col">
                <div className="h-64 md:h-72 w-full overflow-hidden">
                  <img
                    src="/images/GridColumn/Privacy.avif"
                    alt="Student Data Protection"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col p-6 md:p-8 flex-1">
                  <h2 className="text-4xl font-bold text-[#f3efda] mb-4">
                    Get verified student data protection
                  </h2>
                  <p className="text-[#f3efda] text-lg mb-8 flex-1">
                    We're committed to responsible technology that puts educator
                    and student privacy first. With enterprise-grade security,
                    comprehensive data protection, and signed agreements that
                    ensure your information remains yours.
                  </p>
                  <button className="bg-[#f3efda] hover:bg-[#7a3fe6] text-[#3b142b] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full">
              <div className="bg-[#f1efda] rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col border border-[#f3efda]/10">
                <div className="h-64 md:h-72 w-full overflow-hidden">
                  <img
                    src="/images/GridColumn/Multiple.avif"
                    alt="School Ecosystem Integration"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col p-6 md:p-8 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3b142b] mb-4">
                    No more password juggling or missing assignments
                  </h3>
                  <p className="text-[#3b142b] text-lg md:text-xl mb-6 flex-1">
                    Wayground connects seamlessly to your school's existing
                    ecosystems.
                  </p>
                  <button className="bg-[#3b142b] hover:bg-[#2a0e20] text-[#f3efda] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                    Explore Integrations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </section>

      {/* ================== CTA Section ================== */}
      <section className="relative bg-[#3b142b] py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to transform your district's learning experience?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Join thousands of schools already using Wayground to enhance their
              curriculum and engage students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff1ead] hover:bg-[#ff1ead]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
                Get Started for Free
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24">
          <Footer />
        </div>
      </section>

      {/* ================== Testimonials Section 2 ================== */}
      <section className="relative py-16 md:py-24 bg-[#3b142b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What Educators Are Saying
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.5 },
              1280: { slidesPerView: 1.5 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (swiper.autoplay) swiper.autoplay.start();
            }}
            className="testimonial-swiper py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#f2efda] rounded-2xl overflow-hidden h-[400px] w-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl">
                  <div className="flex-1 p-6 pl-0 pb-0 pt-0 overflow-y-auto">
                    <div className="flex h-full gap-6">
                      {/* Left side - Image */}
                      <div className="w-1/3 flex-shrink-0 relative overflow-hidden rounded-lg">
                        <div className="w-full h-full">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://ui-avatars.com/api/?name=" +
                                encodeURIComponent(testimonial.name) +
                                "&background=random";
                            }}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${testimonial.tintColor} mix-blend-multiply opacity-80 transition-opacity duration-500`}
                          ></div>
                        </div>
                      </div>

                      {/* Right side - Content */}
                      <div className="w-2/3 flex flex-col p-6 pr-8">
                        <p className="text-[#3b142b] text-lg mb-6 italic leading-relaxed flex-1">
                          "{testimonial.content}"
                        </p>
                        <div className="mt-auto pt-4 border-t border-white/20">
                          <h4 className="text-2xl text-[#3b142b] font-bold">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#3b142b] text-base opacity-80">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================== Styles ================== */}
      <style jsx global>{`
        .testimonial-swiper {
          padding: 20px 0;
          width: 100%;
          overflow: visible;
        }
        .testimonial-swiper .swiper-slide {
          height: auto;
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.7;
        }
        .testimonial-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.02);
        }
        .testimonial-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default SchoolDistrictTestimonial;
