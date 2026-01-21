import React from 'react';

const StrategyRefactoringPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
          <i className="fas fa-hammer text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">基建重构：Skills 思维下的后台进化</h2>
          <p className="text-base text-slate-400">稳定内核 + 原子化操作技能，重塑中后台生产力</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left Column: Listing Management System */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-orange-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-database mr-3 text-orange-400"></i> 房源管理系统重构 (Listing)
           </h3>
           
           <div className="flex-1 space-y-6">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-2">现状与挑战</div>
                 <p className="text-sm text-slate-300 leading-relaxed">
                    当前房源数据非自建，主要依赖采集（贝壳等）。面临数据清洗难、主数据标准不统一、多端调用困难等问题。
                 </p>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                       <i className="fas fa-filter"></i>
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white">数据清洗与存储</div>
                       <div className="text-xs text-slate-400">多个包装选最优、字段切分，存储为 AI 高效利用格式，避免上下文污染。</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                       <i className="fas fa-plus-circle"></i>
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white">增益数据维护</div>
                       <div className="text-xs text-slate-400">持续补充小区、行情、学校、配套、政策等维度，丰富房源画像。</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                       <i className="fas fa-project-diagram"></i>
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white">中台化建设 (API & Service)</div>
                       <div className="text-xs text-slate-400">标准化接口，方便运营后台、C端、AI Agent 统一调用</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Skills-Driven Ops */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-indigo-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-cubes-stacked mr-3 text-indigo-400"></i> Skills 赋能高效配房
           </h3>
           
           <div className="flex-1 space-y-6">
              <div className="p-5 bg-gradient-to-br from-indigo-900/40 to-slate-900/50 rounded-xl border border-indigo-500/20">
                 <div className="text-xs font-bold text-indigo-300 uppercase mb-3 flex items-center">
                    <i className="fas fa-bolt mr-2"></i> Case: AI 智能配房 (Smart Matching)
                 </div>
                 
                 <div className="space-y-3">
                    <div className="flex items-center gap-2">
                       <span className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">用户需求解析</span>
                       <i className="fas fa-arrow-right text-slate-600 text-[10px]"></i>
                       <span className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">房源检索 Skill</span>
                       <i className="fas fa-arrow-right text-slate-600 text-[10px]"></i>
                       <span className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">推荐理由生成</span>
                    </div>
                    
                    <div className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-500">
                       改变以往“人工手动搜筛”的低效模式。平台运营、小B或AI系统可直接调用 <span className="text-indigo-400 font-bold">Matching Skills</span>，结合用户画像快速生成带看方案。
                    </div>
                 </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-orange-900/20 to-slate-900/50 rounded-xl border border-orange-500/20">
                 <div className="text-xs font-bold text-orange-300 uppercase mb-3 flex items-center">
                    <i className="fas fa-terminal mr-2"></i> Value: 告别低效检索
                 </div>
                 <div className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-orange-500">
                    将房源管理从“静态存储”升级为“动态服务”，让数据真正流动起来，赋能交易全链路。
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyRefactoringPage;