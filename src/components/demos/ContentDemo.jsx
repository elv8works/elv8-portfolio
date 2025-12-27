import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Share2, Play, Sparkles, Eye, Heart, MessageCircle, Volume2 } from 'lucide-react';

export default function ContentDemo() {
  const [platform, setPlatform] = useState('youtube'); // Defaulting to YouTube to show your video
  const [caption, setCaption] = useState("Durga Saptashati - Episode 2 | The Story of King Suratha. Explore the divine play of the Mother.");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Your specific Video ID
  const VIDEO_ID = "cnaX2-HFHv8";

  const platforms = [
    { id: 'instagram', icon: <Instagram size={18} />, name: 'Feed', color: 'bg-pink-600' },
    { id: 'youtube', icon: <Youtube size={18} />, name: 'Video', color: 'bg-red-600' }
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-zinc-300 rounded-2xl overflow-hidden border border-zinc-800">
      {/* Header */}
      <header className="px-5 py-4 border-b border-zinc-800 bg-[#0d1117] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Share2 size={16} className="text-blue-500" />
          <h2 className="text-xs font-black text-white uppercase tracking-tighter">Content Studio</h2>
        </div>
        <div className="flex gap-2">
           {platforms.map(p => (
             <button 
              key={p.id}
              onClick={() => { setPlatform(p.id); setHasInteracted(false); }}
              className={`p-2 rounded-lg transition-all ${platform === p.id ? p.color + ' text-white scale-110 shadow-lg' : 'bg-zinc-900 text-zinc-500 hover:text-white'}`}
             >
               {p.icon}
             </button>
           ))}
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Left: Editor Panel */}
        <div className="w-full md:w-1/2 p-5 border-b md:border-b-0 md:border-r border-zinc-800 space-y-5 overflow-y-auto">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Video Metadata</label>
            <textarea 
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full h-24 bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-xs text-white outline-none focus:ring-1 focus:ring-blue-500 resize-none transition-all"
            />
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-bold text-zinc-500 uppercase">Engagement Insights</p>
            <div className="grid grid-cols-2 gap-3">
               <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <p className="text-[9px] text-zinc-500">Peak Time</p>
                  <p className="text-xs font-bold text-white">18:00 IST</p>
               </div>
               <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <p className="text-[9px] text-zinc-500">Viral Score</p>
                  <p className="text-xs font-bold text-emerald-500">9.4/10</p>
               </div>
            </div>
          </div>

          <button 
            onClick={handleOptimize}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            {isOptimizing ? (
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Optimizing...
              </span>
            ) : (
              <>GENERATE HOOK <Sparkles size={14} /></>
            )}
          </button>
        </div>

        {/* Right: Platform Mockup */}
        <div className="w-full md:w-1/2 p-4 md:p-6 bg-zinc-900/20 flex flex-col items-center justify-center relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={platform}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950"
            >
              {platform === 'instagram' ? (
                /* INSTAGRAM FEED POST MOCKUP */
                <div className="flex flex-col">
                  <div className="p-3 flex items-center gap-2 border-b border-zinc-900">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[8px] font-bold">E</div>
                    </div>
                    <span className="text-[10px] font-bold">elv8works</span>
                  </div>
                  
                  <div className="aspect-square w-full bg-zinc-900">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600" 
                      alt="Instagram Post"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex gap-3">
                      <Heart size={18} className="text-white" />
                      <MessageCircle size={18} />
                      <Share2 size={18} />
                    </div>
                    <p className="text-[10px] leading-relaxed">
                      <span className="font-bold mr-1 text-white">elv8works</span>
                      {caption}
                    </p>
                  </div>
                </div>
              ) : (
                /* YOUTUBE THEATER MOCKUP */
                <div className="flex flex-col aspect-[9/16] relative bg-black">
                  {!hasInteracted ? (
                    <div 
                      onClick={() => setHasInteracted(true)}
                      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 cursor-pointer group"
                    >
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Volume2 size={32} className="text-white" />
                      </div>
                      <p className="mt-4 text-[10px] font-black text-white uppercase tracking-widest px-4 text-center">Click to Play with Audio</p>
                    </div>
                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playlist=${VIDEO_ID}&loop=1`}
                      title="YouTube Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  
                  {/* Bottom UI Overlay (Auto-hides if desired, but good for demo) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none">
                    <p className="text-[10px] font-bold text-white uppercase tracking-tighter">@sarveh_bhavantu</p>
                    <p className="text-[9px] text-zinc-300 line-clamp-2 mt-1">{caption}</p>
                    <div className="flex gap-3 mt-2 opacity-70">
                       <span className="flex items-center gap-1 text-[8px] text-white"><Heart size={10} /> 1.2k</span>
                       <span className="flex items-center gap-1 text-[8px] text-white"><Eye size={10} /> 15k</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}