
import React from 'react';

const ProjectToolboxPage: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i className="fas fa-code text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">AI Design Coding</h2>
          <p className="text-sm text-slate-400">淘房工具箱：从设计到代码的自动化革命</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">自动化交付链路</h3>
          <div className="flex items-center justify-between mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-2 border border-white/5 group-hover:border-purple-500 transition-all">
                <i className="fab fa-figma text-2xl text-purple-400"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Design</div>
            </div>
            <i className="fas fa-arrow-right text-slate-700"></i>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-2 border border-white/5 group-hover:border-cyan-500 transition-all">
                <i className="fas fa-wand-magic-sparkles text-2xl text-cyan-400"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Code</div>
            </div>
            <i className="fas fa-arrow-right text-slate-700"></i>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-2 border border-white/5 group-hover:border-emerald-500 transition-all">
                <i className="fas fa-mobile-screen text-2xl text-emerald-400"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Product</div>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-sm text-slate-300">开发周期缩减</span>
                <span className="text-xl font-black text-emerald-400">50%+</span>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed">
               引入 AI Design Coding 模式，打通从设计（figma/html）到 code 的自动化生成链路，解决创新类工具需求多、变化快、开发成本高的问题。
             </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-white">创新工具矩阵</h4>
              <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">快速验证</span>
            </div>
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm font-bold text-white">捡漏房源雷达</div>
                   <div className="text-[10px] text-slate-500">价格敏感型</div>
                 </div>
                 <div className="text-right">
                   <div className="text-2xl font-black text-emerald-400">20.39%</div>
                   <div className="text-[10px] text-slate-500 uppercase">订阅转化率</div>
                 </div>
               </div>
               <div className="w-full h-px bg-white/5"></div>
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm font-bold text-white">学校找房</div>
                   <div className="text-[10px] text-slate-500">特定场景</div>
                 </div>
                 <div className="text-right">
                   <div className="text-2xl font-black text-white">30%</div>
                   <div className="text-[10px] text-slate-500 uppercase">早期订阅率</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5">
             <h4 className="text-slate-400 font-bold mb-3 flex items-center text-sm">
              <i className="fas fa-lightbulb mr-2 text-yellow-400"></i> 价值验证
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              验证了特定场景（捡漏、学区）的用户需求，通过极低成本快速上线多个工具，实现了“小步快跑”的产品迭代策略。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectToolboxPage;
