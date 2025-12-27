import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Database, BarChart3, Globe,Share2,LifeBuoy } from 'lucide-react';
import KeshavaDemo from './demos/KeshavaDemo'; // Import the functional demo
import MarketingDemo from './demos/MarketingDemo'; // Import the marketing demo
import ConsultingDemo from './demos/ConsultingDemo'; // Import the consulting demo
import Content from './demos/ContentDemo'; // Import the content creation demo
import SupportDemo from './demos/SupportDemo';

const demoData = [
  {
    id: 'crm',
    title: 'Jewelry CRM',
    category: 'Digital Transformation',
    icon: <Database size={20} />,
    color: 'bg-blue-600',
  },
  {
    id: 'marketing',
    title: 'WA Broadcaster',
    category: 'Digital Marketing',
    icon: <MessageSquare size={20} />,
    color: 'bg-green-600',
    content: {
      stats: ['Sent: 5,000+', 'Open Rate: 98%', 'Replies: 420'],
      interface: 'Campaign Scheduler',
      action: 'Launch Broadcast'
    }
  },
  {
    id: 'analytics',
    title: 'Growth BI',
    category: 'Consulting',
    icon: <BarChart3 size={20} />,
    color: 'bg-purple-600',
    content: {
      stats: ['Efficiency: +40%', 'Waste: -15%', 'ROI: 4.2x'],
      interface: 'Performance Analytics',
      action: 'Export Report'
    }
  },
  {
  id: 'content',
  title: 'Content Studio',
  category: 'Content Creation',
  icon: <Share2 size={20} />,
  color: 'bg-blue-500',
},
{
  id: 'support',
  title: 'Customer Support',
  category: '24/7 Support Solutions',
  icon: <LifeBuoy size={20} />,
  color: 'bg-pink-600',
}
];

export default function DemoWorks() {
  const [activeTab, setActiveTab] = useState(demoData[0]);

  return (
    <section className="py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Live Demo <span className="text-blue-500">Suite</span></h2>
          <p className="text-zinc-500 mt-2 font-mono">Interact with our logic before we start your project.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Tab Selection */}
          <div className="lg:col-span-4 space-y-4">
            {demoData.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo)}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all border ${
                  activeTab.id === demo.id 
                  ? 'bg-zinc-900 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                  : 'bg-transparent border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab.id === demo.id ? demo.color : 'bg-zinc-800 text-zinc-500'}`}>
                  {demo.icon}
                </div>
                <div className="text-left">
                  <h4 className={`font-bold ${activeTab.id === demo.id ? 'text-white' : 'text-zinc-500'}`}>{demo.title}</h4>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest">{demo.category}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Simulated Tool Window */}
          <div className="lg:col-span-8 relative">
            <motion.div 
              layout
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl h-[550px] flex flex-col"
            >
              {/* Window Header */}
              <div className="bg-zinc-800/50 p-4 border-b border-zinc-700 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <Globe size={12}/> elv8-demo-server-v2.local
                </span>
              </div>

              {/* Tool Internal Content */}
              <div className="flex-grow overflow-hidden bg-[#0b0e14]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full"
                    >
                        {activeTab.id === 'crm' ? (
                        <KeshavaDemo />
                        ) : activeTab.id === 'marketing' ? (
                        <MarketingDemo />
                        ) : activeTab.id === 'analytics' ? (
                        <ConsultingDemo />
                        ) : activeTab.id === 'content' ? (
                        <Content/>
                        ) : activeTab.id === 'support' ? (
                        <SupportDemo />
                        ) : (
                        
                      <div className="p-8 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-white">{activeTab.content.interface}</h3>
                          <button className={`${activeTab.color} text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20`}>
                            {activeTab.content.action}
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          {activeTab.content.stats.map((stat, i) => (
                            <div key={i} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                              <p className="text-zinc-400 text-xs font-mono">{stat.split(':')[0]}</p>
                              <p className="text-lg font-bold text-white">{stat.split(':')[1]}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-grow rounded-xl bg-zinc-950/50 border border-dashed border-zinc-800 flex items-center justify-center">
                           <span className="text-zinc-600 font-mono animate-pulse">Simulation Active...</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Glowing Accent */}
            <div className={`absolute -inset-4 rounded-[2rem] blur-3xl -z-10 opacity-20 transition-colors duration-500 ${activeTab.color}`} />
          </div>
        </div>
      </div>
    </section>
  );
}