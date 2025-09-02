import React, { useState } from 'react';

const FAQS = [
  { 
    q: "What is Wayground for Business?", 
    a: "Wayground for Business is an omni-channel (desktop and mobile) learning platform perfectly suited for your company's training needs. Wayground for Business makes training interactive with gamification, interactive question types, leaderboards and detailed reporting. Use it for employee onboarding, compliance training, frontline training, sales training, assessments, large events and other L&D training programs." 
  },
  { 
    q: "How many participants can join a Wayground for Business session?", 
    a: "This varies by plan. For essential plans, maximum of 150 participants can join a training session (Self paced or Live). For Pro plans the limit is 1000 participants at once. If you require higher participant limits, contact our sales team to get a custom Enterprise account. <a href='#' class='underline'>Learn more about our plans</a>" 
  },
  { 
    q: "How can I use AI on Wayground for Business plans?", 
    a: `Wayground for Business offers you an AI-powered training content creation tool (AI Studio) and an AI response evaluation tool. Here's what you can do:
    <ul class="list-disc pl-5 space-y-2 mt-2">
      <li>Add any website URLs or provide a custom prompt to create question banks in minutes</li>
      <li>Upload your current training material (PPT, PDF, JPG) and AI will automatically generate questions</li>
      <li>Evaluate participant video or audio responses with AI, measuring tonality, confidence, and other custom parameters</li>
    </ul>
    <a href="#" class="underline hover:no-underline">Learn more about AI Studio</a>`
  },
  { 
    q: "What is an AI-assisted interactive presentation?", 
    a: "You can import existing slides or create new ones and then add interactive questions and polls to create engaging presentations. We call these interactive presentations. Our slide importer supports .ppt (PowerPoint), PDF, and Google Slides. <a href='#' class='underline'>Learn more about interactive presentations</a>" 
  },
  { 
    q: "Does Wayground for Business integrate with Google Slides?", 
    a: "Yes, you can sync your Google Slides with one click. Wayground for Business also provides a way to auto-sync your Google Slides, making it easy to collaborate with your team and keep presentations up-to-date. <a href='#' class='underline'>Visit our Help Center</a>" 
  },
  { 
    q: "Does Wayground for Business integrate with Microsoft PowerPoint?", 
    a: "Yes, you can sync your PowerPoint presentations with one click by importing your content. This makes it easy to collaborate with your team and keep presentations up-to-date. <a href='#' class='underline'>Learn more in our Help Center</a>" 
  },
  { 
    q: "What's included in your pricing?", 
    a: "Our pricing is tailored to each project, but typically includes strategy, design, development, and post-launch support. <a href='#' class='underline'>View our pricing plans</a>" 
  },
  { 
    q: "What kind of reporting and analytics is provided in Wayground for Business?", 
    a: "Wayground for Business provides comprehensive reporting for each session, including accuracy, time spent at each question level, group-level analytics, and question-level analytics. More advanced analytics are available for Enterprise-level customers. <a href='#' class='underline'>Explore our reporting features</a>" 
  },
  { 
    q: "What are visual learning question types?", 
    a: "Visual learning questions make the learner's experience interactive and highly visual, including Matching, Reorder, Hotspot, and Drag and Drop formats. These have been proven to significantly improve memory retention. <a href='#' class='underline'>See examples of visual learning questions</a> (Pro or Enterprise plan required)" 
  },
  { 
    q: "What are the different Live and Asynchronous modes available?", 
    a: `You can host two types of sessions on Wayground:
    <div class="mt-3 space-y-3">
      <div>
        <strong>Live Sessions:</strong>
        <p class="mt-1">Ideal for real-time interaction with participants. Choose from different game modes like Classic, Team, or Test Mode.</p>
      </div>
      <div>
        <strong>Assigned Sessions:</strong>
        <p class="mt-1">Perfect when participants can't attend live or for homework assignments. Set a session deadline, and the session code remains active throughout that period.</p>
      </div>
    </div>
    <a href="#" class="underline hover:no-underline inline-block mt-2">Learn more about session modes</a>`
  },
  { 
    q: "Can I sign up for free?", 
    a: "Yes! Start with our 14-day free trial. No credit card required. Test all features including Quizzes, Interactive Lessons, and AI-powered video creation. <a href='#' class='underline'>Start your free trial</a>" 
  },
  { 
    q: "Can I use Wayground for Business in languages other than English?", 
    a: "Yes! You can create content in any language to provide a native language experience for your participants. <a href='#' class='underline'>Learn more about language support</a>" 
  },
  { 
    q: "Does Wayground for Business generate questions with AI?", 
    a: "Yes, our AI tools can generate questions from any topic, PDF, URL, or YouTube video, helping you quickly create quizzes or presentation content. <a href='#' class='underline'>Learn more about AI-powered question generation</a>" 
  },
  { 
    q: "How do all features work?", 
    a: "Visit our <a href='#' class='underline'>Help Center</a> for tutorials on getting the most out of Wayground for Business, including branding, challenge assignments, and brainstorming features." 
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
            
            <div className="pt-4">
              {!showMore ? (
                <button
                  onClick={() => setShowMore(true)}
                  className="bg-[#3b142b] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Show more questions
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMore(false);
                    // Optional: Scroll back to the top of the FAQ section
                    document.querySelector('#faq-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#3b142b] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Show less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
