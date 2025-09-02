import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/signup';
import JoinGame from './pages/JoinGame';
import SchoolDistrict from './pages/SchoolDistrict';
import GetQuote from './pages/GetQuote';
import Plans from './pages/Plans';
import Business from './pages/Business';

// Create some basic page components
const Features = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Features</h1></div>;
const Learn = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Learn</h1></div>;
const Pricing = () => <div className="flex-1 p-8 ml-[260px] mt-16"><h1 className="text-2xl font-bold">Pricing</h1></div>;

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to top on route change
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      </Routes>
    </div>
  );
}

export default App;
