
import React from 'react';

const ProjectContentGenPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-inner">
          <i className="fas fa-file-lines text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-black text-indigo-900 drop-shadow-sm">AI 应用场景 II：AIGC 内容生产</h2>
          <p className="text-sm text-slate-500 font-bold">规模化内容生成，0人工成本，高转化</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="clay-card p-6 flex flex-col h-full hover:bg-slate-50 transition-colors">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600 shadow-sm">
                  <i className="fas fa-house-laptop"></i>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-800">小区测评与房源描述</h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-cyan-100 text-cyan-600 text-xs font-bold shadow-sm">自动化率 100%</div>
           </div>
           
           <div className="space-y-6 flex-1">
             <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner">
                <div className="flex items-center mb-2">
                   <i className="fas fa-bolt text-yellow-500 mr-2"></i>
                   <span className="text-sm font-bold text-slate-700">效率革命</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  传统人工撰写一篇优质测评需 2-3 小时，AI 仅需 <span className="text-cyan-600 font-black">10-20秒</span>。
                  3天内完成全站 <span className="text-slate-800 font-black">1300+</span> 核心小区覆盖。
                </p>
             </div>

             <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner">
                <div className="flex items-center mb-2">
                   <i className="fas fa-chart-line text-green-500 mr-2"></i>
                   <span className="text-sm font-bold text-slate-700">效果验证</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                   <span>房源详情页 CTR</span>
                   <span className="text-green-600 font-black">+30%</span>
                </div>
                <div className="w-full h-px bg-slate-200 my-2"></div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                   <span>测评页咨询转化率</span>
                   <span className="text-green-600 font-black">8% - 12%</span>
                </div>
             </div>
           </div>

           <div className="mt-auto pt-6">
             <div className="flex items-baseline space-x-2">
               <span className="text-4xl font-black text-cyan-500">≈0.2</span>
               <span className="text-sm text-slate-400 font-bold">元 / 篇 (API成本)</span>
             </div>
           </div>
        </div>

        {/* Content Showcase / Feedback */}
        <div className="clay-card p-6 bg-gradient-to-br from-slate-50 to-cyan-50 border border-cyan-100 flex flex-col h-full hover:bg-slate-100 transition-colors">
           <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
             <i className="fas fa-wand-magic-sparkles mr-2 text-cyan-500"></i> 生成效果示例
           </h3>
           
           <div className="flex-1 space-y-4 relative overflow-hidden p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="absolute top-0 right-0 p-2 bg-cyan-500 text-white text-[10px] font-bold rounded-bl-xl shadow-md">AI Generated</div>
              
              <h4 className="text-sm font-black text-slate-800">✨ 万科金域蓝湾 - 尊享品质生活</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                 【核心卖点】位于江宁核心大学城板块，紧邻地铁1号线。小区由万科物业提供管家式服务，绿化率高达45%，人车分流设计...
              </p>
              <div className="flex gap-2 mt-2">
                 <span className="px-2 py-1 bg-cyan-50 rounded text-[9px] text-cyan-600 border border-cyan-100 font-bold">地铁沿线</span>
                 <span className="px-2 py-1 bg-cyan-50 rounded text-[9px] text-cyan-600 border border-cyan-100 font-bold">品牌物业</span>
                 <span className="px-2 py-1 bg-cyan-50 rounded text-[9px] text-cyan-600 border border-cyan-100 font-bold">高绿化</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
                 <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-bold shadow-inner">用户</div>
                    <div className="text-[10px] text-slate-600 bg-slate-100 p-2 rounded-lg rounded-tl-none font-medium">
                       这个测评写的很专业，比我自己去跑盘了解的还详细，尤其是周边的学校和商业配套分析，很有参考价值。
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-4 text-center">
              <p className="text-[10px] text-slate-400 font-bold">
                 通过结构化数据输入 + Prompt 工程优化，确保内容准确性与可读性。
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentGenPage;
