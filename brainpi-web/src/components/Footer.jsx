// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg"><Cpu className="text-white w-5 h-5" /></div>
              <span className="font-bold text-xl tracking-wider">BRAINPI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of engineers with high-tech robotics, drones, and AI training labs.
            </p>
            {/* <div className="flex gap-4">
              <Instagram className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
              <Youtube className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/events" className="hover:text-blue-500 transition-colors">Upcoming Events</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition-colors">Latest News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/robotics" className="hover:text-blue-500 transition-colors">Robotics Training</Link></li>
              <li><Link to="/drones" className="hover:text-blue-500 transition-colors">Drone Technology</Link></li>
              <li><Link to="/ai" className="hover:text-blue-500 transition-colors">AI & Coding</Link></li>
              <li><Link to="/lab-setup" className="hover:text-blue-500 transition-colors">Innovation Lab Setup</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated with the latest in EdTech.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-500" 
              />
              <button className="absolute right-2 top-1.5 bg-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-500 transition-all">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} BrainPi Innovation Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;