import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

/**************************************
 * Progress Indicator
 **************************************/
const ICONS = [
  'fa-edit',
  'fa-user-plus',
  'fa-chalkboard-user',
  'fa-chart-line',
  'fa-file-export',
];

const ProgressIndicator = memo(function ProgressIndicator({ activeIndex, isDark = false, total = ICONS.length }) {
  return (
    <div className="flex items-center justify-center mb-10 mt-10 px-8">
      {Array.from({ length: total }).map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={`h-1 flex-1 max-w-16 ${isDark ? 'bg-white/30' : 'bg-[#3b142b]/30'} ${
                index <= activeIndex ? (isDark ? '!bg-[#f2efda]' : '!bg-[#3b142b]') : ''
              }`}
            />
          )}

          <div className="relative w-16 h-16 flex items-center justify-center">
            <div
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                isDark ? 'border-white/30' : 'border-[#3b142b]/30'
              } ${
                index <= activeIndex
                  ? (isDark ? '!border-[#f2efda] bg-[#f2efda]' : '!border-[#3b142b] bg-[#3b142b]')
                  : ''
              }`}
            >
              <i
                className={`fas ${ICONS[index]} text-2xl ${
                  isDark
                    ? index <= activeIndex
                      ? 'text-[#3b142b]'
                      : 'text-white/30'
                    : index <= activeIndex
                      ? 'text-white'
                      : 'text-[#3b142b]/30'
                }`}
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
});


/**************************************
 * Card Configs (separated per card)
 * — Keeping design & features identical
 **************************************/
const CREATE_CARD = {
  id: 1,
  icon: (
    <div className="p-3">
      <i className="fas fa-edit text-[#f2efda] text-6xl" />
    </div>
  ),
  title: 'CREATE',
  heading: 'Unleash human potential with AI',
  text: 'With advanced AI, Wayground for Business makes training simple.\n\n Simply drag and drop a presentation, video or other source into the program and AI turns it into a quiz or lesson. Use AI to automate learner assessment, instantly translate learning materials into new languages, deliver personalized feedback, scale learning and cut admin overheads.',
  bg: 'bg-[#3b142b]',
  textColor: 'text-white',
  accent: 'text-[#f2efda]',
  image: '/images/Business/card-1.png',
  imageClass: 'mb-0 object-bottom',
  progressIndex: 0,
  isDark: true,
};

const ASSIGN_CARD = {
  id: 2,
  icon: (
    <div className="p-3">
      <i className="fas fa-user-plus text-[#3b142b] text-6xl" />
    </div>
  ),
  title: 'ASSIGN',
  heading: 'Personalized learning, goals & accountability',
  text: 'In Wayground for Business it is easy to create tailored quizzes, lessons and courses and then to assign these, with a single click, to students. Through an intuitive dashboard, trainers can monitor learner progress. They can also see at a glance where training is effective and where further optimization is needed.',
  bg: 'bg-[#f2efda]',
  textColor: 'text-[#3b142b]',
  accent: 'text-[#3b142b]',
  image: '/images/Business/card-2.png',
  progressIndex: 1,
  isDark: false,
};

const LEARN_CARD = {
  id: 3,
  icon: (
    <div className="p-3">
      <i className="fas fa-chalkboard-teacher text-[#f2efda] text-6xl" />
    </div>
  ),
  title: 'LEARN',
  heading: 'Drive engagement with cognitive science',
  text:
    'Using intelligent gamification and cognitive insights into how people really learn, Wayground for Business turns passive participation into active learning that drives retention. With gamified learning, your staff will hit their goals faster, retain knowledge more efficiently, enjoy the learning experience more and be more likely to complete their courses.',
  bg: 'bg-[#3b142b]',
  textColor: 'text-white',
  accent: 'text-[#f2efda]',
  image: '/images/Business/card-3.png',
  progressIndex: 2,
  isDark: true,
};

const ASSESS_CARD = {
  id: 4,
  icon: (
    <div className="p-3">
      <i className="fas fa-chart-line text-[#3b142b] text-6xl" />
    </div>
  ),
  title: 'ASSESS',
  heading: 'Deliver improvements with learning insights',
  text:
    'With an intuitive dashboard and sophisticated detailed reporting, Wayground for Business gives you instant visibility and insights into training impact across teams, regions and functions. Powerful, real-time analytics provide you with the insights you need to track progress, identify knowledge gaps and make data-driven decisions to improve learning outcomes.',
  bg: 'bg-[#f2efda]',
  textColor: 'text-[#3b142b]',
  accent: 'text-[#3b142b]',
  image: '/images/Business/card-4.png',
  progressIndex: 3,
  isDark: false,
};

const INTEGRATE_CARD = {
  id: 5,
  icon: (
    <div className="p-3">
      <i className="fas fa-file-export text-[#f2efda] text-6xl" />
    </div>
  ),
  title: 'INTEGRATE',
  heading: 'Works with the tools you already use',
  text:
    'Wayground for Business has off-the-shelf integrations for Canvas, Moodle, Microsoft Teams, Adobe, Slack and Brightspace, ready for you to use. The platform also integrates smoothly and seamlessly with the widest possible range of Learning Management Systems and other learning platforms, with its easy-to-use REST API.',
  bg: 'bg-[#3b142b]',
  textColor: 'text-white',
  accent: 'text-[#f2efda]',
  image: '/images/Business/card-5-1.png',
  progressIndex: 4,
  isDark: true,
};

/**
 * Export each card separately as components, if you want to import/use individually.
 * (Feature/design unchanged — just a convenience API.)
 */
export const CreateCard = (props) => <Card card={CREATE_CARD} {...props} />;
export const AssignCard = (props) => <Card card={ASSIGN_CARD} {...props} />;
export const LearnCard = (props) => <Card card={LEARN_CARD} {...props} />;
export const AssessCard = (props) => <Card card={ASSESS_CARD} {...props} />;
export const IntegrateCard = (props) => <Card card={INTEGRATE_CARD} {...props} />;

/**************************************
 * ScrollCards1 (container)
 **************************************/
const CARDS = [CREATE_CARD, ASSIGN_CARD, LEARN_CARD, ASSESS_CARD, INTEGRATE_CARD];

const Card = memo(function Card({ card, isActive }) {
  return (
    <div
      className={`relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${card.bg} ${card.textColor} min-h-screen flex flex-col`}
    >
      {/* Progress */}
      <div className="w-full pt-8 px-8">
        <ProgressIndicator activeIndex={card.progressIndex} isDark={card.isDark} />
      </div>

      {/* Content */}
      <div className="w-full px-12 pb-12 flex-grow flex flex-col">
        <motion.div 
          className={`flex flex-col ${card.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center flex-grow`}
          initial={false}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 px-6">
            <motion.div 
              className="relative overflow-hidden h-full flex items-center leading-none"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className={`block w-full max-w-[80%] mx-auto object-contain ${card.imageClass || ''}`} 
              />
            </motion.div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 flex flex-col justify-center">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              {card.icon}
              <span className={`uppercase font-bold tracking-widest text-3xl ${card.accent}`}>{card.title}</span>
            </motion.div>
            <motion.h2 
              className="text-5xl font-bold mb-4 leading-tight"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              {card.heading}
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              {card.text
                .split('. ')
                .filter(Boolean)
                .map((paragraph, i, arr) => (
                  <p key={i} className="text-lg leading-relaxed opacity-90">
                    {paragraph + (i < arr.length - 1 ? '.' : '')}
                  </p>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default function ScrollCards1() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardHeight = 1 / CARDS.length;
      const index = Math.min(Math.floor(latest / cardHeight), CARDS.length - 1);
      setActiveIndex(index);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${CARDS.length * 100}vh` }}
    >
      {CARDS.map((card, index) => {
        const start = index / CARDS.length;
        const end = (index + 1) / CARDS.length;
        // For the first card, start from 0% to prevent initial space
        const y = useTransform(scrollYProgress, [start, end], [index === 0 ? '0%' : '100%', '0%']);
        
        return (
          <motion.div
            key={card.id}
            style={{ 
              y,
              zIndex: index + 1  // Later cards will have higher z-index
            }}
            className="sticky top-0 h-screen w-full will-change-transform"
          >
            <Card 
              card={{
                ...card,
                progressIndex: index <= activeIndex ? index : 0
              }} 
              isActive={activeIndex === index} 
            />
          </motion.div>
        );
      })}
    </div>
  );
}