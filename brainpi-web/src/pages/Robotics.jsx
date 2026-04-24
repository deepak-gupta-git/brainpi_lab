import React from 'react';
import { Settings, Cpu, Layers, Award, CheckCircle2 } from 'lucide-react';

const Robotics = () => {
  const curriculum = [
    { level: "Beginner", age: "Ages 8-11", topics: ["Introduction to Sensors", "Basic Circuitry", "Block-based Programming"] },
    { level: "Intermediate", age: "Ages 12-14", topics: ["Arduino Micro-controllers", "C++ Programming", "Mechanical Assembly"] },
    { level: "Advanced", age: "Ages 15+", topics: ["Raspberry Pi Integration", "Internet of Things (IoT)", "Autonomous Navigation"] }
  ];

  return (
    <div className="bg-slate-950">
      {/* --- HEADER --- */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Robotics <span className="text-blue-500">Training</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between theoretical science and practical engineering with our modular robotics kits and expert-led curriculum.
          </p>
        </div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80" 
              alt="Robotic Arm" 
              className="relative rounded-2xl border border-slate-800"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose BrainPi Robotics?</h2>
            <div className="space-y-6">
              <FeatureItem 
                icon={<Cpu className="text-blue-400" />} 
                title="Industrial Hardware" 
                desc="Students work with genuine components like Arduino, ESP32, and Servo motors." 
              />
              <FeatureItem 
                icon={<Layers className="text-blue-400" />} 
                title="Modular Learning" 
                desc="Step-by-step progress from basic mechanics to complex logic." 
              />
              <FeatureItem 
                icon={<Award className="text-blue-400" />} 
                title="Certification" 
                desc="Each student receives a recognized certificate upon course completion." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CURRICULUM GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">The Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curriculum.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-colors">
              <span className="text-blue-500 font-mono text-sm font-bold uppercase tracking-widest">{item.level}</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">{item.age}</h3>
              <div className="h-1 w-12 bg-blue-500 mb-6"></div>
              <ul className="space-y-4">
                {item.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-800 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to bring Robotics to your school?</h2>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors">
            Download Prospectus
          </button>
        </div>
      </section>
    </div>
  );
};

// Sub-component for the Feature list
const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="p-3 bg-blue-500/10 rounded-xl h-fit">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Robotics;