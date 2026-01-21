import React from 'react';

const StrategyOverviewPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <i className="fas fa-compass text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">2026 战略蓝图：AI 驱动的私域闭环与原子化后台</h2>
          <p className="text-base text-slate-400">从“流量思维”转向“全生命周期 ROI 经营”</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: North Star Metrics */}
        <div className="lg:col-span-1 space-y-6">
           <div className="glass-card p-6 rounded-2xl border-t-4 border-cyan-500 flex flex-col h-full hover:bg-slate-800/60 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                 <i className="fas fa-star mr-3 text-cyan-400"></i> 核心经营维度
              </h3>
              <div className="space-y-8 flex-1 flex flex-col justify-center">
                 <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">获客成本 (CAC)</span>
                       <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded">Cost Optimization</span>
                    </div>
                    <div className="text-xl font-bold text-white">持续降低私域流量获取成本</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-500 w-[70%]"></div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">撮合效率 (Efficiency)</span>
                       <span className="text-cyan-400 text-xs font-bold bg-cyan-500/10 px-2 py-0.5 rounded">Smart Matching</span>
                    </div>
                    <div className="text-xl font-bold text-white">提升人客匹配精准度与速度</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-400 w-[60%]"></div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">投入产出比 (ROI)</span>
                       <span className="text-purple-400 text-xs font-bold bg-purple-500/10 px-2 py-0.5 rounded">Value Maximization</span>
                    </div>
                    <div className="text-xl font-bold text-white">最大化平台与小B整体收益</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-[85%]"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Strategic Loop */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800/50 flex flex-col">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">全链路业务闭环</h3>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10">AI Native</span>
                 <span className="px-3 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10">Event Driven</span>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Card 1 */}
              <div className="p-5 rounded-xl bg-slate-800/50 border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i className="fas fa-magnet text-6xl text-cyan-400"></i>
                 </div>
                 <div className="text-xs font-bold text-cyan-400 uppercase mb-2 tracking-wider">Acquisition</div>
                 <h4 className="text-lg font-bold text-white mb-2">公域投流获客</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                    素材自动化生产，精准投流，引导用户添加企微账号，构建私域流量池。
                 </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-xl bg-slate-800/50 border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i className="fas fa-seedling text-6xl text-purple-400"></i>
                 </div>
                 <div className="text-xs font-bold text-purple-400 uppercase mb-2 tracking-wider">Nurturing</div>
                 <h4 className="text-lg font-bold text-white mb-2">自动化培育 (1人1策)</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                    基于全生命周期监控与事件驱动，利用 AI 生成个性化内容进行触达激活。
                 </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i className="fas fa-handshake text-6xl text-emerald-400"></i>
                 </div>
                 <div className="text-xs font-bold text-emerald-400 uppercase mb-2 tracking-wider">Matching</div>
                 <h4 className="text-lg font-bold text-white mb-2">ROI 驱动撮合</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                    小B动态评价体系，智能分发线索，最大化撮合成功率与平台收益。
                 </p>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-xl bg-slate-800/50 border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i className="fas fa-cubes text-6xl text-indigo-400"></i>
                 </div>
                 <div className="text-xs font-bold text-indigo-400 uppercase mb-2 tracking-wider">Infrastructure</div>
                 <h4 className="text-lg font-bold text-white mb-2">原子化后台重构</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                    稳定内核 + Skills 原子化操作层，实现后台管理的高效运维与快速迭代。
                 </p>
              </div>
           </div>
        </div>
      </div>
      
      {/* Footer Navigation Hint */}
      <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs animate-pulse">
         <span>Scroll Down for Details</span>
         <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default StrategyOverviewPage;