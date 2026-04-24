import React from 'react';
import { Brain, Code2, Database, Network, Terminal, Binary } from 'lucide-react';

const AI = () => {
  const courses = [
    { title: "Python for AI", level: "Beginner", icon: <Binary className="text-yellow-400" /> },
    { title: "Machine Learning", level: "Intermediate", icon: <Database className="text-blue-400" /> },
    { title: "Neural Networks", level: "Advanced", icon: <Network className="text-purple-400" /> },
  ];

  return (
    <div className="bg-slate-950 pt-20">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6">Decoding <span className="text-blue-500">Intelligence.</span></h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We teach students how to build brains for their robots. From basic logic to training 
              deep learning models, our curriculum makes Artificial Intelligence accessible and fun.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center gap-3">
                <Code2 className="text-blue-500" /> <span>Logic Building</span>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center gap-3">
                <Brain className="text-blue-500" /> <span>Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-blue-400">import <span className="text-white">brainpi_ai</span></p>
                <p className="text-purple-400 mt-2">def <span className="text-yellow-400">train_innovator</span><span className="text-white">(student):</span></p>
                <p className="text-white ml-4">intelligence = student.curiosity()</p>
                <p className="text-white ml-4">while (intelligence &lt; infinity):</p>
                <p className="text-green-400 ml-8">student.learn_coding()</p>
                <p className="text-green-400 ml-8">student.build_ai_models()</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">The AI Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-blue-500 transition-all">
                <div className="mb-6 inline-block">{c.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                <p className="text-blue-500 font-semibold">{c.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI;