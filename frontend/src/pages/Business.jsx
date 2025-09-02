import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BusinessNavbar from '../components/BusinessNavbar';
import Carousel from '../components/Carousel';
import ClientMarquee from '../components/ClientMarquee';
import ScrollCards1 from '../components/ScrollCards1';
import { Star } from 'lucide-react';
import logo from '../assets/logo.svg';
import FAQSection from '../components/FAQSection';
import FooterCard from '../components/Footer';
import Footer from '../components/Footer';

// Tiny inline icons (so you don't need any icon lib)
const Bullet = ({ path }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
    <path d={path} fill="currentColor" />
  </svg>
);

const BulletItem = ({ icon, text }) => (
  <li className="flex gap-3 items-start">
    <span className="mt-1 text-[#F5EEDD]">
      <Bullet path={icon} />
    </span>
    <span className="font-semibold">{text}</span>
  </li>
);

// Icon paths
const boltPath = 'M13 2L3 14h7l-1 8 10-12h-7l1-8z';
const linkPath =
  'M10.59 13.41a1.996 1.996 0 010-2.82l2.18-2.18a2 2 0 112.83 2.83l-.88.88 1.41 1.41.88-.88a4 4 0 10-5.66-5.66l-2.18 2.18a4 4 0 105.66 5.66l.59-.59-1.41-1.41-.59.59a2 2 0 11-2.83-2.83l.88-.88-1.41-1.41-.88.88a4 4 0 000 5.66z';
const assignPath =
  'M4 4h16v2H4zM4 9h16v2H4zM4 14h10v2H4zM16 14l2 2 4-4-1.41-1.41L18 13.17l-1.59-1.58L16 14z';
const chartPath =
  'M4 20h16v-2H4v2zm2-4h2V8H6v8zm4 0h2V4h-2v12zm4 0h2v-6h-2v6zm4 0h2v-9h-2v9z';

// Stat component for the statistics display
const Stat = ({ number, label, color = 'text-indigo-600' }) => (
  <div className="text-center">
    <dt className={`text-3xl font-bold ${color}`}>{number}</dt>
    <dd className="text-sm font-medium text-gray-500">{label}</dd>
  </div>
);

