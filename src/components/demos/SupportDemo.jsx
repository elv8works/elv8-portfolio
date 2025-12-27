import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Headphones, Send, User, Bot, CheckCheck, 
  Search, LifeBuoy, Clock, ArrowRight 
} from 'lucide-react';

export default function SupportDemo() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! How can I help you today?', time: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: "I've logged your request. Our support team has been notified via the CRM integration!", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-zinc-300 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
      
      {/* Header */}
      <header className="px-4 py-3 border-b border-zinc-800 bg-[#0d1117] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-pink-600 rounded flex items-center justify-center text-white">
            <Headphones size={14} />
          </div>
          <h2 className="text-[10px] font-black text-white uppercase tracking-tight">Support Desk Live</h2>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[9px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">AGENT ONLINE</span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row overflow-hidden h-full">
        
        {/* Left: Ticket Info & KB (Hidden on small mobile if needed, but here responsive) */}
        <div className="hidden md:flex w-1/3 border-r border-zinc-800 p-4 flex-col gap-4 bg-zinc-900/20">
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-zinc-500 uppercase">Search Knowledge Base</p>
            <div className="relative">
              <Search className="absolute left-2 top-2 text-zinc-600" size={12} />
              <input type="text" placeholder="Search docs..." className="w-full bg-zinc-950 border border-zinc-800 pl-7 pr-2 py-1.5 rounded-lg text-[10px] outline-none" />
            </div>
          </div>

          <div className="flex-grow space-y-3">
            <p className="text-[9px] font-bold text-zinc-500 uppercase">Active Tickets</p>
            <div className="p-2 bg-zinc-800/50 rounded-lg border border-zinc-700 text-[10px]">
               <div className="flex justify-between mb-1">
                 <span className="text-white font-bold">#TK-9021</span>
                 <span className="text-amber-500 font-bold">Priority</span>
               </div>
               <p className="text-zinc-400">Jewelry CRM Login Issue</p>
            </div>
          </div>

          <button className="w-full py-2 bg-zinc-800 text-[10px] font-bold rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors">
            VIEW ANALYTICS
          </button>
        </div>

        {/* Right: Chat Window */}
        <div className="flex-grow flex flex-col h-full bg-zinc-950/30">
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[300px] md:max-h-none">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs relative ${
                  msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                }`}>
                  <p>{msg.text}</p>
                  <div className={`flex items-center gap-1 mt-1 opacity-50 text-[8px] ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck size={10} />}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-700">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t border-zinc-800 bg-[#0d1117]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl text-xs text-white outline-none focus:border-pink-500"
              />
              <button className="p-2 bg-pink-600 text-white rounded-xl hover:bg-pink-500 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}