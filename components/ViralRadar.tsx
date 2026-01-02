
import React, { useState } from 'react';
import { Search, Loader2, Play, Info, Sparkles, TrendingUp, ChevronRight, BarChart3 } from 'lucide-react';
import { analyzeViralVideo } from '../services/geminiService';
import { AnalysisReport } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ViralRadar: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AnalysisReport | null>(null);
  const [activeTab, setActiveTab] = useState<'hook' | 'script' | 'strategy'>('hook');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    try {
      const data = await analyzeViralVideo(url);
      setReport(data);
    } catch (err) {
      alert("Failed to analyze. Please try a valid URL.");
    } finally {
      setLoading(false);
    }
  };

  const chartData = report?.breakdown.map((item, idx) => ({
    time: item.time,
    prob: item.score
  })) || [];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Viral Radar</h1>
        <p className="text-gray-400">Paste a video link to deconstruct its virality DNA.</p>
      </div>

      {/* URL Input */}
      <form onSubmit={handleAnalyze} className="max-w-3xl mb-12">
        <div className="relative group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube, TikTok or Instagram link here..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-32 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-500"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            Analyze
          </button>
        </div>
      </form>

      {report && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
          {/* Left Column: Player & Chart */}
          <div className="lg:col-span-8 space-y-8">
            <div className="aspect-video glass rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center bg-black/40">
               <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                    <Play className="text-blue-500 fill-blue-500" size={32} />
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Video Analytics Preview</p>
               </div>
               {/* Retention Overlay Sim */}
               <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent p-6">
                 <div className="flex items-center gap-2 mb-2">
                   <TrendingUp className="text-green-500" size={16} />
                   <span className="text-xs font-bold text-white uppercase">Retention Heatmap</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="h-full bg-green-500 w-[40%]"></div>
                    <div className="h-full bg-orange-500 w-[15%]"></div>
                    <div className="h-full bg-red-500 w-[10%]"></div>
                    <div className="h-full bg-green-500 w-[35%]"></div>
                 </div>
               </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2">
                  <BarChart3 size={18} className="text-blue-500" />
                  Viral Retention Probability
                </h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-gray-500">Engagement</span>
                  </div>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                    <XAxis dataKey="time" stroke="#666" fontSize={10} />
                    <YAxis stroke="#666" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '8px' }}
                      itemStyle={{ color: '#3B82F6' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="prob" 
                      stroke="#3B82F6" 
                      strokeWidth={3} 
                      dot={{ fill: '#3B82F6', strokeWidth: 2 }} 
                      activeDot={{ r: 6, fill: '#60A5FA' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column: AI Insights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-2xl overflow-hidden border border-white/10">
              <div className="flex border-b border-white/10">
                {(['hook', 'script', 'strategy'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab ? 'text-blue-400 bg-blue-500/5' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                    <p className="text-sm leading-relaxed text-gray-300">
                      {report.insights[activeTab]}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 py-2 border-t border-white/5">
                    <div className="flex-1">
                      <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Impact Score</p>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500" 
                          style={{ width: `${activeTab === 'hook' ? report.hookScore : activeTab === 'script' ? report.retentionScore : report.shareability}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-blue-400">
                       {activeTab === 'hook' ? report.hookScore : activeTab === 'script' ? report.retentionScore : report.shareability}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold mb-6 flex items-center justify-between">
                <span>Script Breakdown</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">AI DETECTED</span>
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-white/5"></div>
                {report.breakdown.map((line, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-[#121212] z-10 transition-colors ${
                      line.score > 85 ? 'border-green-500 text-green-500' : line.score > 70 ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-gray-500'
                    }`}>
                      <span className="text-[10px] font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-gray-500">{line.time}</span>
                        <span className={`text-[10px] font-bold ${line.score > 85 ? 'text-green-500' : 'text-blue-500'}`}>{line.score}% Viral</span>
                      </div>
                      <p className="text-xs text-gray-300 italic mb-2">"{line.text}"</p>
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5 group-hover:bg-white/[0.08] transition-all">
                        <p className="text-[10px] text-gray-400 leading-tight">
                          <Info size={10} className="inline mr-1 text-blue-500" />
                          {line.suggestion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViralRadar;