const Business = () => {
  // State for PowerUp Tabs
  const [activeTab, setActiveTab] = useState('hr');

  // ---------- HERO SLIDES ----------
  const slides = [
    (
      <section key="slide1" className="relative overflow-hidden bg-[#f2efda]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-6xl text-[#3b142b] font-extrabold leading-[1.05]">
                The Future of workplace learning is here
              </h1>
              <p className="mt-6 max-w-2xl text-2xl text-[#3b142b] leading-8 text-slate-600">
                Power-up your people with the market&apos;s leading Intelligent Learning Platform and transform your business with AI-powered learning.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-demo"
                  className="inline-flex items-center justify-center rounded-lg bg-[#3b142b] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#3b142b]/90 focus:outline-none focus:ring-2  focus:ring-offset-2"
                >
                  Get a Demo
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-lg bg-[#FF8A3D] px-6 py-4 text-base font-semibold text-white shadow-sm ring-1 ring-slate-200 transition hover:bg-[#FF8A3D]/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Business/Hero-1.jpg"
                alt="Team collaborating in a modern office space"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    ),
    (
      <section key="slide2" className="relative overflow-hidden bg-[#f2efda]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-6xl text-[#3b142b] font-extrabold leading-[1.05]">
                Training that works where you do
              </h1>
              <p className="mt-6 max-w-2xl text-2xl text-[#3b142b] leading-8 text-slate-600">
                Wayground powers learning in retail, pharma, financial services and many more industries worldwide.
              </p>
              <div className="mt-8">
                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center rounded-lg bg-[#3b142b] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Explore Industries
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Business/Hero-2.jpg"
                alt="Diverse team in a training session"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    ),
    (
      <section key="slide3" className="relative overflow-hidden bg-[#f2efda]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-6xl text-[#3b142b] font-extrabold leading-[1.05]">
                Where training meets outcome
              </h1>
              <p className="mt-6 max-w-2xl text-2xl text-[#3b142b] leading-8 text-slate-600">
                Explore how teams use Wayground to onboard faster, stay compliant, and improve performance across the board.
              </p>
              <div className="mt-8">
                <Link
                  to="/use-cases"
                  className="inline-flex items-center justify-center rounded-lg bg-[#3b142b] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Explore Use Cases
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Business/Hero-3.jpg"
                alt="Business professionals reviewing data and analytics"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    ),
  ];
  // ---------- END HERO SLIDES ----------

  return (
    <div className="min-h-screen bg-[#f2efda] overflow-x-hidden">
      <BusinessNavbar />
      <main className="pt-16 px-4 sm:px-0">
        {/* Hero Carousel */}
        <div className="w-full overflow-hidden">
          <Carousel slides={slides} interval={5000} />
        </div>

        <ClientMarquee className="bg-[#f2efda] py-8 md:py-16 px-4" />


        {/* Pharma CTA */}
        <section className="py-8 md:py-16 bg-[#f2efda] px-4 sm:px-6">
          <div className="max-w-7xl bg-[#3b142b] p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[1.5rem] mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left Side - Text Content */}
              <div className="lg:w-1/2 lg:pr-6 xl:pr-12 mb-8 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f2efda] mb-4 sm:mb-6">
                  Boost Pharma sales with realistic AI Roleplay coaching
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#f2efda] mb-6 sm:mb-8 leading-relaxed">
                  Wayground for Business empowers field sales reps with AI-driven roleplays and coaching to enhance sales team performance. Medical reps practice realistic HCP scenarios, sharpen skills, and consistently drive revenue growth.
                </p>
                <button
                  className="bg-[#f2efda] hover:bg-[#2a0f1f] text-[#3b142b] text-sm sm:text-base font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 whitespace-nowrap"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Get Early Access
                </button>
              </div>

              {/* Right Side - Image */}
              <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-lg rounded-xl overflow-hidden">
                  <img
                    src="/images/Business/doctors-min.png"
                    alt="Medical professionals discussing patient care"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <div className="bg-[#f2efda] px-4 sm:px-6">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* G2 Card */}
            <div className="border-2 border-[#3b142b] rounded-xl p-4 sm:p-6 flex flex-col items-center text-center">
              <img src="images/Business/g2-dark.svg" alt="G2" className="h-10 sm:h-12 mb-3" />
              <p className="text-5xl sm:text-6xl font-bold text-orange-600">4.9/5</p>
              <div className="flex flex-col sm:flex-row sm:divide-x sm:divide-gray-300 mt-3 sm:mt-4 w-full">
                <div className="flex-1 px-2 sm:px-4 py-2">
                  <p className="italic text-[#3b142b] text-base sm:text-lg md:text-xl">"Easy to use and beautiful."</p>
                  <div className="flex justify-center mt-1 sm:mt-2 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 px-2 sm:px-4 py-2 sm:mt-0">
                  <p className="italic text-[#3b142b] text-base sm:text-lg">"The best learning platform I&apos;ve seen."</p>
                  <div className="flex justify-center mt-1 sm:mt-2 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          

            {/* Capterra Card */}
            <div className="border-2 border-[#3b142b] rounded-xl p-4 sm:p-6 flex flex-col items-center text-center">
              <img src="images/Business/capterra-dark.svg" alt="Capterra" className="h-10 sm:h-12 mb-3" />
              <p className="text-5xl sm:text-6xl font-bold text-orange-600">4.7/5</p>
              <div className="flex flex-col sm:flex-row sm:divide-x sm:divide-gray-300 mt-3 sm:mt-4 w-full">
                <div className="flex-1 px-2 sm:px-4 py-2">
                  <p className="italic text-[#3b142b] text-base sm:text-lg">"Powerful add-on to corporate training."</p>
                  <div className="flex justify-center mt-1 sm:mt-2 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 px-2 sm:px-4 py-2 sm:mt-0">
                  <p className="italic text-[#3b142b] text-base sm:text-lg">"A new way to engage our employees."</p>
                  <div className="flex justify-center mt-1 sm:mt-2 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-7xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Text */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b142b] mb-4 sm:mb-6">
                Why power-up your people with Wayground for Business
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#3b142b] mb-4">
                The right training can boost your employees&apos; productivity by more than 20%, improve
                safety at work by 15%, cut staff turnover by 50%.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#3b142b]">
                Wayground for Business uses insights from cognitive-learning science, built-in AI and
                advanced reporting to deliver learning that powers better business outcomes.
              </p>
            </div>

            {/* Right Image Mockups */}
            <div className="order-1 md:order-2 flex justify-center relative -mx-4 sm:mx-0">
              <div className="relative w-full max-w-2xl">
                <img
                  src="images/Business/gameplay-desktop.gif"
                  alt="Laptop"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
                <img
                  src="images/Business/gameplay-mobile.png"
                  alt="Phone"
                  className="absolute right-0 sm:right-4 bottom-0 w-1/3 sm:w-1/4 transform translate-x-2 sm:translate-x-6 translate-y-2 sm:translate-y-6"
                  loading="lazy"
                />
              </div>
          </div>
        </div>

        {/* Scroll Cards Section */}
        <ScrollCards1 />

        {/* Two Cards Section */}
        <section className="w-full bg-[#f2efda] px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* LEFT CARD */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#E8EE86] shadow-xl">
                <div className="w-full h-full p-6 sm:p-8 lg:p-10 xl:p-12">
                  <div className="max-w-3xl">
                      <h2 className="text-3xl/[1.1] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2B2A2A]">
                        How is <br className="hidden sm:block" />
                        <span className="block mt-1 sm:mt-2">Wayground being</span>
                        <span className="block">used?</span>
                      </h2>

                      <p className="mt-6 text-lg leading-7 text-[#2b2a2acc]">
                        Whether you need to boost the sales performance of your shop-floor
                        workers, improve standards of safety at work, update staff on new
                        compliance standards, or something else, Wayground for Business
                        helps you elevate performance, engagement, and impact across your
                        organization.
                      </p>

                      <button
                        type="button"
                        className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-[#3A2D1A] text-white shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3A2D1A]"
                      >
                        Explore solutions
                      </button>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>

              {/* RIGHT CARD */}
              <div className="relative overflow-hidden rounded-3xl bg-[#0A3B52] shadow-xl">
                <div className="w-full h-full p-6 sm:p-8 lg:p-12">
                  <div className="max-w-3xl">
                      <h2 className="text-4xl/[1.1] sm:text-5xl font-extrabold tracking-tight text-white">
                        Who&apos;s using <br />
                        <span className="block mt-2">Wayground?</span>
                      </h2>

                      <p className="mt-6 text-lg leading-7 text-white/80">
                        Organizations of all types and sizes are using Wayground for
                        Business to make learning more engaging, effective and to have a
                        measurable impact on the goals and priorities set by their
                        business leadership team. Find out more about how others are using
                        Wayground for Business.
                      </p>

                      <button
                        type="button"
                        className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-white text-[#0A3B52] shadow-md hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                      >
                        Explore industries
                      </button>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* eBook CTA */}
        <section className="w-full bg-[#f2efda] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Tilted tablet */}
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 md:h-12 rounded-full blur-2xl opacity-40 bg-black/20" />
                <div className="relative -rotate-[18deg]">
                  <div className="pointer-events-none select-none">
                    <img
                      src="images/Business/ebook-min-resized.png"
                      alt="eBook preview"
                      className="h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] w-auto object-contain drop-shadow-2xl"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>

              {/* Text + CTA */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2a1b17]">
                  Discover why you need an
                  <br />
                  intelligent learning platform
                </h2>
                <p className="mt-6 text-lg leading-7 text-[#2a1b17]/80">
                  Conventional learning tools struggle to drive engagement. They&apos;re
                  complex, don&apos;t have advanced reporting and are difficult to optimize
                  for use. Wayground for Business solves these problems to deliver
                  superior learning outcomes.
                </p>
                <p className="mt-5 text-base text-[#2a1b17]/70">
                  Read our ebook to find out more.
                </p>
                <button
                  type="button"
                  className="mt-7 inline-flex items-center justify-center rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-base sm:text-lg font-semibold bg-[#FF8A3D] text-white shadow-[0_8px_20px_rgba(255,138,61,0.35)] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A3D]"
                >
                  Download eBook
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-[#f2efda] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3b142b] mb-12 md:mb-16">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-[#3b142b] rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex-1">
                  <p className="text-[#f2efda] text-lg leading-relaxed mb-6">
                    "Wayground for Business gives us the tools to make learning enjoyable and to optimize learning content for better outcomes."
                  </p>
                </div>
                <div>
                  <h4 className="text-[#f2efda] font-semibold text-xl">Michael</h4>
                  <p className="text-[#f2efda]/80 text-sm">Trainer at a major national retailer</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#3b142b] rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex-1">
                  <p className="text-[#f2efda] text-lg leading-relaxed mb-6">
                    "With help from Wayground for Business gamification, we&apos;ve increased the success rate for complex technical training by 60%"
                  </p>
                </div>
                <div>
                  <h4 className="text-[#f2efda] font-semibold text-xl">Jake</h4>
                  <p className="text-[#f2efda]/80 text-sm">Trainer at a major US ISP</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#3b142b] rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex-1">
                  <p className="text-[#f2efda] text-lg leading-relaxed mb-6">
                    "Wayground helps me conduct my trainings and assessments in an engaging way, that is mobile-first."
                  </p>
                </div>
                <div>
                  <h4 className="text-[#f2efda] font-semibold text-xl">LuLu Kyaw</h4>
                  <p className="text-[#f2efda]/80 text-sm">US Pharmacopeia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PowerUp Tabs */}
        <section className="w-full bg-[#3b142b] py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            {/* Pills */}
            <div className="flex justify-center gap-3 mb-6">
              {[
                { id: 'employees', label: 'Employees' },
                { id: 'trainers', label: 'Trainers' },
                { id: 'hr', label: 'HR Leaders' },
              ].map(({ id, label }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    aria-selected={isActive}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white text-[#3b142b]'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Card */}
            <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
              <div className="grid md:grid-cols-2">
                {/* LEFT PANEL */}
                <div className="bg-[#381826] text-[#F5EEDD] p-6 sm:p-10 lg:p-12 min-h-[520px] flex">
                  <div className="my-auto max-w-xl">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">POWER–UP</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold mt-3">
                      {activeTab === 'employees'
                        ? 'YOUR EMPLOYEES'
                        : activeTab === 'trainers'
                        ? 'YOUR TRAINERS'
                        : 'YOUR HR LEADERS'}
                    </h3>

                    <p className="mt-6 text-base/7 text-[#F5EEDD]/80">
                      {activeTab === 'employees'
                        ? 'Give teams bite-sized lessons, smart nudges, and clear goals so they learn faster and apply knowledge on the job.'
                        : activeTab === 'trainers'
                        ? 'Create once, reuse everywhere. Keep courses fresh with templates and AI help, plus rock-solid version control.'
                        : 'Easily create learning programs that add measurable value. Share knowledge, content, and metrics across the org.'}
                    </p>

                    <ul className="mt-6 space-y-4">
                      {activeTab === 'employees' ? (
                        <>
                          <BulletItem icon={boltPath} text="Micro-lessons that fit busy schedules." />
                          <BulletItem icon={linkPath} text="Blend quizzes and activities in minutes." />
                          <BulletItem icon={assignPath} text="Auto-assign by role or location." />
                          <BulletItem icon={chartPath} text="Progress dashboards for managers." />
                        </>
                      ) : activeTab === 'trainers' ? (
                        <>
                          <BulletItem icon={boltPath} text="AI assistance to draft high-quality content." />
                          <BulletItem icon={linkPath} text="Reusable templates and modules." />
                          <BulletItem icon={assignPath} text="Share libraries across teams." />
                          <BulletItem icon={chartPath} text="Insights on item-level difficulty." />
                        </>
                      ) : (
                        <>
                          <BulletItem icon={boltPath} text="Use templates and AI to craft quality content." />
                          <BulletItem icon={linkPath} text="Link lessons and quizzes to form courses." />
                          <BulletItem icon={assignPath} text="Assign to users, teams, departments." />
                          <BulletItem icon={chartPath} text="Use reporting to optimize outcomes." />
                        </>
                      )}
                    </ul>

                    <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#FF8A3D] text-white font-semibold px-5 py-3 shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A3D]">
                      See Wayground in Action
                    </button>
                  </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="relative min-h-[520px] bg-[#3b142b]">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    {activeTab === 'employees' ? (
                      <img
                        src="/images/Business/employee (1).jpg"
                        alt="Employee Training"
                        className="h-[400px] w-auto rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                      />
                    ) : activeTab === 'trainers' ? (
                      <img
                        src="/images/Business/trainer.jpg"
                        alt="Trainer Resources"
                        className="h-[400px] w-auto rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                      />
                    ) : (
                      <img
                        src="/images/Business/Interview.jpg"
                        alt="Interview Process"
                        className="h-[400px] w-auto rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Free Trial CTA */}
        <section className="w-full py-16 sm:py-20 bg-[#3b142b] text-white px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Start FREE 14 day trial
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90">
                  Get your FREE 14 day trial of Wayground for Business now. No sign-up fees. No need to provide payment details. Just sign up and get started.
                </p>
                <Link
                  to="/signup"
                  className="inline-block bg-[#f2efda] text-[#3b142b] hover:bg-opacity-90 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-center transition-colors duration-300 text-sm sm:text-base"
                >
                  Start your free trial
                </Link>
              </div>

              {/* Right */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mt-6 md:mt-0">
                <img
                  src="/images/Business/free-trial-laptop-unscreen.gif"
                  alt="Wayground Business Solution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full bg-[#f2efda]">
          <div className="px-4 sm:px-6 lg:px-8 mt-10">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Business;