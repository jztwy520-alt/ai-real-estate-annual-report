
import React from 'react';

const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-8 min-h-[60vh]">
      {/* Left Content */}
      <div className="flex-1 space-y-10 text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          2025-01 | Annual Report
        </div>
        
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 glow-text">2025年度述职报告</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-xl">
            <span className="block mt-2 text-sm text-slate-500 font-bold tracking-widest">汇报人：姜中天</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
           {[
             { label: "AI驱动", icon: "fa-brain", color: "cyan" },
             { label: "数据基石", icon: "fa-database", color: "purple" },
             { label: "效能革新", icon: "fa-bolt", color: "emerald" }
           ].map((item, i) => (
             <div key={i} className={`flex items-center px-6 py-3 rounded-xl glass-card border-${item.color}-500/20 group hover:border-${item.color}-500/50 transition-all cursor-default`}>
               <i className={`fas ${item.icon} text-${item.color}-400 mr-3 group-hover:scale-110 transition-transform`}></i>
               <span className="text-white font-bold tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5">
          {[
            { label: 'IM 回复率', val: '85%', color: 'purple' },
            { label: 'AIGC CTR', val: '+30%', color: 'cyan' },
            { label: '小区测评', val: '1.3k', color: 'orange' },
            { label: '风控识别', val: '1000+', color: 'emerald' }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-[10px] text-slate-500 uppercase font-black">{stat.label}</div>
              <div className={`text-2xl font-black text-${stat.color}-400`}>{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual Element */}
      <div className="relative flex-1 flex justify-center items-center perspective-1000">
        {/* Holographic Orb Container */}
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center transform hover:scale-105 transition-transform duration-700">
          {/* Outer Rotating Rings - Sped up */}
          <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-10 border-2 border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-20 border-4 border-dotted border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          
          {/* Glowing Core - Enhanced */}
          <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-600/40 via-cyan-500/40 to-transparent blur-3xl animate-pulse"></div>
          
          <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full glass-card border border-white/30 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(6,182,212,0.3)] overflow-hidden tech-border backdrop-blur-md">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-purple-500/20 animate-pulse"></div>
             <i className="fas fa-rocket text-5xl md:text-8xl text-cyan-400 mb-4 glow-text animate-[bounce_3s_infinite]"></i>
             <div className="text-4xl md:text-7xl font-black text-white italic tracking-tighter glow-text animate-pulse">2025</div>
             <div className="text-[10px] text-cyan-400 font-bold tracking-[0.5em] mt-2 uppercase">Year End</div>
          </div>

          {/* Floating Data Bits - Enhanced & Multiplied */}
          <div className="absolute top-0 left-10 w-16 h-16 glass-card rounded-lg flex items-center justify-center animate-[bounce_2s_infinite]">
             <i className="fas fa-microchip text-purple-400 text-xl"></i>
          </div>
          <div className="absolute bottom-10 right-0 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-[bounce_2.5s_infinite] [animation-delay:0.5s]">
             <i className="fas fa-database text-cyan-400 text-lg"></i>
          </div>
          <div className="absolute top-1/2 -right-10 w-10 h-10 glass-card rounded-lg flex items-center justify-center animate-[bounce_3s_infinite] [animation-delay:1s]">
             <i className="fas fa-code text-emerald-400"></i>
          </div>
          <div className="absolute -bottom-5 left-1/3 w-8 h-8 glass-card rounded-full flex items-center justify-center animate-[bounce_4s_infinite] [animation-delay:1.5s]">
             <i className="fas fa-bolt text-yellow-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
