import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import Robotics from './pages/Robotics';
import Drones from './pages/Drones';
import AI from './pages/AI';
import LabSetup from './pages/LabSetup';
import Blog from './pages/Blog'
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';




// Page Imports

// import About from './pages/About';
// import Robotics from './pages/Robotics';
// import Drones from './pages/Drones';
// import AI from './pages/AI';
// import LabSetup from './pages/LabSetup';
// import Gallery from './pages/Gallery';
// import Events from './pages/Events';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

// ScrollToTop Helper: Ensures page starts at top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Helper to reset scroll position on route change */}
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
        <Navbar/>   

        <main className="flex-grow pt-20"> {/* pt-20 accounts for the fixed Navbar height */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/robotics" element={<Robotics/>} />
            <Route path="/drones" element={<Drones/>} />
            <Route path="/ai" element={<AI/>} />
            <Route path="/lab-setup" element={<LabSetup/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} /> 
            
            {/* 404 Route - Optional but professional */}
            <Route path="*" element={
              <div className="h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-blue-500">404</h1>
                <p className="text-xl text-gray-400 mt-4">System Error: Page Not Found</p>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;