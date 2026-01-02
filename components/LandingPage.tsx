
import React, { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Globe, CheckCircle2, Play } from 'lucide-react';
import { MOCK_VIDEOS } from '../constants';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 animate-pulse-subtle">
          <Sparkles size={14} />
          <span>New: AI Studio 2.0 with Real-time Localization</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          Crack the Viral Code.<br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Go Global with AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Analyze millions of viral videos, optimize your scripts, and generate localized content in seconds with our 2026-ready AI engine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20"
          >
            Get Started for Free <ArrowRight size={20} />
          </button>
          <div className="w-full sm:w-auto glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-[#121212]" alt="user" />
              ))}
            </div>
            <span className="text-sm text-gray-400 font-medium">Joined by 20,000+ Creators</span>
          </div>
        </div>
      </section>

      {/* Viral Feed Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-500" />
            <h2 className="text-2xl font-bold">Today's Trending Analysis</h2>
          </div>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1">
            View All <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_VIDEOS.map((video) => (
            <div key={video.id} className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="relative aspect-video">
                <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <Play className="text-white fill-white" size={24} />
                   </div>
                </div>
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {video.tags.map(tag => (
                    <span key={tag} className="bg-blue-600/80 backdrop-blur text-[10px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">{video.title}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{video.creator}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Optimization Engine</h2>
          <p className="text-gray-400">See how ViraGo transforms raw ideas into global sensations.</p>
        </div>
        
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden glass border border-white/10 group">
          {/* After View */}
          <div className="absolute inset-0 bg-blue-600/5 flex flex-col justify-center px-12 md:px-24">
             <div className="bg-blue-600 p-2 rounded-lg w-fit mb-4">
               <Sparkles className="text-white" size={20} />
             </div>
             <h3 className="text-blue-400 font-bold mb-2">OPTIMIZED GLOBAL SCRIPT</h3>
             <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
               "Wait, did you see that? The future of AI is changing right now, and here are 3 ways you can profit..."
             </p>
          </div>

          {/* Before View (Clip) */}
          <div 
            className="absolute inset-0 bg-[#1a1a1a] flex flex-col justify-center px-12 md:px-24 border-r-2 border-blue-500 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
             <div className="bg-gray-700 p-2 rounded-lg w-fit mb-4">
               <Play className="text-gray-400" size={20} />
             </div>
             <h3 className="text-gray-500 font-bold mb-2 uppercase">Raw Idea</h3>
             <p className="text-xl md:text-2xl font-semibold text-gray-400 leading-relaxed whitespace-nowrap">
               "Hello everyone, today I want to talk about artificial intelligence and how it works..."
             </p>
          </div>

          {/* Draggable Slider */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos} 
            onChange={(e) => setSliderPos(parseInt(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-10"
          />
          <div 
            className="absolute top-0 bottom-0 pointer-events-none" 
            style={{ left: `calc(${sliderPos}% - 1px)` }}
          >
            <div className="h-full w-0.5 bg-blue-500 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass border border-blue-500/50 flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-blue-400"></div>
                  <div className="w-0.5 h-3 bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="bg-blue-600/5 py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">Processing localized video for @Creator{i}...</span>
                <span className="text-green-500/80 font-bold flex items-center gap-1">
                  <CheckCircle2 size={14} /> COMPLETED
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
