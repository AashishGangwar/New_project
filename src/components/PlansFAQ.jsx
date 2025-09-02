import React, { useState } from 'react';

const FAQS = [
  { 
    q: "Can I purchase a plan with my ESSA, ESSER, EANS, or Title 1 funds?", 
    a: "Yes, Wayground qualifies for federal funding sources including ESSER, EANS, and Title I. We've achieved ESSA Level 3 (Promising Evidence) status based on research showing significant positive relationships with student outcomes across multiple grade levels and subjects. This evidence-based designation makes Wayground eligible for federal funds while supporting key initiatives such as accelerated learning, recovering lost instructional time, high-dosage tutoring, and summer learning programs." 
  },
  { 
    q: "What’s the difference between Wayground Basic and Wayground for School and District?", 
    a: `Our Starter plan is designed to help teachers get started on Wayground for free. A Wayground site-wide plan for your school or district unlocks:
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li>Unlimited library access and storage</li>
      <li>Exclusive features like Standards Tagging, Comprehension Questions, and Accommodation Profiles</li>
      <li>A shared library for collaboration and assessments across your organization</li>
      <li>Easy LMS integrations beyond Google Classroom</li>
      <li>And more!</li>
    </ul>
    <a href="#" class="underline hover:no-underline">Contact us </a> to learn more about how a Wayground plan can help your teachers plan in seconds, not weekends at your organization.`
  },
  { 
    q: "What if my teachers already paid for their own plans?", 
    a: "We’ll fully reimburse teachers at your school or district who paid out of pocket to upgrade to Wayground Super, as long as they upgraded during the current academic year." 
  },
];

function Chevron({ open, className = '' }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function FAQItem({ id, question, answer, openId, setOpenId }) {
  const isOpen = openId === id;
  
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm cursor-pointer transition-all"
      onClick={() => setOpenId(isOpen ? null : id)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-[#3b142b]">
          {question}
        </h3>
        <Chevron open={isOpen} className="text-[#3b142b]" />
      </div>
      {isOpen && (
        <div 
          className="mt-4 text-[#3b142b]/80 prose max-w-none [&_a]:text-[#3b142b] [&_a]:underline [&_a:hover]:no-underline [&_a]:font-medium"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleFaqs = showMore ? FAQS : FAQS.slice(0, 4);

  return (
    <section id="faq-section" className="w-full bg-[#f2efda] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3b142b] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#3b142b]/80">
              Find answers to common questions about our services, process, and how we can help your business succeed.
            </p>
          </div>

          {/* Right side - FAQ Items */}
          <div className="lg:col-span-2 space-y-4">
            {visibleFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                id={index}
                question={faq.q}
                answer={faq.a}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
            
            <div className="text-center text-lg text-[#3b142b] mt-6">More questions? Check out our <a href="#" className="underline hover:no-underline text-pink-500">Help Center</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
