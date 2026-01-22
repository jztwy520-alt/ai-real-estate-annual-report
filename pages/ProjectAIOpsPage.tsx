
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ProjectAIOpsPage: React.FC = () => {
  const [showTestModal, setShowTestModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shadow-inner">
          <i className="fas fa-screwdriver-wrench text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">AI 质量工程与持续迭代体系</h2>
          <p className="text-base text-slate-500 font-bold">从“可用”到“好用”：选型、测试与 Bad Case 闭环</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left Column: Model Selection Strategy */}
        <div className="clay-card p-6 flex flex-col space-y-6 hover:bg-slate-50 transition-colors">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-display font-bold text-slate-800 flex items-center">
                 <div className="p-2 bg-rose-100 rounded-lg text-rose-600 mr-3">
                   <i className="fas fa-scale-balanced"></i>
                 </div>
                 模型选型与成本验收
              </h3>
              <span className="text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-lg border border-rose-200 font-bold shadow-sm">Cost Efficiency</span>
           </div>

           {/* Model Matrix Table */}
           <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                       <th className="p-4 border-b border-slate-200 font-bold">应用场景</th>
                       <th className="p-4 border-b border-slate-200 font-bold">当前模型</th>
                       <th className="p-4 border-b border-slate-200 font-bold">备选/对比方案</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm text-slate-600">
                    <tr className="border-b border-slate-100 bg-rose-50/50">
                       <td className="p-4 font-bold text-slate-800">小区测评</td>
                       <td className="p-4">GPT-4o<br/><span className="text-xs text-slate-400 font-bold">0.5元/篇</span></td>
                       <td className="p-4 text-slate-500">
                          Gemini 3<br/>
                          <span className="text-xs text-rose-500 font-bold">DS-R1成本0.2元/篇，探索替代中</span>
                       </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                       <td className="p-4 font-bold text-slate-800">IM 智能回复</td>
                       <td className="p-4">DeepSeek V3.1<br/><span className="text-xs text-slate-400 font-bold">$0.012/100会话</span></td>
                       <td className="p-4 text-slate-500">
                          DeepSeek V3.2 / Gemini Flash<br/>
                          <span className="text-xs text-orange-500 font-bold">V3.1 面临下线，需尽快迁移</span>
                       </td>
                    </tr>
                    <tr>
                       <td className="p-4 font-bold text-slate-800">房源包装</td>
                       <td className="p-4">DeepSeek V3<br/><span className="text-xs text-slate-400 font-bold">40-80元/月</span></td>
                       <td className="p-4 text-slate-500">
                          DeepSeek V3.2 (极致性价比)<br/>
                          <span className="text-xs text-emerald-500 font-bold">¥2.00/百万Token</span>
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>

           {/* Key Insight */}
           <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-100 space-y-2 shadow-sm">
              <div className="flex items-start space-x-3">
                 <i className="fas fa-lightbulb text-yellow-500 text-sm mt-1"></i>
                 <p className="text-sm text-slate-600 leading-relaxed font-medium">
                   <strong>策略核心：</strong> 持续监控模型市场，建立动态迁移机制。当前重点解决 <span className="text-orange-500 font-bold">DeepSeek V3.1 下线风险</span> 及 <span className="text-rose-500 font-bold">GPT-4o 成本控制</span> 问题，积极引入 Gemini Flash 等高性能低成本模型。
                 </p>
              </div>
           </div>
        </div>

        {/* Right Column: Testing & Bad Case */}
        <div className="flex flex-col space-y-6">
           {/* Regression Testing */}
           <div className="clay-card p-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold text-slate-800 flex items-center">
                   <div className="p-2 bg-amber-100 rounded-lg text-amber-600 mr-3">
                     <i className="fas fa-shield-halved"></i>
                   </div>
                   全链路回归 & 试运营 (Pilot Launch)
                </h3>
                <button 
                  onClick={() => setShowTestModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-600 text-xs font-bold border border-amber-200 transition-all flex items-center group shadow-sm"
                >
                  <i className="fas fa-vial mr-2 group-hover:scale-110 transition-transform"></i> 查看示例
                </button>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5 font-medium">
                 IM 智能回复直接替代小B与用户沟通，风险极高。严苛的回归测试只是底线，必须配合<strong>试运营</strong>机制。
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                    <div className="text-xs text-amber-600 font-bold uppercase mb-2">深度回归</div>
                    <div className="text-sm text-slate-700 font-bold leading-relaxed">覆盖意图识别、安全回复等多轮测试，确保基础逻辑无误。</div>
                 </div>
                 <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                    <div className="text-xs text-amber-600 font-bold uppercase mb-2">试运营闭环</div>
                    <div className="text-sm text-slate-700 font-bold leading-relaxed">小范围上线 -&gt; 收集高频 Bad Case -&gt; 快速迭代 -&gt; 逐步扩量。</div>
                 </div>
              </div>
           </div>

           {/* Bad Case Loop */}
           <div className="clay-card p-6 flex-1 hover:bg-slate-50 transition-colors">
              <h3 className="text-xl font-display font-bold text-slate-800 mb-4 flex items-center">
                 <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mr-3">
                   <i className="fas fa-rotate"></i>
                 </div>
                 Bad Case 闭环机制
              </h3>
              <p className="text-sm text-slate-500 mb-5 font-medium">
                 优化<strong>高频 Bad Case</strong> 是确保功能效果及用户认可度的关键。
              </p>
              <div className="relative pl-6 border-l-2 border-emerald-100 space-y-5">
                 <div className="flex items-start">
                    <span className="text-xs font-bold text-slate-400 w-20 pt-1 tracking-wider">COLLECT</span>
                    <p className="text-sm text-slate-600 font-medium">试运营期间全量日志分析，聚焦用户负反馈。</p>
                 </div>
                 <div className="flex items-start">
                    <span className="text-xs font-bold text-slate-400 w-20 pt-1 tracking-wider">ANALYZE</span>
                    <p className="text-sm text-slate-600 font-medium">归因分析：模型幻觉？知识库陈旧？指令歧义？</p>
                 </div>
                 <div className="flex items-start">
                    <span className="text-xs font-bold text-emerald-500 w-20 pt-1 tracking-wider">OPTIMIZE</span>
                    <p className="text-sm text-slate-800 font-black">快速修复高频问题，提升回复准确率，赢得用户信任。</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Test Example Modal - Clay Style */}
      {showTestModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowTestModal(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[85vh] flex flex-col bg-[#F3F6FD] border border-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
              <h3 className="text-xl font-black text-slate-800 flex items-center">
                <i className="fas fa-vial-circle-check text-amber-500 mr-3"></i>
                AI 质量工程测试示例
              </h3>
              <button 
                onClick={() => setShowTestModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shadow-sm"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 custom-scrollbar">
              {/* Module 1: Pre-launch Test */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-700 border-l-4 border-amber-500 pl-3">
                    1. 智能回复上线前测试 (Pre-launch)
                  </h4>
                  <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded font-bold shadow-sm">Status: PASS</span>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 overflow-hidden relative group min-h-[400px] shadow-sm">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(getAssetPath('/images/ai_ops_pre_launch_test.png'), '_blank');
                    }}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/90 hover:bg-white text-slate-600 text-xs font-bold rounded-lg shadow-md border border-slate-200 transition-all opacity-0 group-hover:opacity-100 flex items-center"
                  >
                    <i className="fas fa-expand mr-2"></i> 查看大图
                  </button>
                  <img 
                    src={getAssetPath('/images/ai_ops_pre_launch_test.png')}  
                    alt="Pre-launch Test" 
                    className="w-full h-full object-contain z-10 relative hidden"
                    onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.placeholder-1')?.classList.remove('hidden');
                    }} 
                  />
                  <div className="placeholder-1 absolute inset-0 flex flex-col items-center justify-center z-0 p-8 text-center bg-slate-50">
                    <i className="fas fa-clipboard-check text-slate-300 text-6xl mb-4"></i>
                    <span className="text-slate-500 text-lg font-bold mb-2">此处展示上线前测试报告/截图</span>
                    <p className="text-slate-400 text-sm max-w-md font-medium">
                      包含意图识别准确率、回复安全性检查、敏感词过滤验证等测试用例执行结果。
                    </p>
                    <span className="text-slate-400 text-xs mt-4 font-mono bg-slate-200 px-2 py-1 rounded">/images/ai_ops_pre_launch_test.png</span>
                  </div>
                </div>
              </div>

              {/* Module 2: Model Comparison */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-700 border-l-4 border-rose-500 pl-3">
                    2. 模型回复质量对比测试 (A/B Test)
                  </h4>
                  <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded font-bold shadow-sm">DeepSeek vs GPT-4</span>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 overflow-hidden relative group min-h-[400px] shadow-sm">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(getAssetPath('/images/ai_ops_model_comparison.png'), '_blank');
                    }}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/90 hover:bg-white text-slate-600 text-xs font-bold rounded-lg shadow-md border border-slate-200 transition-all opacity-0 group-hover:opacity-100 flex items-center"
                  >
                    <i className="fas fa-expand mr-2"></i> 查看大图
                  </button>
                  <img 
                    src={getAssetPath('/images/ai_ops_model_comparison.png')}  
                    alt="Model Comparison" 
                    className="w-full h-full object-contain z-10 relative hidden"
                    onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.placeholder-2')?.classList.remove('hidden');
                    }} 
                  />
                  <div className="placeholder-2 absolute inset-0 flex flex-col items-center justify-center z-0 p-8 text-center bg-slate-50">
                    <i className="fas fa-code-compare text-slate-300 text-6xl mb-4"></i>
                    <span className="text-slate-500 text-lg font-bold mb-2">此处展示模型回复对比图</span>
                    <p className="text-slate-400 text-sm max-w-md font-medium">
                      展示同一 Prompt 下不同模型（如 DeepSeek V3 vs GPT-4o）的回复效果对比及评分。
                    </p>
                    <span className="text-slate-400 text-xs mt-4 font-mono bg-slate-200 px-2 py-1 rounded">/images/ai_ops_model_comparison.png</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAIOpsPage;
