import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, PieChart, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function ConsultingDemo() {
  const [employees, setEmployees] = useState(5);
  const [manualHours, setManualHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(500);

  // Logic: Calculate potential savings through automation
  const monthlyManualCost = employees * manualHours * 4 * hourlyRate;
  const automatedCost = monthlyManualCost * 0.2; // Assuming 80% efficiency gain
  const potentialSavings = monthlyManualCost - automatedCost;

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-zinc-300 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
      
      {/* Header */}
      <header className="px-6 py-4 border-b border-zinc-800 bg-[#0d1117] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white">
            <PieChart size={14} />
          </div>
          <h2 className="text-sm font-black text-white tracking-tight uppercase">Strategy & BI Suite</h2>
        </div>
        <span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
          PROJECTION MODE
        </span>
      </header>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Input Parameters */}
        <div className="flex-1 p-6 border-r border-zinc-800 space-y-6 bg-zinc-900/20">
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <DollarSign size={16} className="text-purple-400" /> Efficiency Calculator
            </h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Team Size</label>
                <input 
                  type="range" min="1" max="50" value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white font-mono">
                  <span>1</span> <span>{employees} Members</span> <span>50</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Manual Hours / Week / Person</label>
                <input 
                  type="range" min="1" max="40" value={manualHours}
                  onChange={(e) => setManualHours(e.target.value)}
                  className="w-full accent-purple-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white font-mono">
                  <span>1h</span> <span>{manualHours} Hours</span> <span>40h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <p className="text-[10px] text-zinc-500 uppercase mb-2">Strategy Goal</p>
            <div className="flex gap-2">
              <span className="bg-zinc-800 text-[10px] px-2 py-1 rounded border border-zinc-700 text-zinc-300">Process Audit</span>
              <span className="bg-purple-500/20 text-[10px] px-2 py-1 rounded border border-purple-500/30 text-purple-300 font-bold">Excel Automation</span>
            </div>
          </div>
        </div>

        {/* Right: Visualization & Results */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-zinc-900 to-[#0b0e14] border border-zinc-800 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={80} />
              </div>
              <p className="text-xs text-zinc-500 font-medium">Estimated Annual Savings</p>
              <h2 className="text-4xl font-black text-white mt-1">
                ₹{(potentialSavings * 12).toLocaleString('en-IN')}
              </h2>
              <p className="text-[10px] text-emerald-500 font-bold mt-2 flex items-center gap-1">
                <ArrowUpRight size={12} /> 80% Operational Efficiency Gain
              </p>
            </div>

            {/* Simulated Data Chart */}
            <div className="space-y-3">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Growth Projection (Next 6 Months)</p>
              <div className="flex items-end gap-2 h-24 pt-4">
                {[40, 55, 45, 70, 85, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-zinc-800'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-zinc-600 font-bold uppercase">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-zinc-100 hover:bg-white text-black rounded-xl font-black text-xs transition-all active:scale-95">
             BOOK STRATEGY AUDIT <BarChart3 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}