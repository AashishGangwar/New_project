import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedShape2 from '../components/TrustedShape2';

// Testimonials data with local images
const testimonials = [
  {
    id: 1,
    name: 'Gary Lambert',
    role: 'Beekmantown CSD, New York',
    content: "It's a Swiss Army knife. Every teacher finds something new to do with it and we use it as admins too. The first time I used the AI I said there's no way it can be that easy and I emailed my staff. ",
    image: '/images/Educators/GaryLambert.avif',
    tintColor: 'bg-[#c6b4e3]'
  },
  {
    id: 2,
    name: 'Jessica Mitchell',
    role: 'Middle High School Teacher',
    content: "I can use Wayground for almost every topic I teach. I have especially enjoyed the lessons.",
    image: '/images/Educators/JessicaMitchell.avif',
    tintColor: 'bg-[#eceb75]'
  },
  {
    id: 3,
    name: 'James Newman',
    role: 'Sr. Manager of Academic Instructional Technology',
    content: "Wayground Motivates [students], increases confidence, and can help to establish a culture of learning and growing from mistakes.",
    image: '/images/Educators/JamesNewman.avif',
    tintColor: 'bg-[#ffc48a]'
  },
  {
    id: 4,
    name: 'Shallamar Goodwin-Richards',
    role: 'High School Math Teacher',
    content: " I have students with IEPs, I am able to find lessons catering to their abilities and accommodation while being able to assign the other students with more rigorous assessments.",
    image: '/images/Educators/GoodwinRichards.avif',
    tintColor: 'bg-[#a3e5e0]'
  },
  {
    id: 5,
    name: 'Tifarah Dial',
    role: 'Middle/High School Math Teacher',
    content: "This Extremely quiet, shy kid was really excited. He was high fiving students, making excited exclamations, and really into it. This Wayground exercise completely opened him up and brought out his personality.",
    image: '/images/Educators/TifarahDial.avif',
    tintColor: 'bg-[#eceb75]'
  }
];

// Move addGlobalStyles outside the component
const addGlobalStyles = () => {
  if (typeof document === 'undefined') return () => {}; // Skip during SSR
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
  
  return () => {
    document.head.removeChild(style);
  };
};

const GetQuote = () => {
  // Add global styles on mount
  useEffect(() => {
    const cleanup = addGlobalStyles();
    return cleanup;
  }, []);

  // Effect to show/hide overlay on scroll
  useEffect(() => {
    const overlay = document.getElementById('fullscreen-overlay');
    if (overlay) {
      // Show overlay on initial load
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      
      // Hide overlay after 3 seconds
      const timer = setTimeout(() => {
        overlay.classList.add('opacity-0');
        overlay.classList.remove('opacity-100');
        overlay.style.pointerEvents = 'none';
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <ParallaxProvider>
      <div className="min-h-screen text-white">
        <Navbar />
        <div className="w-full bg-red-500">
          <div className="w-full">
            {/* Main Content */}
            <main className="w-full">
              <div className="w-full max-w-full">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 py-12  mt-24 sm:py-16 md:py-20 lg:py-24 bg-[#3b142b] w-full overflow-hidden">
              <div className="w-full max-w-8xl mx-auto px-2 sm:px-4">
                <div className="flex flex-col lg:flex-row items-start">
                  {/* Left Column - Text Content */}
                  <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-10 mb-8 lg:mb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                      Unlock Wayground for your school or district
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8">
                      Learn more about getting all of your teachers on the same instructional platform.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl flex items-start sm:items-center mb-2 sm:mb-1.5 mt-4">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffc48a] mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="block">Unlimited library, AI, and Instructional Suite access to adapt or create any resource in any format with every question type we offer</span>
                    </p>
                    <p className="text-base sm:text-lg md:text-xl flex items-start sm:items-center mb-2 sm:mb-1.5">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffc48a] mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="block">Accommodations and differentiation support</span>
                    </p>
                    <p className="text-base sm:text-lg md:text-xl flex items-start sm:items-center">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffc48a] mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="block">LMS & rostering integrations for secure student access, grade sync, YouTube for Education use, and more</span>
                    </p>
                  </div>
                  
                  {/* Right Column - Form */}
                  <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <form className="bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 w-full space-y-4 sm:space-y-6 shadow-2xl shadow-[#f2efda]/10 hover:shadow-[#f2efda]/20 transition-all duration-300 glass">
                      {/* First + Last Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-1.5 sm:mb-2 text-[#f2efda]/90 font-medium text-xs sm:text-sm uppercase tracking-wider">
                            First Name*
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 text-sm sm:text-base bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] placeholder-white/50 transition-all duration-200"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-1.5 sm:mb-2 text-[#f2efda]/90 font-medium text-xs sm:text-sm uppercase tracking-wider">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 text-sm sm:text-base bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] placeholder-white/50 transition-all duration-200"
                            required
                          />
                        </div>
                      </div>

                      {/* Work Email + Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-1.5 sm:mb-2 text-[#f2efda]/90 font-medium text-xs sm:text-sm uppercase tracking-wider">
                            Work Email*
                          </label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-3 py-2 text-sm sm:text-base bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] placeholder-white/50 transition-all duration-200"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-1.5 sm:mb-2 text-[#f2efda]/90 font-medium text-xs sm:text-sm uppercase tracking-wider">
                            Your cell phone number*
                          </label>
                          <div className="flex gap-2">
                            <select className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] appearance-none">
                              <option className="text-[#3b142b] bg-white/90">IN</option>
                              <option className="text-[#3b142b] bg-white/90">US</option>
                              <option className="text-[#3b142b] bg-white/90">UK</option>
                            </select>
                            <input
                              type="tel"
                              defaultValue="+91"
                              className="flex-1 px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] placeholder-white/50"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block mb-2 text-[#f2efda] font-medium">
                          Country*
                        </label>
                        <select className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] appearance-none">
                          <option className="text-[#3b142b] bg-white/90">United States</option>
                          <option className="text-[#3b142b] bg-white/90">India</option>
                          <option className="text-[#3b142b] bg-white/90">United Kingdom</option>
                          <option className="text-[#3b142b] bg-white/90">Australia</option>
                        </select>
                      </div>

                      {/* Role */}
                      <div>
                        <label className="block mb-2 text-[#f2efda] font-medium">
                          Which of the following best describe your role?*
                        </label>
                        <select className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2efda] text-[#f2efda] appearance-none">
                          <option className="text-[#3b142b] bg-white/90">-- Select Role --</option>
                          <option className="text-[#3b142b] bg-white/90">Teacher</option>
                          <option className="text-[#3b142b] bg-white/90">School Administrator</option>
                          <option className="text-[#3b142b] bg-white/90">District Administrator</option>
                          <option className="text-[#3b142b] bg-white/90">IT Administrator</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#ff1ead] to-[#ff6b9e] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#ff1ead]/30 hover:scale-105 transition-all duration-300 w-full max-w-xs backdrop-blur-sm border border-white/20"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>


<div className='relative overflow-hidden bg-[#3b142b]'>
  <TrustedShape2 className="bg-transparent"/>
  <p className="text-center text-3xl font-bold text-[#f3efda] mt-2 mb-10">
          TRUSTED BY TEACHERS IN <span className="text-[#ff7925]">90% OF U.S. SCHOOLS </span> AND <span className="text-[#ff7925]">150+ COUNTRIES</span>
        </p>
  </div>
            
            
           
              </div>
            </main>
          </div>

          
        

          <section className="w-full bg-[#3b142b] py-10 relative overflow-hidden z-40">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

          <div className="relative z-10 max-w-7xl mt-[50px] mx-auto px-6 h-full flex flex-col justify-center">
            <div className="relative">
              {/* Navigation Buttons */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-white transition-all duration-300 shadow-lg -ml-14" id="testimonial-prev">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                  prevEl: '#testimonial-prev',
                  nextEl: '#testimonial-next',
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-[#f1efda] backdrop-blur-lg rounded-2xl  overflow-hidden h-[400px] flex flex-col">
                      <div className="flex-1 p-6 pl-0 pb-0 pt-0 overflow-y-auto">
                        <div className="flex h-full gap-6">
                          {/* Left side - Image (1/3 width) with overlay */}
                          <div className="w-1/3 flex-shrink-0 relative overflow-hidden rounded-lg">
                            <div className="h-[calc(100%-80px)] w-full h-full">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=random';
                                }}
                              />
                              {/* Color overlay */}
                              <div className={`absolute inset-0 ${testimonial.tintColor} mix-blend-multiply opacity-70`}></div>
                            </div>
                          </div>
                          
                          {/* Right side - Content (2/3 width) */}
                          <div className="w-2/3 flex flex-col pb-6 pt-6">
                            <p className="text-[#3b142b] text-lg mb-2 italic flex-1">"{testimonial.content}"</p>
                            <div className="mt-3 pt-4 border-t border-white/10">
                              <h4 className="text-2xl text-[#3b142b] font-bold">{testimonial.name}</h4>
                              <p className="text-[#3b142b] text-base">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-white transition-all duration-300 shadow-lg -mr-14" id="testimonial-next">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <style jsx global>{`
              .testimonial-swiper {
                padding: 20px 10px;
              }
              .testimonial-swiper .swiper-slide {
                height: auto;
              }
            `}</style>   
          </div>
          </section>

          
            {/* Student Testimonials Section */}
          <section className="bg-white w-full bg-[#3b142b]relative overflow-hidden z-40">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-6 sm:mb-8 md:mb-10 text-[#3b142b] mt-8 sm:mt-12 md:mt-16 px-4">
                Your teachers are already using Wayground–learn <span className="block sm:inline"><span className="italic font-bold">why</span></span>
              </h2>

              <div className="flex justify-center ">
      {/* Teachers Button */}
      <button className="relative bg-pink-500 text-white font-bold px-6 py-4 sm:px-8 sm:py-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(236,72,153,0.6)] sm:shadow-[6px_6px_0px_0px_rgba(236,72,153,0.6)] 
        transition-all duration-200 ease-in-out hover:-translate-y-1 sm:hover:-translate-y-2 hover:translate-x-1 sm:hover:translate-x-2 hover:shadow-none w-full max-w-xs mx-auto sm:w-auto">
        <div className="flex flex-col leading-tight text-center sm:text-left">
          <span className="text-lg sm:text-xl font-bold">Get in Touch</span>
        </div>
      </button>
              </div>

              <div className="px-4 sm:px-6 lg:px-8">
                <Footer />
              </div>
            </section>
            
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default GetQuote;
