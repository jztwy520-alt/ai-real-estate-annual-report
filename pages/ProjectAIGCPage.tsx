
import React from 'react';

const ProjectAIGCPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <i className="fas fa-wand-magic-sparkles text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">AI 应用场景</h2>
          <p className="text-sm text-slate-400">经纪人 IM 智能回复 & AIGC 内容生成</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IM Helper Section */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-purple-500 flex flex-col h-full">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <i className="fas fa-comments"></i>
                 </div>
                 <h3 className="text-xl font-bold text-white">IM 智能回复</h3>
              </div>
              <div className="px-3 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-bold">7x24h 响应</div>
           </div>
           
           <div className="space-y-4 mb-8 flex-1">
             <div className="p-3 rounded bg-slate-800/50 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Situation</div>
                <p className="text-xs text-slate-300">经纪人回复不及时，夜间/忙碌时段客户流失严重。</p>
             </div>
             <div className="p-3 rounded bg-slate-800/50 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Action</div>
                <p className="text-xs text-slate-300">接入 AI 聊天智能体，覆盖高频问题，引导留资。</p>
             </div>
           </div>

           <div className="mt-auto">
             <div className="flex items-end justify-between mb-2">
                <span className="text-sm text-slate-400">1分钟回复率</span>
                <span className="text-3xl font-black text-purple-400">85%</span>
             </div>
             <div className="w-full bg-slate-800 rounded-full h-1.5 mb-1">
                <div className="bg-purple-500 h-1.5 rounded-full w-[85%]"></div>
             </div>
             <div className="text-[10px] text-slate-500 text-right">From 55%</div>
           </div>
        </div>

        {/* AIGC Content Section */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-cyan-500 flex flex-col h-full">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <i className="fas fa-file-alt"></i>
                 </div>
                 <h3 className="text-xl font-bold text-white">AIGC 内容生产</h3>
              </div>
              <div className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-bold">0 人工成本</div>
           </div>
           
           <div className="space-y-4 mb-8 flex-1">
             <div className="p-3 rounded bg-slate-800/50 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Situation</div>
                <p className="text-xs text-slate-300">小区测评/房源描述缺失，人工撰写成本高、更新慢。</p>
             </div>
             <div className="p-3 rounded bg-slate-800/50 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Action</div>
                <p className="text-xs text-slate-300">利用 LLM 结合平台数据，批量生成高质量测评与描述。</p>
             </div>
           </div>

           <div className="mt-auto grid grid-cols-2 gap-4">
             <div>
                <div className="text-2xl font-black text-cyan-400">1300+</div>
                <div className="text-[10px] text-slate-500">小区测评覆盖</div>
             </div>
             <div>
                <div className="text-2xl font-black text-white">8-12%</div>
                <div className="text-[10px] text-slate-500">咨询转化率 (CVR)</div>
             </div>
           </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl flex items-center justify-between border border-white/5">
         <div className="text-sm text-slate-300">
           <i className="fas fa-bolt text-yellow-400 mr-2"></i>
           <span className="font-bold text-white">核心价值：</span> 
           从“被动响应”转向“主动服务”，从“人工编辑”转向“自动化生产”，显著降低运营成本。
         </div>
      </div>
    </div>
  );
};

export default ProjectAIGCPage;
