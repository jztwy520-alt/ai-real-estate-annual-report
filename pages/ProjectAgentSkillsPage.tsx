
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ProjectAgentSkillsPage: React.FC = () => {
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 shadow-inner">
          <i className="fas fa-network-wired text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-black text-indigo-900 drop-shadow-sm">AI 工程化探索：Agent Skills 实战</h2>
          <p className="text-sm text-slate-500 font-bold">公众号采集与选题分析自动化 Demo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Architecture / Concept */}
        <div className="lg:col-span-1 space-y-6">
          <div className="clay-card p-6 hover:bg-slate-50 transition-colors">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                 <i className="fas fa-cubes"></i>
               </div>
               <h3 className="text-lg font-display font-bold text-slate-800">Core Concept</h3>
             </div>
             <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
               基于 <strong>Agent Skills</strong> 理念，将复杂的业务流程拆解为独立的、可复用的原子技能。
             </p>
             <div className="space-y-2">
               <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-xs text-emerald-600 font-mono font-bold shadow-sm">
                 Skill 1: WeChat Collector
               </div>
               <div className="flex justify-center text-slate-400 text-[10px]"><i className="fas fa-arrow-down"></i></div>
               <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-xs text-emerald-600 font-mono font-bold shadow-sm">
                 Skill 2: Feishu Topic Analyzer
               </div>
             </div>
          </div>

          <div className="clay-card p-6 hover:bg-slate-50 transition-colors">
             <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Value Proposition</h3>
             <ul className="space-y-4">
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-600 font-bold">流程自动化</span>
                 <span className="text-sm font-black text-slate-800">-2h / Day</span>
               </li>
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-600 font-bold">Token 节省</span>
                 <span className="text-sm font-black text-emerald-500">60% Off</span>
               </li>
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-600 font-bold">工具复用性</span>
                 <span className="text-sm font-black text-slate-800">High</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Right Column: Workflow Details */}
        <div className="lg:col-span-2 clay-card p-8 hover:bg-slate-50 transition-colors">
           <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                 <i className="fas fa-cogs"></i>
               </div>
               <h3 className="text-xl font-display font-bold text-slate-800">自动化作业流程</h3>
             </div>
             <button 
               onClick={() => setShowWorkflowModal(true)}
               className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-600 text-xs font-bold border border-emerald-200 transition-all flex items-center group shadow-sm"
             >
               <i className="fas fa-image mr-2 group-hover:scale-110 transition-transform"></i> 查看示例
             </button>
           </div>
           
           <div className="relative space-y-8">
             <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-slate-200 rounded-full"></div>

             {/* Step 1 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-emerald-400 flex items-center justify-center text-emerald-500 shadow-sm">
                 <i className="fas fa-rss"></i>
               </div>
               <h4 className="text-lg font-bold text-slate-700">主动采集</h4>
               <p className="text-xs text-slate-500 mt-1 mb-2 font-medium">主动订阅 RSS 源，增量监控指定公众号更新。</p>
               <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[10px] text-slate-600 font-mono shadow-inner">
                 &gt; Fetch RSS Feed<br/>
                 &gt; Filter New Articles (Incremental)<br/>
                 &gt; Parse Content to Markdown
               </div>
             </div>

             {/* Step 2 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-cyan-400 flex items-center justify-center text-cyan-500 shadow-sm">
                 <i className="fas fa-brain"></i>
               </div>
               <h4 className="text-lg font-bold text-slate-700">智能分析</h4>
               <p className="text-xs text-slate-500 mt-1 mb-2 font-medium">利用 AI 聚合分析当日热点，生成摘要与选题建议。</p>
               <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[10px] text-slate-600 font-mono shadow-inner">
                 &gt; Aggregate Daily Articles<br/>
                 &gt; LLM Analysis (Trends & Hot Topics)<br/>
                 &gt; Generate 3 Potential Topics
               </div>
             </div>

             {/* Step 3 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-purple-400 flex items-center justify-center text-purple-500 shadow-sm">
                 <i className="fas fa-table"></i>
               </div>
               <h4 className="text-lg font-bold text-slate-700">数据归档</h4>
               <p className="text-xs text-slate-500 mt-1 mb-2 font-medium">结构化数据自动写入飞书多维表格，生成日报。</p>
               <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 rounded-lg bg-purple-100 text-purple-600 text-[10px] font-bold shadow-sm">自动写入</span>
                  <span className="px-2 py-1 rounded-lg bg-purple-100 text-purple-600 text-[10px] font-bold shadow-sm">日报推送</span>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Workflow Demo Modal - Clay Style */}
      {showWorkflowModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowWorkflowModal(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[85vh] flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowWorkflowModal(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-lg"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="w-full h-full bg-[#F3F6FD] rounded-3xl flex items-center justify-center border border-white overflow-hidden relative group shadow-2xl p-8">
              <img 
                src={getAssetPath('/images/agent_skills_workflow_demo.png')} 
                alt="Workflow Demo" 
                className="w-full h-full object-contain z-10 relative hidden"
                onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.placeholder')?.classList.remove('hidden');
                }} 
              />
              
              <div className="placeholder absolute inset-0 flex flex-col items-center justify-center z-0">
                <i className="fas fa-project-diagram text-slate-300 text-6xl mb-4"></i>
                <span className="text-slate-400 text-lg font-bold">此处贴自动化作业流程示意图</span>
                <span className="text-slate-400 text-sm mt-2 font-mono bg-slate-200 px-2 py-1 rounded">/images/agent_skills_workflow_demo.png</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAgentSkillsPage;
