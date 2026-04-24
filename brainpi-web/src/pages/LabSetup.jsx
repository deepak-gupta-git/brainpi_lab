import React from 'react';
import { PenTool, Hammer, Laptop, Users, GraduationCap, Microscope } from 'lucide-react';

const LabSetup = () => {
  const steps = [
    { title: "Consultation", icon: <PenTool />, desc: "Designing a lab space that fits your school's architecture." },
    { title: "Equipment", icon: <Hammer />, desc: "Supplying world-class robotic kits, 3D printers, and drone sets." },
    { title: "Software", icon: <Laptop />, desc: "Setting up all necessary IDEs, simulators, and AI environments." },
    { title: "Mentorship", icon: <Users />, desc: "Training your teachers and providing 24/7 expert support." },
  ];

  return (
    <div className="bg-slate-950 pt-20">
      {/* Infrastructure Hero */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 italic tracking-tight uppercase">
          Transforming <span className="text-blue-500">Classrooms</span>
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed">
          We don't just provide kits; we build environments where innovation breathes. From flooring to 
          high-speed AI workstations, we handle the complete infrastructure setup.
        </p>
      </section>

      {/* Step Process */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="absolute -top-5 left-8 bg-blue-600 p-3 rounded-lg text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Layout Preview */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 italic">World Class Infrastructure</h2>
            <div className="space-y-4">
              <div className="flex gap-3"><Microscope /> <span>Dedicated Robotics Benches</span></div>
              <div className="flex gap-3"><GraduationCap /> <span>Industry Standard Curriculum</span></div>
              <div className="flex gap-3"><Laptop /> <span>Advanced Simulation Stations</span></div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80" 
              alt="Lab Setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabSetup;