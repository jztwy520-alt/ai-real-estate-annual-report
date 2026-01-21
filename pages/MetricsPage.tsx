
import React from 'react';

const OverviewCard = ({ title, count, percent, subtext, color }: any) => {
  const colorMap: any = {
    purple: { text: 'text-purple-400', border: 'border-purple-500', bg: 'bg-purple-500/10' },
    cyan: { text: 'text-cyan-400', border: 'border-cyan-500', bg: 'bg-cyan-500/10' },
    emerald: { text: 'text-emerald-400', border: 'border-emerald-500', bg: 'bg-emerald-500/10' },
    blue: { text: 'text-blue-400', border: 'border-blue-500', bg: 'bg-blue-500/10' }
  };
  const theme = colorMap[color];

  return (
    <div className={`glass-card p-6 rounded-2xl border-l-4 ${theme.border} ${theme.bg} flex flex-col justify-between h-full`}>
      <div>
        <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{title}</h4>
        <div className="flex items-end space-x-2 mb-1">
          <span className={`text-4xl font-black ${theme.text}`}>{count}</span>
          <span className="text-sm font-bold text-slate-500 mb-1">个</span>
        </div>
        <div className="text-xs font-mono text-slate-400 opacity-80">占比 {percent}</div>
      </div>
      <p className="text-[10px] text-slate-500 mt-4 leading-relaxed border-t border-white/5 pt-2">
        {subtext}
      </p>
    </div>
  );
};

const MetricsPage: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white glow-text">年度需求概览</h2>
          <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Annual Requirement Overview</p>
        </div>
        <div className="glass-card px-8 py-4 rounded-xl border border-white/10 flex items-center space-x-6">
           <div className="text-right">
             <div className="text-[10px] text-slate-400 uppercase font-bold">全年完成需求总数</div>
             <div className="text-xs text-slate-500">Total Output</div>
           </div>
           <div className="text-5xl font-black text-white glow-text">112</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard 
          title="数据与房源基建" 
          count="22" 
          percent="48.9% (AI专项)" 
          color="purple"
          subtext="房源主数据治理、ERP对接、多源语料清洗 (Data Cleaning)"
        />
        <OverviewCard 
          title="AI 应用场景" 
          count="16" 
          percent="35.6% (AI专项)" 
          color="cyan"
          subtext="经纪人IM智能回复、AIGC内容生成 (Smart Reply / AIGC)"
        />
        <OverviewCard 
          title="AI Design Coding" 
          count="7" 
          percent="15.6% (AI专项)" 
          color="emerald"
          subtext="淘房工具箱、Figma2Code、捡漏/地图/学校找房工具"
        />
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-black text-white uppercase tracking-widest">月度产出趋势 (Monthly Trend)</h3>
          <div className="flex items-center space-x-4 text-[10px] font-bold text-slate-500">
             <span><i className="fas fa-arrow-up text-cyan-400 mr-1"></i>峰值: 4月/5月</span>
             <span><i className="fas fa-minus text-purple-400 mr-1"></i>均值: 9.3个/月</span>
          </div>
        </div>
        
        {/* Simplified Bar Chart Visualization */}
        <div className="flex justify-between h-48 space-x-2 items-stretch mt-4">
          {[8, 6, 9, 16, 13, 10, 8, 9, 10, 8, 7, 8].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end group cursor-default">
              <div className="flex justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white bg-slate-800 px-1 rounded">{val}</span>
              </div>
              <div 
                className={`w-full rounded-t-sm transition-all duration-500 ${val > 12 ? 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]' : 'bg-slate-700 group-hover:bg-slate-600'}`}
                style={{ height: `${(val / 16) * 75}%` }}
              ></div>
              <div className="text-[9px] text-slate-500 text-center mt-2 font-mono">{i+1}月</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="glass-card p-6 rounded-xl flex items-center justify-between border-l-2 border-blue-500">
            <div>
               <div className="text-xs font-bold text-white mb-1">业务迭代与优化</div>
               <div className="text-[10px] text-slate-400">常规业务支撑</div>
            </div>
            <div className="text-2xl font-black text-blue-400">67 <span className="text-xs text-slate-500 font-normal">个</span></div>
         </div>
         <div className="glass-card p-6 rounded-xl flex items-center justify-between border-l-2 border-cyan-500">
            <div>
               <div className="text-xs font-bold text-white mb-1">AI与数据专项</div>
               <div className="text-[10px] text-slate-400">核心战略方向</div>
            </div>
            <div className="text-2xl font-black text-cyan-400">45 <span className="text-xs text-slate-500 font-normal">个</span></div>
         </div>
      </div>
    </div>
  );
};

export default MetricsPage;
