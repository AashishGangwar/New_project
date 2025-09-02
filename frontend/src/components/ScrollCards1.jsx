import React, { memo } from "react";
import { ProgressIndicator } from "./ProgressIndicator"; // keep your existing component

// ----------------------
// Card Configs
// ----------------------

const ICONS = [
  'fa-edit',
  'fa-user-plus',
  'fa-chalkboard-user',
  'fa-chart-line',
  'fa-file-export',
];

const CREATE_CARD = {
  id: 1,
  icon: (
    <div className="p-3">
      <i className="fas fa-edit text-5xl text-[#f2efda]"></i>
    </div>
  ),
  title: "CREATE",
  heading: "Unleash human potential with AI",
  text: "With advanced AI, Wayground for Business makes training simple. Drag and drop a presentation, video, or other source into the program and AI turns it into a quiz or lesson. Use AI to automate learner assessment, translate materials instantly, deliver feedback, scale learning, and cut admin overheads.",
  bg: "bg-[#3b142b]",
  textColor: "text-white",
  accent: "text-[#FF8A3D]",
  image: "/images/Business/card-1.png",
  progressIndex: 0,
  isDark: true,
};

const ASSIGN_CARD = {
  id: 2,
  icon: (
    <div className="p-3">
      <i className="fas fa-user-plus text-5xl text-[#3b142b]"></i>
    </div>
  ),
  title: "ASSIGN",
  heading: "Personalized learning & accountability",
  text: "In Wayground for Business it’s easy to create tailored quizzes, lessons, and courses, then assign them with a click. Trainers track learner progress in a clean dashboard, instantly seeing what’s working and what needs optimizing.",
  bg: "bg-[#f2efda]",
  textColor: "text-[#3b142b]",
  accent: "text-[#3b142b]",
  image: "/images/Business/card-2.png",
  progressIndex: 1,
  isDark: false,
};

const LEARN_CARD = {
  id: 3,
  icon: (
    <div className="p-3">
      <i className="fas fa-chalkboard-user text-5xl text-[#f2efda]"></i>
    </div>
  ),
  title: "LEARN",
  heading: "Drive engagement with cognitive science",
  text: "Using gamification and cognitive insights into how people really learn, Wayground for Business turns passive participation into active learning that drives retention. Your staff will hit goals faster, retain knowledge longer, and enjoy learning more.",
  bg: "bg-[#3b142b]",
  textColor: "text-white",
  accent: "text-[#FF8A3D]",
  image: "/images/Business/card-3.png",
  progressIndex: 2,
  isDark: true,
};

const ASSESS_CARD = {
  id: 4,
  icon: (
    <div className="p-3">
      <i className="fas fa-chart-line text-5xl text-[#3b142b]"></i>
    </div>
  ),
  title: "ASSESS",
  heading: "Deliver improvements with learning insights",
  text: "With intuitive dashboards and detailed reporting, Wayground for Business gives instant visibility into training impact across teams and functions. Analytics highlight progress, gaps, and outcomes so you can make data-driven improvements.",
  bg: "bg-[#f2efda]",
  textColor: "text-[#3b142b]",
  accent: "text-[#3b142b]",
  image: "/images/Business/card-4.png",
  progressIndex: 3,
  isDark: false,
};

const INTEGRATE_CARD = {
  id: 5,
  icon: (
    <div className="p-3">
      <i className="fas fa-file-export text-5xl text-[#f2efda]"></i>
    </div>
  ),
  title: "INTEGRATE",
  heading: "Works with the tools you already use",
  text: "Wayground for Business integrates with Canvas, Moodle, Teams, Adobe, Slack, and Brightspace. It also connects seamlessly to a wide range of LMSs and platforms via its simple REST API, ensuring your tools work together.",
  bg: "bg-[#3b142b]",
  textColor: "text-white",
  accent: "text-[#FF8A3D]",
  image: "/images/Business/card-5-1.png",
  progressIndex: 4,
  isDark: true,
};

// ----------------------
// Card + Container
// ----------------------

const CARDS = [CREATE_CARD, ASSIGN_CARD, LEARN_CARD, ASSESS_CARD, INTEGRATE_CARD];

const Card = memo(function Card({ card }) {
  return (
    <div
      className={`relative overflow-hidden shadow-xl ${card.bg} ${card.textColor} min-h-screen flex flex-col`}
    >
      {/* Progress bar */}
      <div className="w-full pt-8 px-8">
        <ProgressIndicator activeIndex={card.progressIndex} isDark={card.isDark} />
      </div>

      {/* Content */}
      <div className="w-full px-8 md:px-12 pb-12 flex-grow flex flex-col">
        <div
          className={`flex flex-col ${
            card.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center flex-grow`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 px-6">
            <img
              src={card.image}
              alt={card.title}
              className="block w-full max-w-[80%] mx-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              {card.icon}
              <span className={`uppercase font-bold tracking-widest text-3xl ${card.accent}`}>
                {card.title}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {card.heading}
            </h2>
            <p className="text-lg leading-relaxed opacity-90">{card.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

// ----------------------
// Main Export
// ----------------------

export default function ScrollCards1() {
  return (
    <>
      {/* Desktop sticky scroll */}
      <div className="hidden md:block">
        {CARDS.map((card, index) => (
          <div key={card.id} className="h-screen">
            <div className="sticky top-16 h-screen">
              <Card card={{ ...card, progressIndex: index }} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile normal flow */}
      <div className="block md:hidden">
        {CARDS.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </>
  );
}
