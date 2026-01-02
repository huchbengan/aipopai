
import React, { useState } from 'react';
import { LayoutGrid, Flame, TrendingUp, Filter, Sparkles, ArrowUpRight, Play, Info, X, Zap } from 'lucide-react';
import { HUB_VIDEOS } from '../constants';
import { ViralHubVideo } from '../types';

interface ViralHubProps {
  onRemix: (script: string) => void;
}

const ViralHub: React.FC<ViralHubProps> = ({ onRemix }) => {
  const categories = ['All', 'Tech', 'Finance', 'ASMR', 'Lifestyle', 'Gaming'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<ViralHubVideo | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? HUB_VIDEOS 
    : HUB_VIDEOS.filter(v => v.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Viral Hub</h1>
          <p className="text-gray-400 text-lg">Discovery engine for high-growth video formats.</p>
        </div>
        <div className="flex items-center gap-2 p-1 glass rounded-2xl border border-white/10 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            onClick={() => setSelectedVideo(video)}
            className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all cursor-pointer flex flex-col"
          >
            <div className="relative aspect-video">
              <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={video.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-blue-600 text-[10px] font-black text-white px-2 py-1 rounded-lg uppercase tracking-widest shadow-lg">
                  {video.category}
                </span>
                <span className="bg-green-500 text-[10px] font-black text-white px-2 py-1 rounded-lg uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Flame size={10} className="fill-white" /> {video.growthRate}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 glass p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-blue-400" />
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">{video.creator}</span>
                <span className="text-xs text-gray-400 font-bold">{video.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Deep Dive Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass max-w-4xl w-full max-h-[90vh] rounded-[40px] border border-white/20 overflow-hidden flex flex-col animate-in zoom-in duration-300">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Sparkles size={18} className="text-white fill-white" />
                </div>
                <h2 className="text-xl font-bold">Viral DNA Report</h2>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black relative group">
                    <img src={selectedVideo.thumbnail} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                         <Play size={28} className="text-white fill-white ml-1" />
                       </div>
                    </div>
                  </div>
                  <div className="glass p-6 rounded-3xl border border-white/10">
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">AI Narrative Summary</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {selectedVideo.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{selectedVideo.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVideo.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white mb-1">The Viral Hook</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{selectedVideo.dna.hook}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white mb-1">Visual Strategy</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{selectedVideo.dna.visualStyle}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white mb-1">Audio Strategy</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{selectedVideo.dna.audioStrategy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/30 p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/30">
                    <Sparkles size={28} className="text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Recreate this format?</h4>
                    <p className="text-blue-300 text-sm">ViraGo AI will adapt this DNA to your specific niche.</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    onRemix(selectedVideo.summary);
                    setSelectedVideo(null);
                  }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Start Remixing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3B82F6; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ViralHub;
