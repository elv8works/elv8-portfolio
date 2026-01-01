import React, { useState } from 'react';
import { 
  LayoutDashboard, Scale, FileText, 
  Landmark, ExternalLink, Link as LinkIcon 
} from 'lucide-react';

export default function KeshavaDemo() {
  const [activeSubTab, setActiveSubTab] = useState('dashboard');
  const [weight, setWeight] = useState('');
  const [rate, setRate] = useState('7250');

  const LIVE_DEMO_URL = "https://keshava-test.web.app"; 

  const renderContent = () => {
    switch (activeSubTab) {
      case 'gold-ops':
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Assign Work</h4>
            <div className="grid grid-cols-1 gap-3">
              <input 
                type="text" placeholder="Goldsmith Name" 
                className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-sm text-white outline-none focus:ring-1 focus:ring-blue-500" 
              />
              <input 
                type="number" placeholder="Pure Weight (g)" 
                value={weight} onChange={(e) => setWeight(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-sm text-white outline-none focus:ring-1 focus:ring-blue-500" 
              />
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold text-sm text-white transition-all active:scale-95">
                Issue Gold
              </button>
            </div>
          </div>
        );

      case 'estimation':
        const total = (parseFloat(weight || 0) * parseFloat(rate)).toLocaleString('en-IN');
        return (
          <div className="flex flex-col gap-6 animate-in fade-in">
            <div className="space-y-4">
              <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-center">
                <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Total Estimate</p>
                <p className="text-3xl font-black text-white">₹{total}</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-[10px] text-zinc-500 uppercase font-bold ml-1">Live Gold Rate</label>
                <input 
                  type="number" value={rate} onChange={(e) => setRate(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-white outline-none" 
                />
              </div>
            </div>
            
            {/* Receipt Preview - Scaled for Mobile */}
            <div className="mx-auto w-full max-w-[200px] bg-white p-4 text-[10px] text-black font-mono shadow-xl rounded-sm">
              <p className="text-center font-bold border-b border-black mb-2 pb-1 text-xs">ELV8 JEWELLERS</p>
              <div className="space-y-1">
                <p className="flex justify-between"><span>Weight:</span> <span>{weight || '0'}g</span></p>
                <p className="flex justify-between"><span>Rate:</span> <span>₹{rate}</span></p>
                <p className="flex justify-between font-bold pt-1 border-t border-dashed border-black mt-2">
                  <span>TOTAL:</span> <span>₹{total}</span>
                </p>
              </div>
            </div>
          </div>
        );

      case 'investments':
        return (
          <div className="flex flex-col items-center justify-center text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-500/20">
              <LinkIcon size={28} />
            </div>
            <h4 className="text-white font-bold">Investor Magic Link</h4>
            <p className="text-xs text-zinc-500 max-w-[200px]">Temporary secure access for transaction viewing.</p>
            <button className="bg-zinc-800 text-white px-6 py-2.5 rounded-full text-[10px] font-bold border border-zinc-700">
              Generate Link
            </button>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-center">
                <p className="text-[9px] text-zinc-500 uppercase mb-1">System</p>
                <p className="text-emerald-500 font-bold text-sm italic">Online</p>
              </div>
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-center">
                <p className="text-[9px] text-zinc-500 uppercase mb-1">Security</p>
                <p className="text-white font-bold text-sm tracking-tighter">SSL-Active</p>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-br from-blue-600/20 to-zinc-900 border border-blue-500/20 rounded-2xl">
              <p className="text-white font-bold text-sm mb-2">Experience Full App</p>
              <p className="text-zinc-500 text-[11px] mb-4">View real-time inventory and advanced ledgers.</p>
              <a 
                href={LIVE_DEMO_URL} target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-bold text-[10px]"
              >
                LAUNCH NOW <ExternalLink size={12} />
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] text-zinc-300 rounded-2xl overflow-hidden border border-zinc-800">
      
      {/* Top Header - Sticky on Mobile */}
      <header className="px-5 py-4 border-b border-zinc-800 flex justify-between items-center bg-[#0d1117]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] font-black text-white">E</div>
          <h2 className="text-xs font-black text-white tracking-tighter uppercase">elv8 CRM</h2>
        </div>
        <a 
          href={LIVE_DEMO_URL} 
          target="_blank" 
          rel="noreferrer"
          className="bg-white text-black px-3 py-1.5 rounded-full text-[9px] font-black flex items-center gap-1 active:scale-95 transition-transform"
        >
          LIVE <ExternalLink size={10} />
        </a>
      </header>

      {/* Main Content Area - Scrollable */}
      <div className="flex-grow p-5 overflow-y-auto pb-24">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-bold text-white capitalize">{activeSubTab.replace('-', ' ')}</h3>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>
        {renderContent()}
      </div>

      {/* Bottom Navigation - Only visible on Mobile/Medium, replaces Sidebar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-[#0d1117] border-t border-zinc-800 px-2 py-3 flex justify-around items-center z-10 md:rounded-b-2xl">
    {[
      { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Home' },
      { id: 'gold-ops', icon: <Scale size={20} />, label: 'Ops' },
      { id: 'estimation', icon: <FileText size={20} />, label: 'Estim' },
      { id: 'investments', icon: <Landmark size={20} />, label: 'Invest' }
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => setActiveSubTab(item.id)}
        className={`flex flex-col items-center gap-1 transition-all ${
          activeSubTab === item.id ? 'text-blue-500 scale-110' : 'text-zinc-600'
        }`}
      >
        {item.icon}
        <span className="text-[8px] font-bold uppercase tracking-tighter">{item.label}</span>
      </button>
    ))}
  </nav>
    </div>
  );
}