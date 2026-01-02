
import React, { useState, useEffect } from 'react';
import { 
  Languages, 
  Mic2, 
  Smile, 
  Loader2, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { optimizeContent } from '../services/geminiService';

interface ContentLabProps {
  initialScript?: string;
}

const ContentLab: React.FC<ContentLabProps> = ({ initialScript = '' }) => {
  const [originalScript, setOriginalScript] = useState(initialScript);
  const [optimizedScript, setOptimizedScript] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [culture, setCulture] = useState('US');
  const [tone, setTone] = useState('Energetic');
  const [lipSync, setLipSync] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (initialScript) {
      setOriginalScript(initialScript);
    }
  }, [initialScript]);

  const handleOptimize = async () => {
    if (!originalScript) return;
    setIsOptimizing(true);
    try {
      const result = await optimizeContent(originalScript, culture, tone);
      setOptimizedScript(result || '');
    } catch (err) {
      alert("Optimization failed.");
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleExport = () => {
    setExporting(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setExporting(false), 2000);
      }
    }, 100);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Content Lab</h1>
          <p className="text-gray-400">Optimize and localize your scripts for global impact.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
          <CheckCircle2 className="text-green-500" size={16} />
          <span className="text-xs font-bold text-green-500">Global Ready Engine v3.1</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Panel */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Localization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Target Culture</label>
                <select 
                  value={culture} 
                  onChange={(e) => setCulture(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="US">🇺🇸 United States</option>
                  <option value="UK">🇬🇧 United Kingdom</option>
                  <option value="IN">🇮🇳 India (English)</option>
                  <option value="BR">🇧🇷 Brazil</option>
                  <option value="JP">🇯🇵 Japan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">AI Voice Tone</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Energetic', 'Narrative', 'Professional', 'Casual'].map(t => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        tone === t ? 'bg-blue-600/10 border-blue-500 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Languages size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-300">Lip-sync Opt.</span>
                    </div>
                    <button 
                      onClick={() => setLipSync(!lipSync)}
                      className={`w-10 h-5 rounded-full relative transition-colors ${lipSync ? 'bg-blue-600' : 'bg-gray-700'}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${lipSync ? 'left-6' : 'left-1'}`}></div>
                    </button>
                 </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Insights</h3>
              <Globe size={16} className="text-blue-500" />
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Cultural Relevance</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[92%]"></div>
                  </div>
                  <span className="text-xs font-bold">92%</span>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Slang Index</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[78%]"></div>
                  </div>
                  <span className="text-xs font-bold">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
            {/* Input Script */}
            <div className="glass rounded-2xl border border-white/10 flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                  <Mic2 size={14} /> ORIGINAL CONTENT
                </span>
                <span className="text-[10px] text-gray-500 uppercase">{originalScript.length} chars</span>
              </div>
              <textarea
                value={originalScript}
                onChange={(e) => setOriginalScript(e.target.value)}
                placeholder="Paste your raw script or transcript here..."
                className="flex-1 w-full bg-transparent p-6 resize-none focus:outline-none text-gray-300 leading-relaxed scrollbar-hide"
              />
              <div className="p-4 bg-white/5 border-t border-white/10">
                <button 
                  onClick={handleOptimize}
                  disabled={isOptimizing || !originalScript}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                >
                  {isOptimizing ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                  Optimize for {culture}
                </button>
              </div>
            </div>

            {/* AI Output */}
            <div className="glass rounded-2xl border border-white/10 flex flex-col relative group">
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-blue-600/5">
                <span className="text-xs font-bold text-blue-400 flex items-center gap-2">
                  <Sparkles size={14} /> AI OPTIMIZED VERSION
                </span>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <Maximize2 size={14} />
                </button>
              </div>
              <div className="flex-1 p-6 overflow-y-auto scrollbar-hide text-white leading-relaxed whitespace-pre-wrap">
                {optimizedScript || (
                  <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-3 opacity-50">
                    <Sparkles size={48} />
                    <p className="text-sm">Localized output will appear here</p>
                  </div>
                )}
              </div>
              {optimizedScript && (
                <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                  <button 
                    onClick={handleExport}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Generate Video <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Export Overlay */}
      {exporting && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="glass max-w-md w-full p-8 rounded-3xl border border-white/20 text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
               {progress < 100 ? (
                 <Loader2 className="text-blue-500 animate-spin" size={40} />
               ) : (
                 <CheckCircle2 className="text-green-500" size={40} />
               )}
               <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">
              {progress < 100 ? 'Rendering Final Video...' : 'Ready for Distribution!'}
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              {progress < 100 ? 'AI is fine-tuning lip-sync and tone matching.' : 'Export completed successfully with Safe-for-Distribution checkmark.'}
            </p>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-blue-600 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {progress === 100 && (
              <button 
                onClick={() => setExporting(false)}
                className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all"
              >
                Close & Download
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentLab;
