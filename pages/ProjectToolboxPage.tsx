
import React from 'react';

const ProjectToolboxPage: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 shadow-inner">
          <i className="fas fa-code text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-black text-indigo-900 drop-shadow-sm">AI Design Coding</h2>
          <p className="text-sm text-slate-500 font-bold">淘房工具箱：从设计到代码的自动化革命</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="clay-card p-8 hover:bg-slate-50 transition-colors">
          <h3 className="text-lg font-black text-slate-800 mb-6">自动化交付链路</h3>
          <div className="flex items-center justify-between mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-2 border border-slate-200 group-hover:border-purple-500 transition-all shadow-sm">
                <i className="fab fa-figma text-2xl text-purple-500"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Design</div>
            </div>
            <i className="fas fa-arrow-right text-slate-300"></i>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-2 border border-slate-200 group-hover:border-cyan-500 transition-all shadow-sm">
                <i className="fas fa-wand-magic-sparkles text-2xl text-cyan-500"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Code</div>
            </div>
            <i className="fas fa-arrow-right text-slate-300"></i>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-2 border border-slate-200 group-hover:border-emerald-500 transition-all shadow-sm">
                <i className="fas fa-mobile-screen text-2xl text-emerald-500"></i>
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Product</div>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between shadow-sm">
                <span className="text-sm text-emerald-700 font-bold">开发周期缩减</span>
                <span className="text-xl font-black text-emerald-500">50%+</span>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed font-medium">
               引入 AI Design Coding 模式，打通从设计（figma/html）到 code 的自动化生成链路，解决创新类工具需求多、变化快、开发成本高的问题。
             </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="clay-card p-6 bg-gradient-to-br from-emerald-50 to-white hover:bg-emerald-50/50 transition-colors">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-black text-slate-800">创新工具矩阵</h4>
              <span className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-600 text-[10px] font-bold shadow-sm">快速验证</span>
            </div>
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm font-bold text-slate-700">捡漏房源雷达</div>
                   <div className="text-[10px] text-slate-400 font-medium">价格敏感型</div>
                 </div>
                 <div className="text-right">
                   <div className="text-2xl font-black text-emerald-500">20.39%</div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold">订阅转化率</div>
                 </div>
               </div>
               <div className="w-full h-px bg-slate-200"></div>
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm font-bold text-slate-700">学校找房</div>
                   <div className="text-[10px] text-slate-400 font-medium">特定场景</div>
                 </div>
                 <div className="text-right">
                   <div className="text-2xl font-black text-slate-800">30%</div>
                   <div className="text-[10px] text-slate-400 uppercase font-bold">早期订阅率</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="clay-card p-6 border border-slate-100 hover:bg-slate-50 transition-colors">
             <h4 className="text-slate-600 font-black mb-3 flex items-center text-sm">
              <i className="fas fa-lightbulb mr-2 text-yellow-500"></i> 价值验证
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              验证了特定场景（捡漏、学区）的用户需求，通过极低成本快速上线多个工具，实现了“小步快跑”的产品迭代策略。
            </p>
          </div>
        </div>
      </div>
      <div className="clay-card p-8 hover:bg-slate-50 transition-colors">
         <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center">
            <i className="fas fa-brain mr-3 text-indigo-500"></i> AI 工程化思考与总结
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-sm">01</div>
                  <h4 className="text-sm font-bold text-slate-700">规范与思路的坚持</h4>
               </div>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  项目初期坚持让设计提供稳定规范，虽然这一决策在后期因项目进度导致了较多调教成本，但事实证明 <strong>AI 工程化的思路</strong> 是完全正确的，标准化的输入是自动化产出的基石。
               </p>
            </div>
            
            <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 font-bold text-sm">02</div>
                  <h4 className="text-sm font-bold text-slate-700">交付形式的探索</h4>
               </div>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  从 Figma MCP 到 HTML、小程序代码，我们在 4 个功能中不断摸索最佳交付形式。特别是 <strong>【地图画圈】</strong> 功能，AI 提供的 Demo 方案解决了原有的技术路径模糊问题，验证了 AI 在技术方案选型上的价值。
               </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold text-sm">03</div>
                  <h4 className="text-sm font-bold text-slate-700">生产级工具验证</h4>
               </div>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  尽管当时模型（如 Gemini-3）尚未完全成熟，但实际数据反馈良好，证明了业务目标方向正确。AI 已完全具备作为 <strong>生产级工具</strong> 的能力，随着熟练度提升，将大幅缩减生产环节与成本。
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProjectToolboxPage;
