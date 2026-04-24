import React from 'react';
import { Target, Eye, Users, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Pioneering the <span className="text-blue-500 text-glow">Future</span> of STEM
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed italic">
          "At BrainPi, we believe every child has the potential to be an architect of the future. 
          We provide the tools, the technology, and the mentorship to make it happen."
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800">
            <Target className="text-blue-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To democratize advanced technology education by bringing high-end robotics, 
              drones, and AI labs to schools across the globe, ensuring students are 
              future-ready.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800">
            <Eye className="text-purple-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the world's leading innovation partner for educational institutions, 
              creating a generation of problem solvers and technological leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest">Why BrainPi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <ValueCard icon={<Users className="mx-auto text-blue-500" />} title="Expert Mentors" desc="Our team consists of industry veterans and research scholars." />
          <ValueCard icon={<Zap className="mx-auto text-yellow-500" />} title="Hands-on Learning" desc="90% of our training is practical and kit-based." />
          <ValueCard icon={<ShieldCheck className="mx-auto text-emerald-500" />} title="Global Standards" desc="Our curriculum aligns with international STEM standards." />
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="group">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;