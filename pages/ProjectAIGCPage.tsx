
import React from 'react';

const ProjectAIGCPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-inner">
          <i className="fas fa-wand-magic-sparkles text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-black text-indigo-900 drop-shadow-sm">AI 应用场景</h2>
          <p className="text-sm text-slate-500 font-bold">经纪人 IM 智能回复 & AIGC 内容生成</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IM Helper Section */}
        <div className="clay-card p-6 flex flex-col h-full hover:bg-slate-50 transition-colors">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shadow-sm">
                    <i className="fas fa-comments"></i>
                 </div>
                 <h3 className="text-xl font-display font-bold text-slate-800">IM 智能回复</h3>
              </div>
              <div className="px-3 py-1 rounded-lg bg-purple-100 text-purple-600 text-xs font-bold shadow-sm">7x24h 响应</div>
           </div>
           
           <div className="space-y-4 mb-8 flex-1">
             <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Situation</div>
                <p className="text-xs text-slate-600 font-medium">经纪人回复不及时，夜间/忙碌时段客户流失严重。</p>
             </div>
             <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 shadow-sm">
                <div className="text-[10px] text-purple-400 uppercase font-bold mb-1">Action</div>
                <p className="text-xs text-purple-700 font-medium">接入 AI 聊天智能体，覆盖高频问题，引导留资。</p>
             </div>
           </div>

           <div className="mt-auto">
             <div className="flex items-end justify-between mb-2">
                <span className="text-sm text-slate-500 font-bold">1分钟回复率</span>
                <span className="text-3xl font-black text-purple-500">85%</span>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-2 shadow-inner">
                <div className="bg-purple-500 h-2 rounded-full w-[85%] shadow-[0_2px_4px_rgba(168,85,247,0.3)]"></div>
             </div>
             <div className="text-[10px] text-slate-400 text-right mt-1 font-bold">From 55%</div>
           </div>
        </div>

        {/* AIGC Content Section */}
        <div className="clay-card p-6 flex flex-col h-full hover:bg-slate-50 transition-colors">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600 shadow-sm">
                    <i className="fas fa-file-alt"></i>
                 </div>
                 <h3 className="text-xl font-display font-bold text-slate-800">AIGC 内容生产</h3>
              </div>
              <div className="px-3 py-1 rounded-lg bg-cyan-100 text-cyan-600 text-xs font-bold shadow-sm">0 人工成本</div>
           </div>
           
           <div className="space-y-4 mb-8 flex-1">
             <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Situation</div>
                <p className="text-xs text-slate-600 font-medium">小区测评/房源描述缺失，人工撰写成本高、更新慢。</p>
             </div>
             <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-100 shadow-sm">
                <div className="text-[10px] text-cyan-400 uppercase font-bold mb-1">Action</div>
                <p className="text-xs text-cyan-700 font-medium">利用 LLM 结合平台数据，批量生成高质量测评与描述。</p>
             </div>
           </div>

           <div className="mt-auto grid grid-cols-2 gap-4">
             <div className="p-3 bg-cyan-50 rounded-xl text-center">
                <div className="text-2xl font-black text-cyan-600">1300+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">小区测评覆盖</div>
             </div>
             <div className="p-3 bg-purple-50 rounded-xl text-center">
                <div className="text-2xl font-black text-purple-600">8-12%</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">咨询转化率 (CVR)</div>
             </div>
           </div>
        </div>
      </div>
      
      <div className="clay-card p-6 flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
         <div className="text-sm text-slate-600 font-medium">
           <i className="fas fa-bolt text-yellow-500 mr-2"></i>
           <span className="font-black text-slate-800">核心价值：</span> 
           从“被动响应”转向“主动服务”，从“人工编辑”转向“自动化生产”，显著降低运营成本。
         </div>
      </div>
    </div>
  );
};

export default ProjectAIGCPage;
