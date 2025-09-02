import { useEffect, useRef, useState, useCallback } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedShape2 from '../components/TrustedShape2';
import SchoolDistrictFeatures from '../components/SchoolDistrictFeatures';

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

const Home = () => {
  // State for autoplay control
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  // Custom autoplay implementation
  useEffect(() => {
    if (!swiperRef.current) return;

    const interval = setInterval(() => {
      if (!isPaused && swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);
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
            <main className="w-full min-h-[calc(100vh-4rem)]">
              <div className="w-full max-w-full">
            {/* Hero Section */}
            <section className="relative mt-20  px-4 sm:px-6 py-16 sm:py-24 bg-[#3b142b] w-full overflow-hidden">
              <div className="w-full max-w-8xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Left Column - Text Content */}
                  <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-center ">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6">
                      Make your <br className="hidden sm:block" />curriculum <span className="italic">GO</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8">
                      Bridge district priorities and classroom realities with the supplemental curriculum platform that helps students hit grade-level standards faster.
                    </p>
                    <button className="w-full sm:w-auto bg-[#ff1ead] hover:bg-[#ff1ead]/70 text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-300">
                      Get a Quote
                    </button>
                  </div>
                  
                  {/* Right Column - Image */}
                  <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="relative">
                      <img 
                        src="/images/GetQuote/68503709177c50271624a666_School & District.avif" 
                        alt="Students learning with Wayground"
                        className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>


<div className='bg-[#f3efda] py-12 sm:py-16 md:py-20 relative overflow-hidden px-4 sm:px-6'>
  <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#3b142b] max-w-4xl mx-auto">
    TRUSTED BY TEACHERS IN <span className="text-[#ff7925] whitespace-nowrap">90% OF U.S. SCHOOLS</span> AND <span className="text-[#ff7925] whitespace-nowrap">150+ COUNTRIES</span>
  </p>
  <div className="mt-8 sm:mt-12">
    <TrustedShape2 />
  </div>
</div>
            
            
       <SchoolDistrictFeatures />


              </div>
            </main>
          </div>

          
        

          <section className="w-full min-h-[calc(100vh-4rem)] bg-[#3b142b] py-20 relative overflow-hidden z-40">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full">
              {/* Left Column */}
              <div className="w-full md:w-1/2">
                <div className="bg-[#3b142b] rounded-2xl overflow-hidden shadow-2xl h-full border border-[#f3efda]/10 flex flex-col">
                  {/* Image */}
                  <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                    <img
                      src="/images/GridColumn/Privacy.avif"
                      alt="Student Data Protection"
                      className="w-70 h-auto mx-auto object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 sm:p-8 flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f3efda] mb-3 sm:mb-4">
                      Get verified student data protection
                    </h2>
                    <p className="text-[#f3efda] text-base sm:text-lg mb-6 sm:mb-8 flex-1">
                      We're committed to responsible technology that puts educator and student privacy first. With enterprise-grade security, comprehensive data protection, and signed agreements that ensure your information remains yours.
                    </p>
                    <button className="bg-[#f3efda] hover:bg-[#7a3fe6] text-[#3b142b] font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="bg-[#f1efda] rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">
                  {/* Image */}
                  <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                    <img
                      src="/images/GridColumn/Multiple.avif"
                      alt="School Ecosystem Integration"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 sm:p-8 flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#3b142b] mb-3 sm:mb-4">
                      No more password juggling or missing assignments
                    </h3>
                    <p className="text-[#3b142b] text-lg mb-6 flex-1">
                      Wayground connects seamlessly to your school's existing ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

          <div className="relative z-10 max-w-7xl mt-8 sm:mt-12 md:mt-16 mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#ffc48a]">
                Don't take it from us
              </h2>
            </div>
            <div className="relative">
              {/* Navigation Buttons - Hidden on mobile */}
              <button className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 items-center justify-center text-white transition-all duration-300 shadow-lg -ml-4 sm:-ml-6 hover:scale-110" id="testimonial-prev">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                centeredSlides={false}
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  prevEl: '#testimonial-prev',
                  nextEl: '#testimonial-next',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.1,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 1.2,
                    spaceBetween: 24
                  },
                  1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                  },
                  1280: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    centeredSlides: true
                  }
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  swiper.autoplay.start();
                }}
                className="testimonial-swiper py-4 sm:py-8"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-[#f2efda] rounded-2xl overflow-hidden h-auto min-h-[400px] sm:h-[400px] w-full flex flex-col transform transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] shadow-lg hover:shadow-2xl mx-auto">
                      <div className="flex-1 p-4 sm:p-6 flex flex-col sm:flex-row">
                        {/* Left side - Image */}
                        <div className="w-full sm:w-5/12 md:w-4/12 lg:w-1/3 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden rounded-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=random';
                            }}
                          />
                          <div className={`absolute inset-0 ${testimonial.tintColor} mix-blend-multiply opacity-80`}></div>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="w-full sm:w-7/12 md:w-8/12 lg:w-2/3 flex flex-col p-4 sm:p-6">
                          <p className="text-[#3b142b] text-base sm:text-lg mb-4 sm:mb-6 italic leading-relaxed flex-1">
                            "{testimonial.content}"
                          </p>
                          <div className="mt-4 sm:mt-auto pt-3 sm:pt-4 border-t border-[#3b142b]/20">
                            <h4 className="text-xl sm:text-2xl text-[#3b142b] font-bold">{testimonial.name}</h4>
                            <p className="text-[#3b142b] text-sm sm:text-base opacity-80">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 items-center justify-center text-white transition-all duration-300 shadow-lg -mr-4 sm:-mr-6 hover:scale-110" id="testimonial-next">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Mobile Pagination */}
              <div className="flex justify-center mt-6 sm:hidden space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => swiperRef.current?.slideTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${swiperRef.current?.activeIndex === index ? 'bg-[#ffc48a] w-4' : 'bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <style jsx global>{`
              .testimonial-swiper {
                padding: 10px 0;
                width: 100%;
                overflow: visible;
              }
              .testimonial-swiper .swiper-slide {
                height: auto;
                padding: 0 10px;
                box-sizing: border-box;
                width: 100%;
                transition: transform 0.3s ease, opacity 0.3s ease;
                opacity: 0.9;
              }
              .testimonial-swiper .swiper-slide-active {
                opacity: 1;
              }
              .testimonial-swiper .swiper-wrapper {
                align-items: stretch;
              }
              @media (max-width: 640px) {
                .testimonial-swiper .swiper-slide {
                  padding: 0 6px;
                }
              }
            `}</style>
          </div>
          </section>

          <section className="bg-[#3b142b] py-16 px-6 md:px-12">
  <div className="max-w-8xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-bold text-[#F4EEDC] mb-12">
      Explore more from Wayground
    </h2>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Card 1 */}
      <div className="flex flex-col">
        <img
          src="images/SchoolDistrict/CommonAssessmentsGraphic.avif"
          alt="Common Assessments"
          className="w-full object-cover rounded-2xl"
        />
        <div className="p-6 mt-6 text-left">
          <h3 className="text-3xl font-semibold mb-2 text-[#f1e8da]">
            Common Assessments
          </h3>
          <p className="text-[#f1e8da] text-xl mb-4">
            Assess student progress across schools and classrooms
          </p>
          <button className="px-6 py-3 rounded-md bg-[#f1e8da]/60 text-[#3b142b] text-lg font-medium hover:bg-[#f1e8da]/80 transition">
            Contact us
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col">
        <img
          src="images/SchoolDistrict/VoyageMathGraphic.avif"
          alt="Voyage Math"
          className="w-full object-cover rounded-2xl"
        />
        <div className="p-6 mt-6 text-left">
          <h3 className="text-3xl md:text-3xl font-semibold mb-2 text-[#f1e8da]">
            Voyage Math
          </h3>
          <p className="text-[#f1e8da] text-xl mb-4">
            Math practice that actually meets students where they are
          </p>
          <button className="px-6 py-3 rounded-md bg-[#f1e8da]/60 text-[#3b142b] text-lg font-medium hover:bg-[#f1e8da]/80 transition">
            Learn More
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


            {/* Student Testimonials Section */}
          <section className="bg-[#f2efda] pt-8 w-full min-h-[calc(100vh-4rem)] relative overflow-hidden z-40">
              <h2 className="text-7xl text-center mb-10 text-[#3b142b] mt-18">Your teachers are already using Wayground–learn <br /> <span className="italic font-bold">why </span></h2>

              <div className="flex justify-center -mb-8">
                <button className="relative bg-pink-500 text-white font-bold mb-10 px-8 py-5 rounded-lg shadow-[6px_6px_0px_0px_rgba(236,72,153,0.6)] 
                  transition-all duration-200 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:shadow-none">
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-xl font-bold">Get in Touch</span>
                  </div>
                </button>
              </div>

              <div className="bg-[#f2efda] sm:px-6 lg:px-8">
                <Footer />
              </div>
            </section>
            
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;

                   