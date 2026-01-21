
import React, { useState } from 'react';

const ProjectSmartReplyPage: React.FC = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
          <i className="fas fa-comments text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">AI 应用场景 III：经纪人 IM 智能回复</h2>
          <p className="text-base text-slate-400">7x24h 实时响应，留资率提升引擎</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col">
          <div className="glass-card p-5 rounded-2xl border-l-4 border-purple-500 hover:bg-slate-800/60 transition-colors">
             <h3 className="text-xl font-bold text-white mb-5">核心痛点 (Pain Points)</h3>
             <ul className="space-y-4 text-base text-slate-300">
               <li className="flex items-start">
                 <i className="fas fa-times-circle text-red-400 mt-1 mr-3 text-base"></i>
                 <span><strong className="text-slate-200">响应不及时:</strong> 经纪人带看/夜间无法回复，导致大量线索流失。</span>
               </li>
               <li className="flex items-start">
                 <i className="fas fa-times-circle text-red-400 mt-1 mr-3 text-base"></i>
                 <span><strong className="text-slate-200">服务方差大:</strong> 新人与资深经纪人回复质量参差不齐，缺乏标准化。</span>
               </li>
             </ul>
          </div>

          {/* Key Metrics Highlight */}
          <div className="glass-card p-5 rounded-2xl border-l-4 border-emerald-500 hover:bg-slate-800/60 transition-colors">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">关键业务指标提升 (Key Metrics)</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                 <div className="flex items-center justify-between">
                   <span className="text-slate-300 text-sm font-medium">经纪人工时段 1分钟回复率</span>
                   <div className="flex items-center gap-2">
                     <span className="text-slate-500 line-through text-xs">55%</span>
                     <i className="fas fa-arrow-right text-slate-600 text-xs"></i>
                     <span className="text-2xl font-black text-white">85%</span>
                   </div>
                 </div>
                 <div className="text-[10px] text-slate-500 pl-2 border-l-2 border-slate-700 leading-tight">
                   包含转人工、夜间未回复场景
                 </div>
              </div>
              
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-slate-300 text-sm font-medium">真实 1分钟回复率</span>
                <span className="text-2xl font-black text-emerald-400">&gt; 95%</span>
              </div>
            </div>
          </div>

          {/* Performance Optimization Section */}
          <div className="glass-card p-5 rounded-2xl flex-1 hover:bg-slate-800/60 transition-colors">
             <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-white">性能与成本优化 (Optimization)</h3>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded font-bold border border-green-500/20">Latest Update</span>
             </div>
             <p className="text-base text-slate-400 mb-6 leading-relaxed">
               设计初衷：部分商品属性 ID 查询由 MCP 改为接口直连，推荐场景仍保留 MCP。
             </p>
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-3">
                 <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Cost / 100 Sessions</div>
                 <div className="flex items-end space-x-3">
                   <span className="text-3xl font-black text-green-400">$0.012</span>
                   <span className="text-sm text-slate-500 line-through mb-1.5">$0.027</span>
                 </div>
                 <div className="text-sm text-green-500 bg-green-500/10 inline-block px-2 py-0.5 rounded border border-green-500/20 font-bold">Token ↓ 55%</div>
               </div>
               <div className="space-y-3">
                 <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Avg Latency</div>
                 <div className="flex items-end space-x-3">
                   <span className="text-3xl font-black text-cyan-400">5s</span>
                   <span className="text-sm text-slate-500 line-through mb-1.5">30s</span>
                 </div>
                 <div className="text-sm text-cyan-500 bg-cyan-500/10 inline-block px-2 py-0.5 rounded border border-cyan-500/20 font-bold">Time ↓ 83%</div>
               </div>
             </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col">
           {/* Design Philosophy / LOD */}
           <div className="glass-card p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 hover:bg-slate-800/60 transition-colors">
              <h3 className="text-base font-bold text-slate-200 uppercase tracking-widest mb-5 flex items-center">
                <i className="fas fa-layer-group mr-2 text-purple-400"></i> 关键思考：意图渐进式披露 (LOD)
              </h3>
              <p className="text-base text-slate-400 leading-relaxed mb-6">
                类比游戏开发的 <strong>LOD (Level of Detail)</strong> 技术，采用“信息分层、按需加载”的策略。
                优先 Intent 分类，再加载 Topic 详情，避免一次性加载冗余上下文，显著降低 Token 消耗并提升响应速度。
              </p>
              
              <div className="space-y-4 relative pl-6 border-l border-slate-700">
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-500 font-medium">Layer 1</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 font-bold">Intent 识别</span>
                    <span className="ml-3 text-slate-500 text-sm">(问候 / 咨询房源 / 政策...)</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-500 font-medium">Layer 2</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 font-bold">Topic 细分</span>
                    <span className="ml-3 text-slate-500 text-sm">(基础信息 / 税费 / 学籍...)</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-500 font-medium">Layer 3</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded border border-slate-600 font-bold">Reply Strategy (针对性回复)</span>
                    <span className="ml-3 text-slate-500 text-sm">(Adaptive Gen / 自适应生成...)</span>
                 </div>
              </div>
           </div>

           {/* User Feedback Simulation */}
           <div className="glass-card p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col flex-1 hover:bg-slate-800/60 transition-colors">
              <h3 className="text-base font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center">
                <i className="fas fa-comment-dots mr-2 text-purple-400"></i> 用户真实反馈
              </h3>
              
              <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[250px]">
                 <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">经纪人</div>
                    <div className="bg-purple-500/20 p-4 rounded-2xl rounded-tr-none text-base text-white max-w-[85%] border border-purple-500/30 leading-relaxed">
                       暂时没啥问题，比之前要好很多！平时带看忙来不及回复的时候会很好用。
                    </div>
                 </div>
                  <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">经纪人</div>
                    <div className="bg-purple-500/20 p-4 rounded-2xl rounded-tr-none text-base text-white max-w-[85%] border border-purple-500/30 leading-relaxed">
                       而且 AI 话术也挺好，不像是机器人回复的。有时候我自己回复都不一定能写这么详细 😂😂
                    </div>
                 </div>
              </div>
              
              <button 
                onClick={() => setShowFeedbackModal(true)}
                className="w-full mt-5 py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold flex items-center justify-center transition-all group"
              >
                <i className="fas fa-images mr-2 group-hover:scale-110 transition-transform"></i>
                查看留资案例及用户反馈 (View Cases & Feedback)
              </button>
           </div>
        </div>
      </div>

      {/* Image Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowFeedbackModal(false)}>
          <div className="relative w-full max-w-7xl h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {/* Back Button */}
            <button 
              onClick={() => setShowFeedbackModal(false)}
              className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-white text-sm backdrop-blur-md transition-colors flex items-center shadow-lg"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
            </button>

            <button 
              onClick={() => setShowFeedbackModal(false)}
              className="absolute -top-12 right-0 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="flex gap-6 w-full h-full overflow-x-auto p-4 items-center snap-x snap-mandatory custom-scrollbar">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex-none w-[85vw] md:w-[600px] h-full bg-slate-800/50 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-2 snap-center relative group cursor-zoom-in" onClick={() => window.open(`/images/feedback_${num}.png`, '_blank')}>
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-search-plus mr-1"></i> 点击查看大图
                  </div>
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10">
                    Case {num}
                  </div>
                  <img 
                    src={`/images/feedback_${num}.png`} 
                    alt={`Feedback Case ${num}`} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSmartReplyPage;
