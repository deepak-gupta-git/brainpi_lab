import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Ticket } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "National Robo-Race 2026",
      date: "May 15, 2026",
      time: "10:00 AM",
      location: "Delhi Public School, North",
      type: "Competition",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80"
    },
    {
      title: "AI & Drone Workshop",
      date: "June 02, 2026",
      time: "09:30 AM",
      location: "BrainPi Innovation Hub",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-slate-950 pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 italic tracking-tight">
          EVENTS & <span className="text-blue-500">BOOTCAMPS</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Join our upcoming competitions and workshops to test your skills and learn from industry experts.
        </p>
      </section>

      {/* Upcoming Events Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-slate-800 flex-grow"></div>
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-blue-500">Upcoming</h2>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="group flex flex-col md:flex-row bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all">
              {/* Image Side */}
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-500" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-500" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500" /> {event.location}
                    </div>
                  </div>
                </div>

                <button className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold transition-all active:scale-95">
                  <Ticket size={18} /> Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Recap */}
      <section className="py-24 bg-slate-900/20 px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center">Past Highlights</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PastEventCard title="Inter-School Drone Race 2025" stats="40+ Schools" />
              <PastEventCard title="AI for Kids Summit" stats="500+ Attendees" />
              <PastEventCard title="Summer Robotics Camp" stats="Sold Out" />
           </div>
        </div>
      </section>
    </div>
  );
};

const PastEventCard = ({ title, stats }) => (
  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center group cursor-pointer hover:bg-slate-900">
    <div>
      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-sm text-slate-500">{stats}</p>
    </div>
    <ExternalLink size={20} className="text-slate-700 group-hover:text-white" />
  </div>
);

export default Events;