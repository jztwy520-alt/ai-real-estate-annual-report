import React from 'react';

const StrategyMatchingPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i className="fas fa-handshake-simple text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">智能撮合：基于 ROI 与成功率的小B评价体系</h2>
          <p className="text-base text-slate-400">告别“平均主义”，实现“收益最大化”的动态分发</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: Evaluation Model */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl border-t-4 border-emerald-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-chart-pie mr-3 text-emerald-400"></i> 动态评价模型
           </h3>
           
           <div className="flex-1 space-y-6">
              <div className="space-y-4">
                 <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5">
                    <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-white">新手期 (New)</span>
                       <span className="text-xs text-slate-400">权重: 扶持</span>
                    </div>
                    <div className="text-[10px] text-slate-500">重点考核：响应速度、服务态度</div>
                 </div>
                 <div className="p-3 bg-slate-800/50 rounded-lg border border-emerald-500/30">
                    <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-emerald-400">成长期 (Growth)</span>
                       <span className="text-xs text-emerald-400">权重: 激励</span>
                    </div>
                    <div className="text-[10px] text-slate-500">重点考核：转化率、用户好评</div>
                 </div>
                 <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5">
                    <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-white">成熟期 (Stable)</span>
                       <span className="text-xs text-slate-400">权重: 稳定</span>
                    </div>
                    <div className="text-[10px] text-slate-500">重点考核：ROI、复购率</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Middle Column: Distribution Engine */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl border-t-4 border-blue-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-network-wired mr-3 text-blue-400"></i> 智能分发引擎
           </h3>
           
           <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="relative p-6 bg-slate-900/50 rounded-full aspect-square flex items-center justify-center border border-white/10">
                 <div className="text-center z-10">
                    <div className="text-2xl font-black text-white">ROI</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Maximization</div>
                 </div>
                 
                 {/* Saturation Warning */}
                 <div className="absolute top-4 right-4 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[8px] text-red-400 mt-1">饱和预警</span>
                 </div>
                 
                 {/* Opportunity Signal */}
                 <div className="absolute bottom-8 left-8 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[8px] text-green-400 mt-1">潜力挖掘</span>
                 </div>
              </div>
              
              <div className="text-xs text-slate-400 text-center leading-relaxed px-4">
                 平衡“饥饿型”经纪人（急需线索，高潜力）与“饱和型”经纪人（边际效应递减），降低断续风险。
              </div>
           </div>
        </div>

        {/* Right Column: Connection Assistant */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl border-t-4 border-indigo-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-comments mr-3 text-indigo-400"></i> AI 辅助建联
           </h3>
           
           <div className="flex-1 space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5">
                 <div className="text-xs font-bold text-indigo-400 uppercase mb-2">Smart Opening</div>
                 <div className="p-3 bg-indigo-500/10 rounded border border-indigo-500/20 text-xs text-slate-300 italic">
                    "王经理，这位用户刚浏览了[XX小区]的三房，关注学区政策，建议从‘最新入学政策’切入..."
                 </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5">
                 <div className="text-xs font-bold text-red-400 uppercase mb-2">Risk Monitor</div>
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">响应超时 (&gt;15min)</span>
                    <span className="text-red-400 font-bold">Alert Sent</span>
                 </div>
                 <div className="h-px bg-white/5 my-2"></div>
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">关键词风险</span>
                    <span className="text-green-400 font-bold">Normal</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyMatchingPage;