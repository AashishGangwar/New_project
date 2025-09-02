import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import TrustedShapes from '../components/TrustedShape1';
import Footer from '../components/Footer';
import ButtonsGroup from '../components/ButtonsGroup2';
import ButtonsGroup1 from '../components/ButtonsGroup1';
import StudentTestimonial from '../components/StudentTestimonial';
import HomeFeatures from '../components/HomeFeatures';

// Testimonials data with local images
const testimonials = [
  {
    id: 1,
    name: 'Janelle Snyder',
    role: 'Middle School Teacher (Idaho)',
    content: "Our LAB-AIDS Science Curriculum is awesome, but the tests are painful and not engaging for students, so l use Wayground to build new assessments over the material we cover in our units. I'm thankful the tools Wayground offers encourages actual knowledge acquisition rather than offering punitive grades for lack of content knowledge on a particular day.",
    image: '/images/Educators/JanelleSnyder.avif',
    tintColor: 'bg-[#c6b4e3]'
  },
  {
    id: 2,
    name: 'Marcus Sanders',
    role: 'High School Math Teacher (Virginia)',
    content: "Wayground gives my students the opportunity to interact with the content and not just 'watch me teach'. I have actually taught an entire geometry class exclusively using Wayground because of the ability to use it for in-class as well as homework activities.",
    image: '/images/Educators/MarcusSanders.avif',
    tintColor: 'bg-[#eceb75]'
  },
  {
    id: 3,
    name: 'Shaunna Young',
    role: 'Middle School Science Teacher (Virginia)',
    content: "Wayground allows me to see which students are really struggling with a concept, and I can provide extra intervention immediately. My school has improved pass rates by over 20% in the last few years, and I attribute a large portion of our success to this review strategy on Wayground!",
    image: '/images/Educators/ShaunnaYoung.avif',
    tintColor: 'bg-[#ffc48a]'
  },
  {
    id: 4,
    name: 'Janette Capson',
    role: '6th Grade English Teacher (Utah)',
    content: "I love using Wayground for assessment review and also as intervention for extra practice on skills that my students are struggling with. I love that I can customize the questions and offer multiple ways for student to answer so I can pinpoint students by standard.",
    image: '/images/Educators/JanetteCapson.avif',
    tintColor: 'bg-[#a3e5e0]'
  },
  {
    id: 5,
    name: 'Sharon Brown',
    role: '5th Grade ELA Teacher (North Carolina)',
    content: "From the highest level learner to the lowest level learner, all students gain knowledge from using Wayground. It is great to see them having fun while they are learning.",
    image: '/images/Educators/SharonBrown.avif',
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
  const swiperRef = useRef(null);
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
      <div className="min-h-screen bg-[#3b142b] text-white">
        <Navbar />
        
        {/* Mobile Search Bar - Only visible on mobile */}
        <div className="lg:hidden p-4">
          <SearchBar />
        </div>
        
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Sidebar */}
          <div
            className="
              order-2 md:order-1 ml-8 mt-12
              w-full md:w-[200px] lg:w-[300px]
              md:fixed md:left-0 md:top-16 md:h-[calc(100vh-4rem)]
              z-20 bg-[#3b142b]
            "
          >
            <Sidebar />
          </div>

          {/* Main */}
          <main
            className="
              order-1 md:order-2 flex-1
              p-4
              md:pl-[216px] lg:pl-[316px]
              md:pr-8 md:pt-8
              min-h-[calc(100vh-4rem)]
            "
          >
            <div className="max-w-6xl mx-auto mt-20">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center py-8 md:py-12 bg-[#3b142b] opacity-90 text-center overflow-hidden">
              {/* Background SVGs - Hidden on mobile, visible on md and up */}
              <div className="hidden md:block absolute -top-40 -left-40 w-[40rem] h-[40rem] opacity-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 400"
                  fill="none"
                  className="w-full h-full text-pink-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M344.95 213.185L199.168 213.185C162.854 213.185 133.914 207.985 112.962 193.967C92.3928 180.205 79.364 157.834 74.7451 123.056L74.5313 121.391L74.5303 121.385C73.9129 116.638 73.6023 111.728 73.5088 106.748L73.5098 106.748L73.5098 103.787C73.4166 57.1363 88.6625 28.6635 110.006 15.3935L110.019 15.3847L110.031 15.3769C110.694 14.9358 111.008 14.0133 110.637 13.2275L110.638 13.2265L36.1094 -150.775L36.1094 -150.776C35.8088 -151.441 35.8099 -152.52 36.1651 -153.461C36.5316 -154.433 37.0779 -154.815 37.5303 -154.815L67.1055 -154.815L249.356 -153.507L320.367 -153.507C321.331 -153.507 322.143 -152.8 322.31 -151.873L322.334 -151.685L346.885 211.105L346.885 211.111L346.89 211.32C346.857 212.355 346.018 213.185 344.95 213.185Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M-601.845 -36.8321L-641.279 333.337C-641.365 334.139 -640.927 335.048 -639.896 335.812C-638.941 336.52 -637.576 337.012 -636.056 337.053L-635.749 337.054L-635.738 337.054L-128.973 335.308L-128.972 335.308C-45.3758 335.063 21.9625 318.297 69.9976 286.426C117.997 254.579 146.795 207.604 153.28 146.732C159.764 85.8627 140.98 38.932 99.8548 7.23318C59.3088 -24.0194 -3.08653 -40.5704 -84.7775 -40.8464L-88.6812 -40.8468L-88.6822 -40.8469L-597.348 -39.48L-597.351 -39.4803C-598.641 -39.4801 -599.765 -39.141 -600.564 -38.6254C-601.366 -38.1083 -601.778 -37.4627 -601.845 -36.8321Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M246 98.8437L246 218.987C246 273.626 262.327 317.099 292.472 346.912C322.618 376.726 366.703 393 422.455 393C478.237 393 522.345 376.726 552.506 346.911C582.665 317.098 599 273.626 599 218.987L599 98.8437C599 97.8173 598.179 97 597.174 97L247.826 97C246.821 97 246 97.8173 246 98.8437Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="hidden md:block absolute -top-40 -right-40 w-[40rem] h-[40rem] opacity-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 400"
                  fill="none"
                  className="w-full h-full text-pink-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M344.95 213.185L199.168 213.185C162.854 213.185 133.914 207.985 112.962 193.967C92.3928 180.205 79.364 157.834 74.7451 123.056L74.5313 121.391L74.5303 121.385C73.9129 116.638 73.6023 111.728 73.5088 106.748L73.5098 106.748L73.5098 103.787C73.4166 57.1363 88.6625 28.6635 110.006 15.3935L110.019 15.3847L110.031 15.3769C110.694 14.9358 111.008 14.0133 110.637 13.2275L110.638 13.2265L36.1094 -150.775L36.1094 -150.776C35.8088 -151.441 35.8099 -152.52 36.1651 -153.461C36.5316 -154.433 37.0779 -154.815 37.5303 -154.815L67.1055 -154.815L249.356 -153.507L320.367 -153.507C321.331 -153.507 322.143 -152.8 322.31 -151.873L322.334 -151.685L346.885 211.105L346.885 211.111L346.89 211.32C346.857 212.355 346.018 213.185 344.95 213.185Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M-601.845 -36.8321L-641.279 333.337C-641.365 334.139 -640.927 335.048 -639.896 335.812C-638.941 336.52 -637.576 337.012 -636.056 337.053L-635.749 337.054L-635.738 337.054L-128.973 335.308L-128.972 335.308C-45.3758 335.063 21.9625 318.297 69.9976 286.426C117.997 254.579 146.795 207.604 153.28 146.732C159.764 85.8627 140.98 38.932 99.8548 7.23318C59.3088 -24.0194 -3.08653 -40.5704 -84.7775 -40.8464L-88.6812 -40.8468L-88.6822 -40.8469L-597.348 -39.48L-597.351 -39.4803C-598.641 -39.4801 -599.765 -39.141 -600.564 -38.6254C-601.366 -38.1083 -601.778 -37.4627 -601.845 -36.8321Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M246 98.8437L246 218.987C246 273.626 262.327 317.099 292.472 346.912C322.618 376.726 366.703 393 422.455 393C478.237 393 522.345 376.726 552.506 346.911C582.665 317.098 599 273.626 599 218.987L599 98.8437C599 97.8173 598.179 97 597.174 97L247.826 97C246.821 97 246 97.8173 246 98.8437Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

  {/* Foreground Content */}
  <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 space-y-4 sm:space-y-6">
    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-1 sm:mb-2">
      Quizizz is now
    </h2>

    {/* WAYGROUND Wordmark - Responsive sizing */}
    <div className="w-full max-w-3xl sm:max-w-4xl mx-auto transform scale-100 sm:scale-110 md:scale-120 lg:scale-100 my-2 sm:my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 80"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M59.5952 2.53659L56.0243 32.3951C56.0076 32.5346 55.8904 32.6407 55.7453 32.6407H55.1093C54.9865 32.6407 54.8749 32.557 54.8414 32.4398L46.4052 2.43057C46.3382 2.19063 46.1206 2.02323 45.8695 2.02323L35.7147 1.98975C35.4916 1.98975 35.2907 2.12367 35.2014 2.32454L22.1676 32.5402C22.1229 32.6407 22.0225 32.7076 21.9109 32.7076H21.4701C21.3139 32.7076 21.1912 32.5849 21.1912 32.4286V2.54775C21.1912 2.24085 20.9401 1.98975 20.6332 1.98975H0.557956C0.25108 1.98975 0 2.24085 0 2.54775V71.3993C0 71.7062 0.25108 71.9573 0.557956 71.9573H21.0573C21.2749 71.9573 21.4757 71.8289 21.565 71.6281L37.1766 37.1214C37.2212 37.0209 37.3217 36.9596 37.4333 36.9596H38.5882C38.711 36.9596 38.8226 37.0433 38.856 37.1604L49.0276 71.5611C49.1001 71.7955 49.3121 71.9629 49.5632 71.9629L70.1796 72.0075C70.453 72.0075 70.6874 71.8066 70.732 71.5388L81.6847 2.6984C81.7405 2.35802 81.4782 2.05113 81.1323 2.05113H60.142C59.8575 2.05113 59.6231 2.26317 59.5897 2.54217L59.5952 2.53659Z" fill="#F3EFDA" />
        <path d="M113.814 0.801025C97.1424 0.801025 86.6974 9.63974 84.2257 25.1019L76.8439 71.3545C76.7881 71.6949 77.0504 72.0018 77.3963 72.0018H97.8956C98.169 72.0018 98.4033 71.8009 98.448 71.533L101.132 54.6982C101.154 54.5643 101.271 54.4638 101.405 54.4638H108.999C109.172 54.4638 109.3 54.6201 109.272 54.7875L106.628 71.3601C106.572 71.7004 106.834 72.0073 107.18 72.0073H127.646C127.919 72.0073 128.154 71.8065 128.198 71.5386L135.608 25.1075C138.074 9.63974 130.48 0.806606 113.808 0.806606L113.814 0.801025ZM105.746 25.8161C106.226 22.7918 107.911 21.1289 110.483 21.1289C111.672 21.1289 112.581 21.4916 113.189 22.2059C113.909 23.054 114.143 24.3263 113.875 25.9947L112.151 36.8199C112.129 36.9538 112.012 37.0542 111.878 37.0542H104.284C104.111 37.0542 103.983 36.898 104.011 36.7306L105.752 25.8161H105.746Z" fill="#F3EFDA" />
        <path d="M172.248 2.62301L162.668 36.8284C162.635 36.9511 162.523 37.0348 162.4 37.0348H161.502C161.346 37.0348 161.223 36.9121 161.223 36.7558L161.195 2.63417C161.195 2.32727 160.944 2.07617 160.637 2.07617H139.005C138.681 2.07617 138.425 2.34959 138.447 2.66765L141.042 42.5534C141.131 43.9038 141.371 45.243 141.856 46.5041C143.848 51.699 148.87 55.2758 154.617 55.2758H157.317C157.412 55.2758 157.479 55.3651 157.451 55.4544L153.015 71.2848C152.915 71.6419 153.183 71.9935 153.551 71.9935H174.597C174.848 71.9935 175.066 71.8261 175.133 71.5861L194.365 2.92433C194.466 2.56721 194.198 2.21567 193.83 2.21567H172.784C172.533 2.21567 172.315 2.38307 172.248 2.62301Z" fill="#F3EFDA" />
        <path d="M225.98 73.0464C201.52 73.0464 190.07 58.9234 190.07 37.8366C190.07 13.9319 204.917 1.10352 226.739 1.10352C232.826 1.10352 237.725 1.51643 244.376 2.74961C244.633 2.79425 244.822 3.01187 244.834 3.26855L245.888 23.4067C245.899 23.602 245.71 23.7471 245.525 23.6857C241.547 22.4023 236.554 21.1692 228.603 21.1692C220.652 21.1692 211.451 26.007 211.451 37.0554C211.451 48.8738 218.721 52.8021 226.421 52.8021C229.133 52.8021 230.544 52.4729 230.544 52.4729C230.684 52.4562 230.784 52.339 230.784 52.1939V46.0392C230.784 45.883 230.667 45.7602 230.511 45.7602H221.031C220.724 45.7602 220.473 45.5091 220.473 45.2022V28.903C220.473 28.5961 220.724 28.345 221.031 28.345H246.005C246.301 28.345 246.541 28.5738 246.563 28.8696L249.208 70.4238C249.225 70.7139 249.024 70.9706 248.734 71.0097C241.854 72.0308 234.461 73.0464 225.98 73.0408V73.0464Z" fill="#F3EFDA" />
        <path d="M295.593 40.1208C295.565 40.0594 295.587 39.9869 295.643 39.9478C299.766 37.381 302.667 31.9015 302.651 23.0014C302.651 22.8563 302.651 22.7057 302.651 22.5606C302.651 22.5383 302.651 22.516 302.651 22.4936C302.651 22.4769 302.651 22.4602 302.651 22.4434C302.634 21.4892 302.573 20.5518 302.455 19.6367C300.77 5.9936 292.429 2.04297 278.642 2.04297H251.001C250.677 2.04297 250.42 2.31639 250.443 2.64003L255.102 71.5306C255.124 71.8207 255.364 72.0495 255.66 72.0495H276.337C276.661 72.0495 276.918 71.7761 276.895 71.4525L275.043 46.0077C275.032 45.8459 275.16 45.7064 275.322 45.7064H277.308C277.431 45.7064 277.537 45.7845 277.576 45.9017L285.778 71.6589C285.851 71.8877 286.068 72.0495 286.308 72.0495H309.218C309.625 72.0495 309.893 71.631 309.726 71.2627L295.593 40.1208ZM279.92 27.8448C278.999 28.8269 277.626 29.3291 275.846 29.3291H273.682C273.537 29.3291 273.414 29.2175 273.403 29.0669L272.633 17.639C272.622 17.4772 272.75 17.3433 272.912 17.3433H275.11C278.82 17.3433 280.857 18.7271 281.181 23.3027C281.32 25.278 280.89 26.807 279.92 27.8448Z" fill="#F3EFDA" />
        <path d="M341.051 0.75293C318.973 0.75293 304.589 14.8592 304.589 36.5207C304.589 58.1822 318.979 72.294 341.051 72.294C363.124 72.294 377.72 58.0874 377.72 36.5207C377.72 14.954 363.236 0.75293 341.051 0.75293ZM341.152 49.2375C333.96 49.2375 329.066 44.0704 329.066 36.5151C329.066 28.9598 333.96 23.6979 341.152 23.6979C348.344 23.6979 353.343 28.8649 353.343 36.5151C353.343 44.1653 348.344 49.2375 341.152 49.2375Z" fill="#F3EFDA" />
        <path d="M417.215 2.08175C416.942 2.08175 416.707 2.28263 416.663 2.55047L409.287 48.5296C408.729 52.0394 406.569 52.776 404.856 52.776C403.69 52.776 402.809 52.4356 402.24 51.7716C401.592 51.0127 401.386 49.8632 401.631 48.3566L408.902 2.72345C408.957 2.38307 408.695 2.07617 408.349 2.07617H387.794C387.521 2.07617 387.286 2.27705 387.242 2.54489L379.838 49.0374C377.394 64.3377 385.043 73.0816 401.537 73.0816C418.03 73.0816 428.369 64.3377 430.812 49.0374L438.244 2.72345C438.3 2.38307 438.038 2.07617 437.692 2.07617H417.221L417.215 2.08175Z" fill="#F3EFDA" />
        <path d="M480.821 2.11133C480.514 2.11133 480.263 2.36243 480.263 2.66933L480.196 32.5948C480.196 32.7511 480.073 32.8738 479.917 32.8738H479.895C479.783 32.8738 479.683 32.8069 479.638 32.7064L465.985 2.44055C465.896 2.23967 465.695 2.11133 465.477 2.11133H444.788C444.515 2.11133 444.28 2.31221 444.236 2.58005L433.305 71.4093C433.25 71.7496 433.512 72.0565 433.858 72.0565L454.307 72.0454C454.586 72.0454 454.82 71.8445 454.859 71.5655L460.444 33.1138C460.461 32.9743 460.578 32.8682 460.723 32.8682H460.974C461.08 32.8682 461.181 32.9296 461.225 33.0245L480.084 71.7441C480.179 71.9338 480.374 72.0565 480.586 72.0565H501.354C501.66 72.0565 501.912 71.8054 501.912 71.4985V2.66933C501.912 2.36243 501.66 2.11133 501.354 2.11133H480.821Z" fill="#F3EFDA" />
        <path d="M531.781 2.20166H508.291C507.984 2.20166 507.733 2.45276 507.733 2.75966V71.494C507.733 71.8009 507.984 72.052 508.291 72.052H531.781C553.229 72.052 566.001 59.1455 566.001 37.1213C566.001 15.1026 553.229 2.20166 531.781 2.20166ZM531.675 52.9573H530.258C530.102 52.9573 529.979 52.8345 529.979 52.6783V21.5754C529.979 21.4192 530.102 21.2964 530.258 21.2964H531.675C538.46 21.2964 542.059 27.306 542.059 37.1213C542.059 46.942 538.466 52.9517 531.675 52.9517V52.9573Z" fill="#F3EFDA" />
      </svg>
    </div>

    {/* Subtitle */}
    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-15 px-2 sm:px-0">
      Bridge classroom realities and curriculum expectations with the platform 
      that's AI-supported, but teacher-first.
    </p>
    <div className="px-2 sm:px-0">
      <ButtonsGroup1 />
    </div>
  </div>
</section>

            
            {/* Trusted By Section */}
            <section className="py-12 flex justify-center">
              <div className="w-full max-w-3xl">
                <SearchBar />
              </div>
            </section>

            <div className="md:hidden w-full py-8">
              <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-3xl font-bold text-white mb-8">
        TRUSTED BY TEACHERS IN <span className="text-[#ffc48a]">90% OF U.S. SCHOOLS </span> AND <span className="text-[#ffc48a]">150+ COUNTRIES</span>
      </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {[
                    '/images/trustedbrands/6848501bf7aaf381374a130a_Logo 1.avif',
                    '/images/trustedbrands/6848501bde45cfb387978c5f_Logo 2.avif',
                    '/images/trustedbrands/6848501beaec64fb4625adbf_Logo 4.avif',
                    '/images/trustedbrands/6848501b3bb50c97ade034fa_Logo 5.avif',
                    '/images/trustedbrands/6848501b82aef8744f2574c1_Logo 6.avif',
                  ].map((src, idx) => (
                    <div
                      key={idx}
                      className="h-24 w-24 sm:h-24 sm:w-24 flex items-center justify-center p-2 rounded-lg"
                    >
                      <img
                        src={src}
                        alt={`Logo ${idx + 1}`}
                        className="max-h-full max-w-full object-contain transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <TrustedShapes />
            </div>

            </div>
            </main>
          </div>

<div className="w-full bg-[#3b142b]">
  <div className="md:pl-[216px] lg:pl-[316px]">
    <div className="max-w-6xl mx-auto">
      <HomeFeatures />
    </div>
  </div>
</div>

          
        

          <section className="w-full min-h-[calc(100vh-4rem)] mt-20 bg-[#3b142b] py-20 relative overflow-hidden z-40">

          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* Left Column */}
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="bg-[#3b142b] rounded-2xl overflow-hidden shadow-2xl h-full border border-[#f3efda]-300/10">
                    <div className="p-8">
                      {/* Privacy Image */}
                      <div className="mb-6 rounded-lg overflow-hidden">
                        <img 
                          src="/images/GridColumn/Privacy.avif" 
                          alt="Student Data Protection" 
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Heading */}
                      <h2 className="text-4xl font-bold text-[#f3efda] mb-4">
                        Get verified student data protection
                      </h2>
                      
                      {/* Content */}
                      <p className="text-[#f3efda] text-lg mb-8">
                        We're committed to responsible technology that puts educator and student privacy first. With enterprise-grade security, comprehensive data protection, and signed agreements that ensure your information remains yours.
                      </p>
                      
                      {/* Learn More Button */}
                      <button className="bg-[#f3efda] hover:bg-[#7a3fe6] text-[#3b142b] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-2/3 space-y-6">
                  {/* Card 1 - AI Section */}
                  <div className="bg-[#f1efda] rounded-2xl overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Left Side - Content */}
                      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#3b142b] mb-4">
                          Our approach to AI
                          <span className="block text-[#3b142b] font-bold text-4xl">AI Where It Counts</span>
                        </h3>
                        
                        <ul className="space-y-4 mb-6 text-lg">
                          <li className="flex items-start">
                            <span className="text-[#8a4fff] mr-2">•</span>
                            <span className="text-gray-600">Amplify shared human experiences, not digital isolation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#8a4fff] mr-2">•</span>
                            <span className="text-gray-600">Respect teacher agency, while also saving time</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#8a4fff] mr-2">•</span>
                            <span className="text-gray-600">Prioritize privacy and impact</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Right Side - Image */}
                      <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img
                          src="/images/GridColumn/ArtificialIntelligence.avif"
                          alt="AI in Education"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Integration Section */}
                  <div className="bg-[#f1efda] rounded-2xl overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row-reverse h-full">
                      {/* Left Side - Content */}
                      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-[#3b142b] mb-4">
                          No more password juggling or missing assignments
                        </h3>
                        <p className="text-[#3b142b] text-xl mb-6">
                          Wayground connects seamlessly to your school's existing ecosystems.
                        </p>
                      </div>
                      
                      {/* Right Side - Image */}
                      <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img
                          src="/images/GridColumn/Multiple.avif"
                          alt="School Ecosystem Integration"
                          className="w-full h-full object-cover"
                        />
                      </div>
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

          <div className="relative z-10 max-w-7xl mt-[50px] mx-auto px-6 h-full flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 mt-10 text-[#ffc48a]">What Educators Are Saying</h2>
              <p className="text-lg text-[#f3efda] max-w-3xl mx-auto">
                Join thousands of educators who are transforming their classrooms with our platform
              </p>
            </div>
            <div className="relative px-4 sm:px-0">
              {/* Navigation Buttons - Mobile (Side) */}
              <div className="lg:hidden">
                <button 
                  className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110" 
                  id="testimonial-prev-mobile"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  prevEl: document.documentElement.clientWidth >= 1024 ? '#testimonial-prev' : '#testimonial-prev-mobile',
                  nextEl: document.documentElement.clientWidth >= 1024 ? '#testimonial-next' : '#testimonial-next-mobile',
                }}
                onResize={(swiper) => {
                  // Update navigation elements when window is resized
                  swiper.params.navigation.prevEl = document.documentElement.clientWidth >= 1024 ? '#testimonial-prev' : '#testimonial-prev-mobile';
                  swiper.params.navigation.nextEl = document.documentElement.clientWidth >= 1024 ? '#testimonial-next' : '#testimonial-next-mobile';
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  320: { 
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  640: { 
                    slidesPerView: 1,
                    spaceBetween: 24
                  },
                  1024: { 
                    slidesPerView: 1.2,
                    spaceBetween: 30
                  },
                  1280: { 
                    slidesPerView: 1.5,
                    spaceBetween: 40
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
                    <div className="bg-[#f2efda] rounded-2xl overflow-hidden w-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl h-full min-h-[500px] sm:min-h-[400px]">
                      <div className="flex-1 p-4 sm:p-6 flex flex-col sm:flex-row h-full">
                        {/* Image Section - Full width on mobile, 1/3 on larger screens */}
                        <div className="w-full sm:w-1/3 flex-shrink-0 relative overflow-hidden rounded-lg h-48 sm:h-auto">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=random';
                            }}
                          />
                          <div className={`absolute inset-0 ${testimonial.tintColor} mix-blend-multiply opacity-70`}></div>
                        </div>
                        
                        {/* Content Section - Full width on mobile, 2/3 on larger screens */}
                        <div className="w-full sm:w-2/3 flex flex-col py-4 sm:py-0 sm:pl-6">
                          <p className="text-[#3b142b] text-base sm:text-lg mb-4 sm:mb-6 italic flex-1">"{testimonial.content}"</p>
                          <div className="mt-auto pt-4 border-t border-white/10">
                            <h4 className="text-xl sm:text-2xl text-[#3b142b] font-bold">{testimonial.name}</h4>
                            <p className="text-[#3b142b] text-sm sm:text-base">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="lg:hidden">
                <button 
                  className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110" 
                  id="testimonial-next-mobile"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Buttons - Desktop (Below Testimonials) */}
              <div className="hidden lg:flex justify-center mt-8 space-x-4">
                <button 
                  className="bg-white/20 hover:bg-[#2a0e1f] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                  id="testimonial-prev"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="bg-white/20 hover:bg-[#2a0e1f] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                  id="testimonial-next"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <style jsx global>{`
              .testimonial-swiper {
                padding: 10px 0;
                width: 100%;
                overflow: hidden;
              }
              .testimonial-swiper .swiper-slide {
                height: auto;
                padding: 0 8px;
                box-sizing: border-box;
                max-width: 1000px;
                width: 100%;
                margin: 0 auto;
              }
              @media (min-width: 1024px) {
                .testimonial-swiper .swiper-slide {
                  padding: 0 15px;
                }
              }
              .testimonial-swiper .swiper-slide-active {
                z-index: 1;
              }
              .testimonial-swiper .swiper-wrapper {
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                padding: 10px 0;
              }
            `}</style>
            
            

            
            
            
          </div>
        </section>
        
        {/* Student Testimonials Section */}
        <section className="w-full py-16 sm:py-20 bg-[#f2efda] relative overflow-hidden z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <StudentTestimonial />
            
            
            
            <h2 className="text-7xl text-center mt-20 text-[#3b142b]">
              Find your way <span className="italic font-bold">forward</span>
            </h2>
            
            <div className="flex justify-center mt-10">
              <ButtonsGroup />
            </div>
          </div>
          
        
          
          <style jsx global>{`
            .testimonial-swiper {
              width: 100%;
              overflow: visible;
              position: relative;
            }
            .testimonial-swiper .swiper-slide {
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s ease;
              opacity: 0.6;
              transform: scale(0.9);
              filter: brightness(0.8);
            }
            .testimonial-swiper .swiper-slide-prev,
            .testimonial-swiper .swiper-slide-next {
              opacity: 0.8;
              transform: scale(0.95);
              filter: brightness(0.9);
            }
            .testimonial-swiper .swiper-slide-active {
              opacity: 1;
              transform: scale(1);
              filter: brightness(1);
              z-index: 2;
            }
            .swiper-slide-content {
              transition: all 0.3s ease;
              position: relative;
            }
            .swiper-slide-prev .swiper-slide-content,
            .swiper-slide-next .swiper-slide-content {
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .swiper-slide-active .swiper-slide-content {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
          `}</style>
        </section>
        <section className="bg-[#f2efda] relative overflow-hidden z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>
        </section>
        
      </div>
    </ParallaxProvider>
  );
};

export default Home;
