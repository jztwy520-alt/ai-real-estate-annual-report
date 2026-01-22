
import React from 'react';

const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-8 min-h-[60vh]">
      {/* Left Content */}
      <div className="flex-1 space-y-10 text-center lg:text-left">
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white shadow-[6px_6px_12px_rgba(165,177,194,0.3),-6px_-6px_12px_rgba(255,255,255,0.8)] text-indigo-500 text-sm font-black tracking-widest uppercase">
          <span className="w-3 h-3 rounded-full bg-indigo-400 mr-3 animate-pulse"></span>
          2025-01 | Annual Report
        </div>
        
        <div className="space-y-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tight text-indigo-900 leading-[1] drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 block mb-2">2025</span>
            <span>年度述职报告</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-500 font-bold tracking-wide">
              汇报人：姜中天
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
           {[
             { label: "AI 驱动", icon: "fa-brain", color: "indigo" },
             { label: "数据基石", icon: "fa-database", color: "purple" },
             { label: "效能革新", icon: "fa-bolt", color: "pink" }
           ].map((item, i) => (
             <div key={i} className={`flex items-center px-5 py-3 rounded-2xl bg-white/80 border border-${item.color}-100 shadow-sm backdrop-blur-sm group cursor-pointer hover:bg-${item.color}-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}>
               <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 flex items-center justify-center mr-3 transition-transform duration-500 group-hover:rotate-12`}>
                  <i className={`fas ${item.icon} text-${item.color}-500 text-sm group-hover:scale-110 transition-transform`}></i>
               </div>
               <span className={`text-slate-700 font-bold text-sm group-hover:text-${item.color}-700 transition-colors`}>{item.label}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Right Visual Element - Clay Style */}
      <div className="relative flex-1 flex justify-center items-center">
        {/* Floating Clay Elements */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center float-animation">
           {/* Main Sphere */}
           <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 shadow-[20px_20px_60px_rgba(165,177,194,0.4),-20px_-20px_60px_rgba(255,255,255,0.8)] flex items-center justify-center">
              <div className="text-center z-10">
                 <div className="text-8xl text-indigo-500 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.1)]">
                    <i className="fas fa-rocket"></i>
                 </div>
                 <div className="text-6xl font-black text-indigo-900 mt-4 tracking-tighter">2025</div>
              </div>
           </div>
           
           {/* Satellite Elements */}
           <div className="absolute top-10 right-20 w-24 h-24 rounded-3xl bg-pink-100 shadow-[10px_10px_20px_rgba(165,177,194,0.3),-10px_-10px_20px_rgba(255,255,255,0.8)] flex items-center justify-center animate-[bounce_3s_infinite] rotate-12">
              <i className="fas fa-bolt text-4xl text-pink-500"></i>
           </div>
           
           <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-emerald-100 shadow-[10px_10px_20px_rgba(165,177,194,0.3),-10px_-10px_20px_rgba(255,255,255,0.8)] flex items-center justify-center animate-[bounce_4s_infinite] delay-1000">
              <i className="fas fa-robot text-3xl text-emerald-500"></i>
           </div>

           <div className="absolute top-20 left-20 w-16 h-16 rounded-2xl bg-indigo-100 shadow-[8px_8px_16px_rgba(165,177,194,0.3),-8px_-8px_16px_rgba(255,255,255,0.8)] flex items-center justify-center animate-[bounce_5s_infinite] delay-500 -rotate-12">
              <i className="fas fa-brain text-2xl text-indigo-500"></i>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
