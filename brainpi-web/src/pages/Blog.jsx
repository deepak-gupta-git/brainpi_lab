import React from 'react';
import { Clock, User, ArrowUpRight, Search, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Rise of Drones in Agriculture: Beyond the Classroom",
      excerpt: "How the skills learned in our drone labs are preparing students for the next industrial revolution...",
      author: "Admin",
      date: "April 10, 2026",
      readTime: "5 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Why Python is the Gateway to Artificial Intelligence",
      excerpt: "Exploring why we chose Python as the core language for our AI & Coding curriculum for schools...",
      author: "Deepak Gupta",
      date: "March 28, 2026",
      readTime: "8 min",
      category: "Education",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Building Your First Arduino Obstacle Avoider",
      excerpt: "A step-by-step guide on the logic behind our most popular beginner robotics kit...",
      author: "Staff",
      date: "March 15, 2026",
      readTime: "12 min",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-slate-950 pt-20 min-h-screen">
      {/* Search & Filter Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-5xl font-extrabold italic tracking-tighter mb-2">BRAINPI <span className="text-blue-500">INSIGHTS</span></h1>
            <p className="text-slate-500">Latest news, tutorials, and innovation stories.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative group overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/40 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
              <img 
                src={posts[0].image} 
                alt="Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">{posts[0].category}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-400 transition-colors leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-slate-400 mb-8 text-lg">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><User size={14}/> {posts[0].author}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {posts[0].readTime}</span>
                </div>
                <button className="p-4 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden border border-slate-800 mb-6 aspect-video">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="space-y-3">
                <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">{post.category}</span>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="pt-4 flex items-center gap-4 text-xs text-slate-600 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;