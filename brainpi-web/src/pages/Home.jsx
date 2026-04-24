import React from 'react';
import { ArrowRight, Bot, Rocket, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80" 
            alt="Robotics Lab" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              The Future of STEM Education
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Building Future <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Innovators Today.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              BrainPi Innovation Lab provides world-class robotics, drone technology, and AI training specifically designed for schools and aspiring young engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/robotics" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all group">
                Explore Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/lab-setup" className="flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all">
                Setup a Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS --- */}
      <section className="py-12 border-y border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Schools Partnered', value: '50+' },
              { label: 'Students Trained', value: '10k+' },
              { label: 'Robotic Kits', value: '25+' },
              { label: 'Expert Mentors', value: '100+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE FOCUS AREAS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We provide comprehensive training across the most sought-after technologies in the modern world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FocusCard 
            icon={<Bot className="text-blue-500" size={32} />}
            title="Robotics"
            desc="Hands-on learning with Arduino, Raspberry Pi, and industrial-grade robotic components."
          />
          <FocusCard 
            icon={<Rocket className="text-purple-500" size={32} />}
            title="Drones"
            desc="Mastering UAV flight physics, assembly, and autonomous programming."
          />
          <FocusCard 
            icon={<Cpu className="text-emerald-500" size={32} />}
            title="AI & Coding"
            desc="Introduction to Machine Learning, Python, and neural networks for young minds."
          />
        </div>
      </section>
    </div>
  );
};

// Reusable component for the Expertise section
const FocusCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
    <div className="mb-6 p-4 rounded-2xl bg-slate-950 w-fit group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;