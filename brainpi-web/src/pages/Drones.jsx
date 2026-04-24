import React from 'react';
import { Wind, Navigation, Radio, Terminal, ShieldAlert, Cpu } from 'lucide-react';

const Drones = () => {
  const specializations = [
    {
      title: "UAV Assembly",
      icon: <Settings className="text-blue-400" />,
      desc: "Understanding frame geometry, BLDC motors, ESCs, and flight controllers."
    },
    {
      title: "Flight Physics",
      icon: <Wind className="text-blue-400" />,
      desc: "Mastering lift, thrust, drag, and the aerodynamics of multi-rotor systems."
    },
    {
      title: "Autonomous AI",
      icon: <Terminal className="text-blue-400" />,
      desc: "Programming drones for waypoint navigation and object avoidance using Python."
    }
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80" 
            alt="Drone in sky" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
            SKY-BOUND <span className="text-blue-500 text-not-italic">INNOVATION</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light tracking-wide">
            Mastering the art and science of Unmanned Aerial Systems. From assembly to autonomous flight.
          </p>
        </div>
      </section>

      {/* --- TECH SPECS GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {specializations.map((spec, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 transition-all">
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {spec.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{spec.title}</h3>
              <p className="text-slate-400 leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE TRAINING SECTION --- */}
      <section className="py-20 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Simulator to <span className="text-blue-500">Real Skies</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We provide a safe learning environment using high-end FPV (First Person View) simulators before students ever take a real drone to the field. Our safety-first protocol ensures every student understands airspace regulations and emergency procedures.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Navigation className="text-blue-500" size={20}/> GPS & Waypoint Mission Planning</li>
              <li className="flex items-center gap-3"><Radio className="text-blue-500" size={20}/> Telemetry & Radio Frequency Basics</li>
              <li className="flex items-center gap-3"><ShieldAlert className="text-blue-500" size={20}/> DGCA Regulations & Safety Briefing</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-blue-500/10">
            <img 
              src="https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80" 
              alt="Drone Control" 
            />
          </div>
        </div>
      </section>

      {/* --- EQUIPMENT SHOWCASE --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 italic">THE GEAR WE USE</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* You can put drone brand logos or component names here */}
            <span className="text-xl font-mono tracking-widest text-white">PX4 AUTOPILOT</span>
            <span className="text-xl font-mono tracking-widest text-white">MAVLINK</span>
            <span className="text-xl font-mono tracking-widest text-white">LIDAR SENSORS</span>
            <span className="text-xl font-mono tracking-widest text-white">FPV DIGITAL</span>
        </div>
      </section>
    </div>
  );
};

// Simple icon placeholder if Settings isn't imported
const Settings = ({className}) => <Cpu className={className} />;

export default Drones;