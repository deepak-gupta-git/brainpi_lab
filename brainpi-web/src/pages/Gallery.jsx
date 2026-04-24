import React, { useState } from 'react';

const Gallery = () => {
  const categories = ["All", "Robotics", "Drones", "Workshops"];
  const [activeTab, setActiveTab] = useState("All");

  const images = [
    { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837", cat: "Robotics" },
    { url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e", cat: "Drones" },
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998", cat: "Workshops" },
    { url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0", cat: "Robotics" },
    { url: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f", cat: "Drones" },
    { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", cat: "Workshops" },
  ];

  const filteredImages = activeTab === "All" ? images : images.filter(img => img.cat === activeTab);

  return (
    <div className="bg-slate-950 pt-20 min-h-screen">
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">Visualizing <span className="text-blue-500">Innovation</span></h1>
        
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl border border-slate-800 break-inside-avoid">
              <img 
                src={`${img.url}?auto=format&fit=crop&q=80`} 
                alt={img.cat}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-bold tracking-widest uppercase">{img.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;