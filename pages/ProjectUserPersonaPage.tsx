
import React from 'react';

const ProjectUserPersonaPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
          <i className="fas fa-fingerprint text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">数据基建进阶：用户主动行为画像</h2>
          <p className="text-base text-slate-400">基于“搜/筛/问”全链路主动行为的画像重构算法</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left: Logic & Algorithm */}
        <div className="space-y-6 flex flex-col">
          <div className="glass-card p-6 rounded-2xl border-l-4 border-orange-500 hover:bg-slate-800/60 transition-colors">
             <h3 className="text-xl font-bold text-white mb-5">核心算法逻辑 (Algorithm)</h3>
             <div className="space-y-5">
                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 relative">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-orange-500 rounded-r"></div>
                   <h4 className="text-sm font-bold text-white mb-2">1. 行为加权 (Action Weighting)</h4>
                   <p className="text-sm text-slate-400 leading-relaxed mb-3">
                     区分意向强度，赋予差异化权重参数。
                   </p>
                   <div className="flex gap-3">
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30 font-medium">High (20): 找房需求单 / 咨询</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30 font-medium">Mid (10): 搜索 / 筛选</span>
                   </div>
                </div>

                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 relative">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-cyan-500 rounded-r"></div>
                   <h4 className="text-sm font-bold text-white mb-2">2. 时间衰减 (Time Decay)</h4>
                   <p className="text-sm text-slate-400 leading-relaxed flex items-center justify-between">
                     <span>引入指数衰减因子，聚焦用户近期真实意图。</span>
                     <span className="font-mono text-cyan-400 text-base">e^(-t/180)</span>
                   </p>
                </div>

                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 relative">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-purple-500 rounded-r"></div>
                   <h4 className="text-sm font-bold text-white mb-2">3. 置信度分级 (Confidence Level)</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">
                     基于全量用户分位数法（30%/70%），将偏好强度划分为 <span className="text-white font-bold">高、中、低</span> 三级，输出 Top 5 偏好值。
                   </p>
                </div>
             </div>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex-1 hover:bg-slate-800/60 transition-colors">
             <h3 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4 flex items-center">
               <i className="fas fa-tag mr-2"></i> CDP 标签输出示例
             </h3>
             <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-slate-400">主动行为标签_总价偏好</span>
                   <span className="text-emerald-400 font-bold">100万以内, 高</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-slate-400">主动行为标签_新房板块</span>
                   <span className="text-emerald-400 font-bold">南京-河西, 中</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-slate-400">主动行为标签_业务偏好</span>
                   <span className="text-emerald-400 font-bold">新房, 高</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Data Collection Matrix */}
        <div className="glass-card p-8 rounded-2xl border-t-4 border-t-orange-500 flex flex-col h-full hover:bg-slate-800/60 transition-colors">
           <h3 className="text-2xl font-bold text-white mb-8">全场景数据采集矩阵</h3>
           
           <div className="flex-1 space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-slate-800"></div>

              {/* Item 1 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 z-10">
                    <i className="fas fa-magnifying-glass text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-white">搜 (Search)</h4>
                 <div className="text-sm text-slate-400 mt-2 space-y-1.5">
                    <p>• 采集联想词、历史记录中的<strong>小区/楼盘 ID</strong></p>
                    <p>• 映射楼盘户型总价集合、板块归属</p>
                 </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center text-purple-400 z-10">
                    <i className="fas fa-sliders text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-white">筛 (Filter)</h4>
                 <div className="text-sm text-slate-400 mt-2 space-y-1.5">
                    <p>• 采集列表页筛选条件：<strong>Total Price & Location</strong></p>
                    <p>• 精确匹配主数据板块字典（location_level_three）</p>
                 </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10">
                    <i className="fas fa-comments text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-white">问 (Ask)</h4>
                 <div className="text-sm text-slate-400 mt-2 space-y-1.5">
                    <p>• 咨询楼盘/房源/户型详情页</p>
                    <p>• 优先采集具体房源总价，降级使用楼盘均价集合</p>
                 </div>
              </div>

              {/* Item 4 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-red-500 flex items-center justify-center text-red-400 z-10">
                    <i className="fas fa-clipboard-list text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-white">填 (Fill)</h4>
                 <div className="text-sm text-slate-400 mt-2 space-y-1.5">
                    <p>• “帮你找房”需求单提交</p>
                    <p>• <strong>最高权重</strong>的主动偏好表达</p>
                 </div>
              </div>
           </div>

           <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
              <div>
                 <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Data Update</div>
                 <div className="text-2xl font-black text-white mt-1">T+1</div>
              </div>
              <div className="text-right">
                 <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Accuracy</div>
                 <div className="text-2xl font-black text-orange-400 mt-1">&gt;90%</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUserPersonaPage;
