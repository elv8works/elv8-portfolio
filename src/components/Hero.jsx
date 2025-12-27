import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pulse */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-mono tracking-widest text-md"
        >
          elv8.works — Consultancy
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-6xl md:text-8xl font-black tracking-tighter"
        >
          We Help <br /> <span className="text-zinc-500 italic">Your Business Rise Higher</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-zinc-400 text-lg max-w-xl mx-auto"
        >
          Specializing in high-performance CRMs, strategic investor decks, and 
          automation tools that drive revenue.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a href="#work" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}