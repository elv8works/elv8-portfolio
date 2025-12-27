import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, BarChart, Smartphone, CheckCheck, Zap, Users } from 'lucide-react';

export default function MarketingDemo() {
  const [message, setMessage] = useState("Hi {{name}}, exclusive offer for you! 🎁");
  const [isSending, setIsSending] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleLaunch = () => {
    setIsSending(true);
    setProgress(0);
  };

  useEffect(() => {
    if (isSending && progress < 100) {
      const timer = setTimeout(() => setProgress(prev => prev + 10), 100);
      return () => clearTimeout(timer);
    } else if (progress === 100) {
      setTimeout(() => {
        setIsSending(false);
        setShowNotification(true);
      }, 500);
    }
  }, [isSending, progress]);

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-zinc-300 rounded-2xl overflow-hidden border border-zinc-800">
      {/* Header */}
      <header className="px-4 py-3 border-b border-zinc-800 bg-[#0d1117] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-green-500" fill="currentColor" />
          <h2 className="text-[10px] font-black text-white uppercase tracking-tight">Broadcaster</h2>
        </div>
        <span className="text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">LIVE API</span>
      </header>

      <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-hidden h-full">
        {/* Input Panel */}
        <div className="w-full md:w-1/2 p-4 md:p-6 border-b md:border-b-0 md:border-r border-zinc-800 space-y-4">
          <div className="space-y-2">
            <label className="text-[9px] font-bold text-zinc-500 uppercase">Message</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-24 md:h-32 bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-sm text-white focus:ring-1 focus:ring-green-500 outline-none resize-none"
            />
          </div>

          {!isSending ? (
            <button onClick={handleLaunch} className="w-full bg-green-600 p-3 rounded-xl font-bold text-white text-xs flex items-center justify-center gap-2 active:scale-95 transition-all">
              SEND BROADCAST <Send size={14} />
            </button>
          ) : (
            <div className="space-y-2">
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <motion.div animate={{ width: `${progress}%` }} className="h-full bg-green-500" />
              </div>
              <p className="text-center text-[9px] font-bold text-green-500 uppercase tracking-widest">Processing...</p>
            </div>
          )}
        </div>

        {/* Preview Panel */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-zinc-900/30">
          <div className="w-full max-w-[220px] h-[320px] bg-zinc-950 rounded-[2rem] border-[4px] border-zinc-800 relative overflow-hidden flex flex-col shadow-2xl">
            <div className="bg-[#075e54] p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-zinc-500" />
              <div className="text-[8px] font-bold text-white">Business Account</div>
            </div>
            <div className="flex-grow p-2 bg-[#0b141a] flex flex-col justify-end">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#056162] p-2 rounded-lg text-[9px] text-white self-start max-w-[85%] mb-2">
                {message.replace("{{name}}", "Client")}
                <div className="flex justify-end mt-1 opacity-50"><CheckCheck size={8} /></div>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {showNotification && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-zinc-950/95 flex flex-col items-center justify-center p-6 text-center z-10">
                <BarChart className="text-green-500 mb-2" size={32} />
                <h3 className="text-white font-bold text-sm">Campaign Success</h3>
                <p className="text-[10px] text-zinc-500 mt-2">100% Delivery Rate</p>
                <button onClick={() => setShowNotification(false)} className="mt-4 text-[9px] font-bold text-blue-500 uppercase tracking-widest">Reset</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}