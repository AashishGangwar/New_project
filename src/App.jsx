import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/signup';
import JoinGame from './pages/JoinGame';
import SchoolDistrict from './pages/SchoolDistrict';
import GetQuote from './pages/GetQuote';
import Plans from './pages/Plans';
import Business from './pages/Business';
import BrowseStandards from './pages/BrowseStandards';
import SubjectPage from './pages/SubjectPage';
import { disableInteractions } from './utils/disableInteractions';

// Create some basic page components
const Features = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Features</h1></div>;
const Learn = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Learn</h1></div>;
const Pricing = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Pricing</h1></div>;

// Simple placeholder component for subject/grade pages
const GradeSubjectPage = () => {
  const { grade, subject } = useParams();
  return (
    <div className="flex-1 p-8 ml-[260px] mt-16">
      <h1 className="text-2xl font-bold">
        {grade ? `${grade} Grade` : 'Subject'} {subject ? `- ${subject}` : ''}
      </h1>
    </div>
  );
};

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to top on route change
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Disable all interactions except navbar
  useEffect(() => {
    const cleanup = disableInteractions();
    return () => cleanup(); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0b4f] to-[#1d0b2e] text-white">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/join-game" element={<JoinGame />} />
          <Route path="/school-district" element={<SchoolDistrict />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/business" element={<Business />} />
          <Route path="/browse/standards" element={<BrowseStandards />} />
          <Route path="/library/grade/:grade" element={<GradeSubjectPage />} />
          <Route path="/library/grade/:grade/subject/:subject" element={<GradeSubjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
