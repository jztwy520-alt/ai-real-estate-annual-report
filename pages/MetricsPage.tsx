
import React from 'react';

const OverviewCard = ({ title, count, percent, subtext, color }: any) => {
  const colorMap: any = {
    purple: { text: 'text-purple-600', icon: 'bg-purple-100 text-purple-500' },
    cyan: { text: 'text-cyan-600', icon: 'bg-cyan-100 text-cyan-500' },
    emerald: { text: 'text-emerald-600', icon: 'bg-emerald-100 text-emerald-500' },
    blue: { text: 'text-blue-600', icon: 'bg-blue-100 text-blue-500' }
  };
  const theme = colorMap[color];

  return (
    <div className={`clay-card p-6 h-full flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">{title}</h4>
            <div className={`w-8 h-8 rounded-full ${theme.icon} flex items-center justify-center shadow-sm`}>
                <i className="fas fa-chart-bar text-xs"></i>
            </div>
        </div>
        <div className="flex items-end space-x-2 mb-2">
          <span className={`text-4xl font-black ${theme.text}`}>{count}</span>
          <span className="text-sm font-bold text-slate-400 mb-2">个</span>
        </div>
        <div className="inline-block px-2 py-1 rounded-md bg-white shadow-sm text-xs font-bold text-slate-500">占比 {percent}</div>
      </div>
      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed font-medium">
        {subtext}
      </p>
    </div>
  );
};

const MetricsPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 shadow-inner">
             <i className="fas fa-chart-pie text-2xl"></i>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-indigo-900 drop-shadow-sm">年度需求概览</h2>
            <p className="text-slate-400 text-xs uppercase tracking-widest mt-1 font-bold">Annual Requirement Overview</p>
          </div>
        </div>
        <div className="clay-card px-8 py-4 flex items-center space-x-6 bg-indigo-500 border-indigo-400 text-white">
           <div className="text-right">
             <div className="text-[10px] text-indigo-200 uppercase font-bold">全年完成需求总数</div>
             <div className="text-xs text-indigo-100">Total Output</div>
           </div>
           <div className="text-5xl font-black drop-shadow-md">112</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="clay-card p-6 flex items-center justify-between group hover:bg-blue-50 cursor-pointer">
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-500 shadow-inner">
                  <i className="fas fa-briefcase text-xl"></i>
               </div>
               <div>
                  <div className="text-sm font-bold text-slate-700 mb-1">业务迭代与优化</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">常规业务支撑</div>
               </div>
            </div>
            <div className="text-3xl font-black text-blue-500">67 <span className="text-xs text-slate-400 font-normal">个</span></div>
         </div>
         <div className="clay-card p-6 flex items-center justify-between group hover:bg-cyan-50 cursor-pointer">
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-inner">
                  <i className="fas fa-rocket text-xl"></i>
               </div>
               <div>
                  <div className="text-sm font-bold text-slate-700 mb-1">AI与数据专项</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">核心战略方向</div>
               </div>
            </div>
            <div className="text-3xl font-black text-cyan-500">45 <span className="text-xs text-slate-400 font-normal">个</span></div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard 
          title="数据与房源基建" 
          count="22" 
          percent="48.9% " 
          color="purple"
          subtext="房源主数据治理、ERP对接、多源语料清洗 (Data Cleaning)"
        />
        <OverviewCard 
          title="AI 应用场景" 
          count="16" 
          percent="35.6% " 
          color="cyan"
          subtext="经纪人IM智能回复、AIGC内容生成 (Smart Reply / AIGC)"
        />
        <OverviewCard 
          title="AI Design Coding" 
          count="7" 
          percent="15.6% " 
          color="emerald"
          subtext="淘房工具箱、Figma2Code、捡漏/地图/学校找房工具"
        />
      </div>

      {/* Monthly Trend Chart - Restored & Updated Data */}
      <div className="clay-card p-8 bg-white/50 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
           <div>
             <h3 className="text-xl font-black text-indigo-900">月度产出趋势</h3>
             <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Monthly Output Trend</p>
           </div>
           <div className="flex items-center space-x-4">
              <div className="flex items-center">
                 <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                 <span className="text-xs text-slate-500 font-bold">需求数</span>
              </div>
           </div>
        </div>
        
        {/* Simplified Bar Chart Visualization */}
        <div className="flex justify-between h-48 space-x-2 sm:space-x-4 px-2">
           {[
             { m: '1月', v: 8, h: '35%' }, { m: '2月', v: 6, h: '25%' }, 
             { m: '3月', v: 9, h: '40%' }, { m: '4月', v: 16, h: '75%', highlight: true },
             { m: '5月', v: 13, h: '60%', highlight: true }, { m: '6月', v: 10, h: '45%' },
             { m: '7月', v: 8, h: '35%' }, { m: '8月', v: 9, h: '40%' },
             { m: '9月', v: 8, h: '35%' }, { m: '10月', v: 7, h: '30%' },
             { m: '11月', v: 8, h: '35%' }, { m: '12月', v: 8, h: '35%' }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center flex-1 group relative h-full justify-end">
                <div className="mb-1 text-[10px] font-bold text-slate-500">
                   {item.v}
                </div>
                <div 
                  className={`w-full rounded-t-lg relative overflow-hidden transition-all duration-300 ${item.highlight ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-slate-300 group-hover:bg-indigo-300'}`}
                  style={{ height: item.h }}
                >
                   {!item.highlight && <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-400/20 to-transparent"></div>}
                </div>
                <div className="mt-2 text-[10px] text-slate-400 font-bold">{item.m}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsPage;
