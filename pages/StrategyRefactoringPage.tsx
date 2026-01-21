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
        {/* Left Column: Scope & Stability */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-orange-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-server mr-3 text-orange-400"></i> 二手房老后台重构范围
           </h3>
           
           <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-slate-700/50 transition-colors">
                 <i className="fas fa-users-cog text-slate-400 text-2xl mb-2"></i>
                 <div className="text-sm font-bold text-white">客源/中介管理</div>
                 <div className="text-[10px] text-slate-500 mt-1">门店 / 经纪人 / 认证</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-slate-700/50 transition-colors">
                 <i className="fas fa-building text-slate-400 text-2xl mb-2"></i>
                 <div className="text-sm font-bold text-white">房源管理</div>
                 <div className="text-[10px] text-slate-500 mt-1">录入 / 审核 / 上下架</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-slate-700/50 transition-colors">
                 <i className="fas fa-file-invoice-dollar text-slate-400 text-2xl mb-2"></i>
                 <div className="text-sm font-bold text-white">订单/退款</div>
                 <div className="text-[10px] text-slate-500 mt-1">套餐 / 支付 / 售后</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-slate-700/50 transition-colors">
                 <i className="fas fa-palette text-slate-400 text-2xl mb-2"></i>
                 <div className="text-sm font-bold text-white">CMS / 活动配置</div>
                 <div className="text-[10px] text-slate-500 mt-1">专题页 / Banner / 弹窗</div>
              </div>
           </div>
        </div>

        {/* Right Column: Skills-Driven Ops */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-indigo-500 flex flex-col hover:bg-slate-800/60 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-cubes-stacked mr-3 text-indigo-400"></i> Skills 原子化运营提效
           </h3>
           
           <div className="flex-1 space-y-6">
              <div className="p-5 bg-gradient-to-br from-indigo-900/40 to-slate-900/50 rounded-xl border border-indigo-500/20">
                 <div className="text-xs font-bold text-indigo-300 uppercase mb-3 flex items-center">
                    <i className="fas fa-bolt mr-2"></i> Case 1: 活动专题一键生成
                 </div>
                 <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">房源筛选 Skill</div>
                    <i className="fas fa-plus text-slate-600 text-[10px]"></i>
                    <div className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">模板配置 Skill</div>
                    <i className="fas fa-plus text-slate-600 text-[10px]"></i>
                    <div className="px-2 py-1 bg-slate-800 rounded border border-white/10 text-[10px] text-slate-400">上线发布 Skill</div>
                 </div>
                 <div className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-500">
                    运营无需反复跳转配置，仅需输入活动主题与规则，Skills 自动组装生成 H5 专题页，耗时从 3小时 → 5分钟。
                 </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-orange-900/20 to-slate-900/50 rounded-xl border border-orange-500/20">
                 <div className="text-xs font-bold text-orange-300 uppercase mb-3 flex items-center">
                    <i className="fas fa-terminal mr-2"></i> Case 2: 指令式快速运维
                 </div>
                 <div className="p-3 bg-black/30 rounded border border-white/5 font-mono text-[10px] text-slate-300 mb-2">
                    &gt; run skill: batch_update_agent_status --filter "score&lt;60" --action "warning"
                 </div>
                 <div className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-orange-500">
                    将高频的增删改查封装为 Skills，支持自然语言或指令批量操作，极大降低后台操作复杂度与误操作风险。
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyRefactoringPage;