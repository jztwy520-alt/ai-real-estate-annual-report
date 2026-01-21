import React from 'react';

const StrategyNurturingPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
          <i className="fas fa-seedling text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">自动化培育：全生命周期监控与 1人1策</h2>
          <p className="text-base text-slate-400">从“被动等待”转向“事件驱动 (Event-Driven) 主动激活”</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left Column: Lifecycle & Triggers */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-purple-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-heart-pulse mr-3 text-purple-400"></i> 生命周期监控与触发
           </h3>
           
           <div className="flex-1 flex flex-col gap-6">
              {/* Lifecycle Stages */}
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-3">User Lifecycle Monitor</div>
                 <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="flex flex-col items-center">
                       <div className="w-3 h-3 rounded-full bg-slate-600 mb-2"></div>
                       <span>潜客</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-2"></div>
                    <div className="flex flex-col items-center">
                       <div className="w-3 h-3 rounded-full bg-slate-600 mb-2"></div>
                       <span>意向</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-2"></div>
                    <div className="flex flex-col items-center">
                       <div className="w-3 h-3 rounded-full bg-purple-500 mb-2 shadow-[0_0_8px_#a855f7]"></div>
                       <span className="text-white font-bold">留资</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-2"></div>
                    <div className="flex flex-col items-center">
                       <div className="w-3 h-3 rounded-full bg-slate-600 mb-2"></div>
                       <span>带看</span>
                    </div>
                    <div className="h-0.5 flex-1 bg-slate-700 mx-2"></div>
                    <div className="flex flex-col items-center">
                       <div className="w-3 h-3 rounded-full bg-slate-600 mb-2"></div>
                       <span>成交</span>
                    </div>
                 </div>
              </div>

              {/* Event Triggers */}
              <div className="space-y-3">
                 <div className="text-xs font-bold text-slate-400 uppercase">Trigger Strategy (触达策略)</div>
                 
                 <div className="p-3 bg-gradient-to-r from-blue-500/10 to-transparent border-l-2 border-blue-500 rounded flex items-center justify-between">
                    <div>
                       <div className="text-sm font-bold text-white">事件驱动 (Event-Driven)</div>
                       <div className="text-xs text-slate-400">政策发布 / 房源降价 / 学区划分</div>
                    </div>
                    <i className="fas fa-bolt text-blue-400 text-lg"></i>
                 </div>

                 <div className="p-3 bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 rounded flex items-center justify-between">
                    <div>
                       <div className="text-sm font-bold text-white">主动触达 (Proactive)</div>
                       <div className="text-xs text-slate-400">偏好挖掘 / 潜在需求探查 / 周期性激活</div>
                    </div>
                    <i className="fas fa-search-dollar text-orange-400 text-lg"></i>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: 1-on-1 Strategy & Skills */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-cyan-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-wand-magic-sparkles mr-3 text-cyan-400"></i> 1人1策与 Skills 赋能
           </h3>

           <div className="flex-1 space-y-6">
              <div className="p-5 bg-slate-900/50 rounded-xl border border-dashed border-white/10 relative">
                 <div className="absolute top-3 right-3 text-[10px] text-cyan-400 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">
                    Running Skill: mining_user_demand
                 </div>
                 <div className="space-y-4 font-mono text-xs">
                    <div className="text-slate-500">
                       <span className="text-purple-400">输入:</span> User(行为:多次浏览学区房, 标签:价格敏感), Memory(历史咨询:孩子明年上学)
                    </div>
                    <div className="pl-4 border-l border-slate-700 space-y-2">
                       <div className="text-slate-400 flex items-center">
                          <i className="fas fa-circle-notch animate-spin mr-2 text-cyan-400 text-[10px]"></i>
                          正在关联行为与历史记忆...
                       </div>
                       <div className="text-slate-400 flex items-center">
                          <i className="fas fa-circle-notch animate-spin mr-2 text-cyan-400 text-[10px]"></i>
                          挖掘隐性需求：高性价比学区房...
                       </div>
                       <div className="text-green-400">
                          <i className="fas fa-check mr-2"></i>
                          个性化推荐策略生成完毕
                       </div>
                    </div>
                 </div>
              </div>

              {/* Output Example */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-2">Case Study</div>
                 <div className="flex gap-4">
                    <div className="w-16 h-20 bg-slate-700 rounded flex items-center justify-center">
                       <i className="fas fa-robot text-slate-500"></i>
                    </div>
                    <div className="flex-1">
                       <div className="text-sm font-bold text-white mb-1">无需订阅，自动挖掘：学区房需求捕获</div>
                       <p className="text-xs text-slate-400 leading-relaxed">
                          系统通过分析用户浏览行为与历史对话记忆，自动识别出“学区”隐性需求。结合最新政策，生成针对性解读文章主动推送，引导留资。
                       </p>
                       <div className="mt-2 flex gap-2">
                          <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] rounded">1人1策</span>
                          <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] rounded">自动激活</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyNurturingPage;