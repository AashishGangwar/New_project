import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedShape3 from '../components/TrustedShape3';
import ButtonsGroup2 from '../components/ButtonsGroup2';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlansFAQ from '../components/PlansFAQ';
import { 
  faBoxArchive, 
  faClipboard, 
  faRightLeft, 
  faComments, 
  faChartLine, 
  faTruck,
  faChalkboardUser,
  faSchool
} from '@fortawesome/free-solid-svg-icons';
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

// Utility: render cell content (✔️, —, or text)
const cellRender = (cell) => {
  if (cell === "check") return <span className="text-pink-500 text-xl">✔</span>;
  if (cell === "dash") return <span className="text-gray-400">—</span>;
  return <span className="font-medium">{cell}</span>;
};

// Badge renderer
const renderBadge = (label) => (
  <span
    className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${
      label === "New"
        ? "bg-pink-500 text-white"
        : label === "Coming Soon"
        ? "bg-[#2b0f26] text-white"
        : ""
    }`}
  >
    {label}
  </span>
);

// Sections data
const SECTIONS = [
  {
    title: "Storage",
    icon: faBoxArchive,
    rows: [
      { label: "Library access", info: true, starter: "Limited", district: "check" },
      { label: "Unlimited storage", info: true, starter: "20-resource limit", district: "check" },
    ],
  },
  {
    title: "Create assessments, presentations, passages, flashcards, and videos",
    icon: faClipboard,
    rows: [
      { label: "Teleport from 40M+ standards-aligned resources", info: true, starter: "Limited", district: "check" },
      { label: "All question types", info: true, starter: "Limited", district: "check" },
      { label: "Image & video search (Google Images, YouTube)", info: true, starter: "Limited", district: "check" },
      { label: "Create with Wayground AI", info: true, starter: "dash", district: "check" },
      { label: "Gamification features", info: true, starter: "check", district: "check" },
      { label: "Import from Google Drive", starter: "check", district: "check" },
      { label: "Import PDFs, presentations, forms, and spreadsheets", starter: "check", district: "check" },
      { label: "Flashcards", badge: "New", starter: "check", district: "check" },
      { label: "Passages", badge: "New", starter: "check", district: "check" },
      { label: "Videos", badge: "New", starter: "check", district: "check" },
      { label: "Analyze data with Wayground AI", starter: "dash", district: "check" },
      { label: "Make resources private", starter: "dash", district: "check" },
      { label: "Embed audio & video in resources", starter: "dash", district: "check" },
      { label: "Student Audio & Video Responses", starter: "dash", district: "check" },
      { label: "Show Your Work (with images/GIFs)", starter: "dash", district: "check" },
      { label: "Standards tagging", starter: "dash", district: "check" },
      { label: "School or district shared library", starter: "dash", district: "check" },
      { label: "Videos with YouTube for Education", badge: "New", starter: "dash", district: "check" },
    ],
  },
  {
    title: "Delivery options",
    icon: faTruck,
    rows: [
      { label: "Presentation engagement with Lessons Toolbox", badge: "New", starter: "check", district: "check" },
      { label: "Create Differentiated Versions of a resource", badge: "New", starter: "check", district: "check" },
      { label: "Teacher-paced and student-paced modes", starter: "check", district: "check" },
      { label: "Text-to-speech with Read Aloud", starter: "check", district: "check" },
      { label: "Reopen expired assignments", starter: "check", district: "check" },
      { label: "Customize deadlines for any circumstance", starter: "check", district: "check" },
      { label: "25+ modification and accommodation options", badge: "New", starter: "Limited", district: "check" },
      { label: "Rotating question sets", starter: "dash", district: "check" },
      { label: "Prep for testing with Review & Submit", starter: "dash", district: "check" },
      { label: "Prevent browsing with Focus Mode", starter: "dash", district: "check" },
    ],
  },
  {
    title: "Data and feedback",
    icon: faChartLine,
    rows: [
      { label: "Autograde student writing and audio responses with AI", badge: "New", starter: "check", district: "check" },
      { label: "Live instruction data with Classroom Pulse", badge: "New", starter: "check", district: "check" },
      { label: "Share reports with colleagues", starter: "dash", district: "check" },
      { label: "Standards-aligned reports", starter: "dash", district: "check" },
      { label: "Longitudinal Growth Graphs of student progress", starter: "dash", district: "check" },
      { label: "Admin Dashboard with school or district-level insights", starter: "dash", district: "check" },
    ],
  },
  {
    title: "Management and integrations",
    icon: faRightLeft,
    rows: [
      { label: "SSO with Google and Microsoft", starter: "dash", district: "check" },
      { label: "Co-Teaching and Teams", starter: "dash", district: "check" },
      { label: "Sync grades and class rosters with your LMS", starter: "dash", district: "Canvas, Schoology, and Google Classroom" },
      { label: "Clever and ClassLink rostering", badge: "New", starter: "dash", district: "check" },
      { label: "LTI integrations with Canvas, Schoology, and more", badge: "New", starter: "dash", district: "check" },
      { label: "Google Classroom Add-On", badge: "Coming Soon", starter: "dash", district: "check" },
    ],
  },
  {
    title: "Training and support",
    icon: faComments,
    rows: [
      { label: "Priority support", starter: "dash", district: "check" },
      { label: "Dedicated Customer Success Manager", starter: "dash", district: "check" },
      { label: "On-demand virtual training", starter: "dash", district: "check" },
      { label: "Live professional development", starter: "dash", district: "check" },
    ],
  },
];

const ComparePlansTable = () => {
  return (
    <div className="w-full bg-[#f2efda] text-[#2b0f26] px-4 sm:px-6">
      <div className="w-full">
      {/* Main title - 112px (navbar) */}
      <div className="sticky top-28 z-30 bg-[#f2efda] pt-6 sm:pt-8 pb-4 border-b border-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#3b142b] mb-2">
          Compare plans & features
        </h1>
      </div>
      
      {/* Plans header - 112px (navbar) + 8.5rem (main title section with padding) = 200px */}
      <div className="sticky top-[200px] sm:top-[215px] z-20 bg-[#f2efda] border-b border-black">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-6 sm:py-8 md:py-12">
          <div className="text-2xl sm:text-3xl font-bold text-[#3b142b] mb-4 sm:mb-0">Plans</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
            <div className="text-2xl sm:text-3xl font-bold text-[#3b142b]">Starter</div>
            <div className="relative w-full sm:w-auto">
              <div className="sm:absolute sm:-top-10 sm:right-0 mb-2 sm:mb-0 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 py-2 bg-pink-500 text-white text-sm font-semibold rounded-lg hover:bg-pink-600 transition-colors">
                  Request a quote
                </button>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#3b142b] whitespace-nowrap">School and District</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      {SECTIONS.map((section, idx) => (
        <div key={idx} className="border-b border-black">
          {/* Sticky section header */}
          <div className="sticky top-[200px] sm:top-[280px] md:top-[300px] lg:top-[345px] z-10 bg-[#f2efda] px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 border-t border-b border-black">
            <div className="text-pink-500 text-xl sm:text-2xl">
              <FontAwesomeIcon icon={section.icon} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{section.title}</h2>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-300">
            {section.rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 sm:grid-cols-3 py-3 items-start sm:items-center gap-2 sm:gap-4 ${
                  row.badge ? "border-l-4 border-l-pink-500 pl-3 sm:pl-6" : "pl-0 sm:pl-6"
                }`}
              >
                <div className="flex items-start gap-2 font-medium text-base sm:text-lg">
                  {row.info && <QuestionMarkCircleIcon className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />}
                  <div>
                    <div className="flex items-center gap-2">
                      {row.label}
                      {row.badge && renderBadge(row.badge)}
                    </div>
                  </div>
                </div>
                <div className="flex sm:justify-center py-1 sm:py-0">
                  <div>
                    <div className="sm:hidden font-medium mb-1">Starter</div>
                    {cellRender(row.starter)}
                  </div>
                </div>
                <div className="flex sm:justify-end">
                  <div className="text-right">
                    <div className="sm:hidden font-medium mb-1">School & District</div>
                    {cellRender(row.district)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-24 bg-[#3b142b] w-full">
            <div className="w-full max-w-8xl mx-auto mt-16 sm:mt-24 md:mt-32 lg:mt-40">
              <div className="flex flex-col lg:flex-row items-center">
                {/* Left Column - Text Content */}
                <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl text-center md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                    Choose your Wayground plan
                  </h1>
                  <p className="text-lg sm:text-xl text-center md:text-2xl text-gray-200 mb-4 sm:mb-6">
                    Everything you need to make your curriculum go whether you manage a classroom or an entire district.
                  </p>
                  <p className="text-lg sm:text-xl text-center md:text-2xl text-gray-200">
                    Not a K-12 school or district? join startups, nonprofits, and fortune 500 companies using{' '}
                    <a href="#" className="text-[#ffc48a] hover:underline">Corporate Plans.</a>
                  </p>
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

          {/* Trusted By Section */}
          <div className="py-6 sm:py-8 relative overflow-hidden bg-[#3b142b] px-4 sm:px-6">
            <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#f3efda] mb-6 sm:mb-8 max-w-5xl mx-auto">
              TRUSTED BY <span className="text-[#ff7925] whitespace-nowrap">3,000+</span> INNOVATIVE SCHOOLS AND DISTRICTS NATIONWIDE
            </p>
            
            {/* Mobile: Logos without SVG background */}
            <div className="sm:hidden max-w-7xl mx-auto px-4">
  <div className="flex flex-wrap justify-center items-center gap-4">
    {[
      '/images/School/SchoolLogo1.avif',
      '/images/School/SchoolLogo2.avif',
      '/images/School/SchoolLogo3.avif',
      '/images/School/SchoolLogo4.avif',
      '/images/School/SchoolLogo5.avif',
      '/images/School/SchoolLogo6.avif',
      '/images/School/SchoolLogo7.avif',
      '/images/School/SchoolLogo8.avif',
    ].map((src, idx) => (
      <div
        key={idx}
        className="h-24 w-24 flex items-center justify-center p-2"
      >
        <img
          src={src}
          alt={`Logo ${idx + 1}`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>

            
            {/* Desktop: SVG with logos */}
            <div className="hidden sm:block max-w-8xl mx-auto">
              <TrustedShape3 />
            </div>
          </div>

          {/* Pricing Cards Section */}
          <div className="py-12 sm:py-16 bg-[#3b142b] px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                {/* Starter Card */}
                <div className="flex-1 bg-[#fdf8e7] mt-12 sm:mt-20 rounded-2xl shadow-lg p-6 sm:p-8">
                  <div className="mb-6 flex">
                    <div className="relative w-20 h-20 shadow-lg rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#f3efda"
                        viewBox="0 0 50 55"
                        className="absolute inset-0 w-full h-full rounded-lg"
                      >
                        <path d="M0 5.28V49.44C0 52.28 2.3 54.58 5.13 54.58H44.86C47.7 54.58 50 52.28 50 49.44V15.98C50 13.66 48.44 11.62 46.2 11.02L6.47 0.32C3.2 -0.55 0 1.9 0 5.28Z" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faChalkboardUser}
                          className="text-[#2b0f26] text-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-900">Starter</h2>
                  <p className="text-[#333] text-lg sm:text-xl mb-4">
                    Get any resource and adapt it to your needs with an individual
                    teacher account.
                  </p>

                  <button className="bg-[#2b0f26] hover:bg-[#3c1635] text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-full mb-4 sm:mb-6 text-base sm:text-lg transition-colors">
                    Get started →
                  </button>

                  <ul className="space-y-3 text-[#444] text-base sm:text-lg mb-6">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-black stroke-3 flex-shrink-0 mt-0.5" />
                      <span>Limited access to interactive question types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-black stroke-3 flex-shrink-0 mt-0.5" />
                      <span>Limited library access with storage for 20 resources</span>
                    </li>
                  </ul>
                  
                  <div className="mt-12 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-80 pt-4 text-center text-[#3b142b] space-y-1">
                    <p className='font-bold text-sm sm:text-base'>Credit card Only</p>
                    <p className='italic text-xs sm:text-sm'>Individual upgrades available within teacher accounts.</p>
                  </div>
                </div>

                {/* School and District Card */}
                <div className="flex-1 relative bg-[#fdf8e7] rounded-2xl shadow-lg border-4 border-pink-500 p-6 sm:p-8 mt-6 lg:mt-0">
                  <span className="absolute -top-3 right-4 bg-pink-500 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg whitespace-nowrap">
                    RECOMMENDED
                  </span>

                  <div className="mb-6 flex">
                    <div className="relative w-20 h-20 shadow-lg rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#f3efda"
                        viewBox="0 0 50 55"
                        className="absolute inset-0 w-full h-full rounded-lg"
                      >
                        <path d="M0 5.28V49.44C0 52.28 2.3 54.58 5.13 54.58H44.86C47.7 54.58 50 52.28 50 49.44V15.98C50 13.66 48.44 11.62 46.2 11.02L6.47 0.32C3.2 -0.55 0 1.9 0 5.28Z" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faSchool}
                          className="text-pink-600 text-3xl"
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-900">
                    School and District
                  </h2>
                  <p className="text-[#3b142b] text-lg sm:text-xl mb-4 sm:mb-6">
                    Get unlimited access plus accommodations, integrations, and
                    standards-alignment upgrades for students and teachers.
                  </p>

                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg w-full mb-4 sm:mb-6 text-base sm:text-lg transition-colors">
                    Request a quote →
                  </button>

                  <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg mb-6">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span>Everything in Starter, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Unlimited access to question types, storage, and premium resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Choose from 5 formats, 18 question types, and flexible modes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Differentiate for every student with accommodations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>LMS, LTI, and rostering integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Anti-cheating and test prep upgrades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Standards-aligned tagging and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusIcon className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>District-level data privacy, security, and support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 sm:mt-8 pt-4 text-center text-[#3b142b] space-y-1">
                    <p className='font-bold text-sm sm:text-base'>Purchase Order (PO)</p>
                    <p className='italic text-xs sm:text-sm'>Payable via check, credit card, or ACH Transfer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table Section */}
          <div className="w-full bg-[#f2efda] py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <ComparePlansTable />
            </div>
          </div>
          <PlansFAQ />

          {/* CTA Section */}
          <div className="w-full bg-[#f2efda] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3b142b] px-2">
                Find your way <span className="italic">forward</span>
              </h2>
            </div>
          </div>
        </main>
        <div className="bg-[#f2efda] px-4 sm:px-6 lg:px-8">
          <ButtonsGroup2 />
          <Footer />
        </div>
        
      </div>
    </ParallaxProvider>
  );
};

export default Plans;
