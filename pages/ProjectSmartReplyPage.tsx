
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ProjectSmartReplyPage: React.FC = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 shadow-inner">
          <i className="fas fa-comments text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">AI 应用场景 III：经纪人 IM 智能回复</h2>
          <p className="text-base text-slate-500 font-bold">7x24h 实时响应，留资率提升引擎</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col">
          <div className="clay-card p-5 flex flex-col hover:bg-slate-50 transition-colors">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shadow-sm">
                 <i className="fas fa-exclamation-circle"></i>
               </div>
               <h3 className="text-xl font-display font-bold text-slate-800">核心痛点</h3>
             </div>
             <ul className="space-y-4 text-base text-slate-600 font-medium">
               <li className="flex items-start">
                 <i className="fas fa-times-circle text-red-400 mt-1 mr-3 text-base"></i>
                 <span><strong className="text-slate-800">响应不及时:</strong> 经纪人带看/夜间无法回复，导致大量线索流失。</span>
               </li>
               <li className="flex items-start">
                 <i className="fas fa-times-circle text-red-400 mt-1 mr-3 text-base"></i>
                 <span><strong className="text-slate-800">服务方差大:</strong> 新人与资深经纪人回复质量参差不齐，缺乏标准化。</span>
               </li>
             </ul>
          </div>

          {/* Key Metrics Highlight */}
          <div className="clay-card p-5 flex flex-col hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shadow-sm">
                 <i className="fas fa-chart-line"></i>
               </div>
               <h3 className="text-lg font-display font-bold text-emerald-600 uppercase tracking-widest">关键业务指标提升</h3>
             </div>
             <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                 <div className="flex items-center justify-between">
                   <span className="text-slate-600 text-sm font-bold">经纪人工时段 1分钟回复率</span>
                   <div className="flex items-center gap-2">
                     <span className="text-slate-400 line-through text-xs font-medium">55%</span>
                     <i className="fas fa-arrow-right text-slate-400 text-xs"></i>
                     <span className="text-2xl font-black text-slate-800">85%</span>
                   </div>
                 </div>
                 <div className="text-[10px] text-slate-400 pl-2 border-l-2 border-slate-200 leading-tight font-medium">
                   包含转人工、夜间未回复场景
                 </div>
              </div>
              
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-600 text-sm font-bold">真实 1分钟回复率</span>
                <span className="text-2xl font-black text-emerald-500">&gt; 95%</span>
              </div>
              
              <div className="pt-4 flex gap-3 mt-auto">
                 <button 
                   onClick={() => setShowFeedbackModal(true)}
                   className="flex-1 py-2.5 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs hover:bg-emerald-100 transition-colors flex items-center justify-center border border-emerald-200 shadow-sm group"
                 >
                   <i className="fas fa-file-invoice-dollar mr-2 group-hover:scale-110 transition-transform"></i> 查看留资案例
                 </button>
                 <button 
                   onClick={() => setShowFeedbackModal(true)}
                   className="flex-1 py-2.5 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs hover:bg-indigo-100 transition-colors flex items-center justify-center border border-indigo-200 shadow-sm group"
                 >
                   <i className="fas fa-comments mr-2 group-hover:scale-110 transition-transform"></i> 用户反馈
                 </button>
              </div>
            </div>
          </div>

          <div className="clay-card p-5 flex-1 hover:bg-slate-50 transition-colors">
             <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 shadow-sm">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-800">性能与成本优化</h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-lg font-bold border border-green-200 shadow-sm">Latest Update</span>
             </div>
             <p className="text-base text-slate-500 mb-6 leading-relaxed font-medium">
               思考与提炼：在流程中选择最合适的处理方案。房源推荐查数采用 <strong className="text-slate-700">MCP 查询</strong>，而具体房源查数则采用 <strong className="text-slate-700">API 直查</strong>，平衡灵活性与性能。
             </p>
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-3">
                 <div className="text-sm text-slate-400 uppercase font-black tracking-wider">Cost / 100 Sessions</div>
                 <div className="flex items-end space-x-3">
                   <span className="text-3xl font-black text-green-500">$0.012</span>
                   <span className="text-sm text-slate-400 line-through mb-1.5 font-bold">$0.027</span>
                 </div>
                 <div className="text-sm text-green-600 bg-green-100 inline-block px-2 py-0.5 rounded-lg border border-green-200 font-bold shadow-sm">Token ↓ 55%</div>
               </div>
               <div className="space-y-3">
                 <div className="text-sm text-slate-400 uppercase font-black tracking-wider">Avg Latency</div>
                 <div className="flex items-end space-x-3">
                   <span className="text-3xl font-black text-cyan-500">5s</span>
                   <span className="text-sm text-slate-400 line-through mb-1.5 font-bold">30s</span>
                 </div>
                 <div className="text-sm text-cyan-600 bg-cyan-100 inline-block px-2 py-0.5 rounded-lg border border-cyan-200 font-bold shadow-sm">Time ↓ 83%</div>
               </div>
             </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col">
           {/* Design Philosophy / LOD */}
           <div className="clay-card p-5 border border-slate-100 bg-gradient-to-br from-white to-slate-50 hover:bg-slate-100 transition-colors">
              <h3 className="text-base font-black text-slate-700 uppercase tracking-widest mb-5 flex items-center">
                <i className="fas fa-layer-group mr-2 text-purple-500"></i> 关键思考：意图渐进式披露 (LOD)
              </h3>
              <p className="text-base text-slate-500 leading-relaxed mb-6 font-medium">
                类比游戏开发的 <strong>LOD (Level of Detail)</strong> 技术，采用“信息分层、按需加载”的策略。
                优先 Intent 分类，再加载 Topic 详情，避免一次性加载冗余上下文，显著降低 Token 消耗并提升响应速度。
              </p>
              
              <div className="space-y-4 relative pl-6 border-l border-slate-200">
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-400 font-bold">Layer 1</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg border border-purple-200 font-bold shadow-sm">Intent 识别</span>
                    <span className="ml-3 text-slate-500 text-sm font-medium">(问候 / 咨询房源 / 政策...)</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-400 font-bold">Layer 2</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-lg border border-cyan-200 font-bold shadow-sm">Topic 细分</span>
                    <span className="ml-3 text-slate-500 text-sm font-medium">(基础信息 / 税费 / 学籍...)</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <span className="w-20 text-slate-400 font-bold">Layer 3</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-lg border border-slate-300 font-bold shadow-sm">Reply Strategy (针对性回复)</span>
                    <span className="ml-3 text-slate-500 text-sm font-medium">(Adaptive Gen / 自适应生成...)</span>
                 </div>
              </div>
           </div>

           {/* Response Efficiency & Guidance */}
          <div className="clay-card p-5 bg-white border border-slate-100 flex flex-col flex-1 hover:bg-slate-50 transition-colors">
             <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-black text-slate-500 uppercase tracking-widest flex items-center">
                  <i className="fas fa-rocket mr-2 text-purple-500"></i> 线索承接提效
                </h3>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 font-bold">Future Planning</span>
             </div>
             
             <div className="flex-1 space-y-6">
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 shadow-sm">
                   <div className="text-xs text-purple-500 font-bold mb-1 uppercase tracking-wider">规划背景</div>
                   <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      建立在前期智能回复能力建设之上，复用已成熟的意图识别与上下文工程能力。
                   </p>
                </div>

                <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 flex-shrink-0 mt-1 shadow-sm">
                      <i className="fas fa-wand-magic-sparkles"></i>
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">话术指导 & 辅助回复</h4>
                      <p className="text-base text-slate-500 leading-relaxed font-medium">
                         在经纪人承接线索时，AI 实时分析上下文，提供<span className="text-purple-600 font-bold">推荐回复话术</span>。经纪人可一键发送，无需手动编辑，显著降低沟通门槛与时间成本。
                      </p>
                   </div>
                </div>
                
                <div className="flex items-start">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-1 shadow-sm">
                      <i className="fas fa-robot"></i>
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">高频场景自动回复</h4>
                      <p className="text-base text-slate-500 leading-relaxed font-medium">
                         针对用户的高频、标准化咨询场景，系统支持<span className="text-emerald-600 font-bold">自动托管回复</span>，确保“高质量快速响应”，最大化留住、转化线索。
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>
     </div>

      {/* Image Modal - Clay Style */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowFeedbackModal(false)}>
          <div className="relative w-full max-w-7xl h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {/* Back Button */}
            <button 
              onClick={() => setShowFeedbackModal(false)}
              className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 border border-white/20 text-white text-sm backdrop-blur-md transition-colors flex items-center shadow-lg font-bold"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
            </button>

            <button 
              onClick={() => setShowFeedbackModal(false)}
              className="absolute -top-12 right-0 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors border border-white/20 shadow-lg"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="flex gap-6 w-full h-full overflow-x-auto p-4 items-center snap-x snap-mandatory custom-scrollbar">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex-none w-[85vw] md:w-[600px] h-full bg-slate-800 rounded-3xl overflow-hidden border-4 border-white flex items-center justify-center p-2 snap-center relative group cursor-zoom-in shadow-2xl" onClick={() => window.open(getAssetPath(`/images/feedback_${num}.png`), '_blank')}>
                  <div className="absolute top-4 right-4 bg-white/20 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    <i className="fas fa-search-plus mr-1"></i> 点击查看大图
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 font-bold">
                    Case {num}
                  </div>
                  <img 
                    src={getAssetPath(`/images/feedback_${num}.png`)} 
                    alt={`Feedback Case ${num}`} 
                    className="max-w-full max-h-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]" 
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
