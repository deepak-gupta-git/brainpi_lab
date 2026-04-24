import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Robotics Lab Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'll call your Express API
    console.log("Form Submitted:", formData);
    alert("Message sent to BrainPi Innovation Lab!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-950 pt-20 min-h-screen">
      {/* Header Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 italic tracking-tight">
          CONNECT WITH <span className="text-blue-500 text-not-italic">US</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Whether you're looking to setup a lab in your school or want to join a workshop, 
          our team is ready to assist you.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
              <p className="text-slate-400 mb-8">
                Visit our innovation hub or reach out via phone/email. We typically respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <ContactInfoCard 
                  icon={<Mail className="text-blue-500" />} 
                  title="Email Us" 
                  detail="hello@brainpi.in" 
                />
                <ContactInfoCard 
                  icon={<Phone className="text-blue-500" />} 
                  title="Call Us" 
                  detail="+91 98765 43210" 
                />
                <ContactInfoCard 
                  icon={<MapPin className="text-blue-500" />} 
                  title="Visit Lab" 
                  detail="123 Innovation Drive, Tech Park, New Delhi, India" 
                />
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="h-64 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                  {/* You can replace this with a real Google Maps Iframe later */}
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" alt="Map" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10 bg-slate-950/80 px-6 py-2 rounded-full border border-slate-700 text-sm font-bold">
                  Locate on Google Maps
               </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-blue-500" /> Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" name="name" required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Deepak Gupta"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" name="email" required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="deepak@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Inquiry Type</label>
                <select 
                  name="subject"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  onChange={handleChange}
                >
                  <option>Robotics Lab Setup</option>
                  <option>Drone Training Workshop</option>
                  <option>AI Curriculum for Schools</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your requirements..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20"
              >
                Send Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, detail }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-blue-500/10 rounded-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-white text-lg">{title}</h4>
      <p className="text-slate-400">{detail}</p>
    </div>
  </div>
);

export default Contact;