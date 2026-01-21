import React from 'react';

const StrategyMatchingPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i className="fas fa-handshake-simple text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">基于 ROI 与成功率的小B管理体系</h2>
          <p className="text-base text-slate-400">告别“平均主义”，实现“收益最大化”的动态分发</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: Evaluation & Management */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl border-t-4 border-emerald-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-chart-pie mr-3 text-emerald-400"></i> 动态评价与管理
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

              {/* Agent Management */}
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                 <div className="text-xs font-bold text-red-400 uppercase mb-2">管理机制探讨</div>
                 <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    建立强制卡点：未标记客户问题 <span className="text-red-400">禁止回复</span> / <span className="text-red-400">暂停新线索分配</span>，倒逼经纪人完善数据。
                 </p>
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
              
              <div className="space-y-2 px-4">
                 <div className="p-2 bg-slate-800 rounded border border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">业务匹配度</span>
                    <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-blue-500"></div></div>
                 </div>
                 <div className="p-2 bg-slate-800 rounded border border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">沟通风格匹配</span>
                    <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-purple-500"></div></div>
                 </div>
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
                 <div className="text-xs font-bold text-indigo-400 uppercase mb-2">Smart Reply Integration</div>
                 <p className="text-xs text-slate-400 mb-3">复用 IM 智能回复能力，为经纪人提供“开场白”与“高频问题”的<span className="text-white font-bold">一键发送</span>支持。</p>
                 <div className="p-3 bg-indigo-500/10 rounded border border-indigo-500/20 text-xs text-slate-300">
                    <div className="font-bold mb-1 text-white">推荐话术 (Recommendation)</div>
                    <p className="mb-2 italic">"您关注的[XX小区]近期成交了一套同户型，价格..."</p>
                    <button className="w-full py-1 bg-indigo-500 hover:bg-indigo-600 rounded text-[10px] text-white transition-colors">
                       一键发送 (One-click Send)
                    </button>
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