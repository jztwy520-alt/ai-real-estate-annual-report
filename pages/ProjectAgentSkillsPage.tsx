
import React, { useState } from 'react';

const ProjectAgentSkillsPage: React.FC = () => {
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i className="fas fa-network-wired text-xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">AI 工程化探索：Agent Skills 实战</h2>
          <p className="text-sm text-slate-400">公众号采集与选题分析自动化 Demo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Architecture / Concept */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl border-l-4 border-emerald-500">
             <h3 className="text-lg font-bold text-white mb-4">Core Concept</h3>
             <p className="text-xs text-slate-300 leading-relaxed mb-4">
               基于 <strong>Agent Skills</strong> 理念，将复杂的业务流程拆解为独立的、可复用的原子技能。
             </p>
             <div className="space-y-2">
               <div className="p-2 bg-emerald-500/10 rounded border border-emerald-500/20 text-xs text-emerald-400 font-mono">
                 Skill 1: WeChat Collector
               </div>
               <div className="flex justify-center text-slate-500 text-[10px]"><i className="fas fa-arrow-down"></i></div>
               <div className="p-2 bg-emerald-500/10 rounded border border-emerald-500/20 text-xs text-emerald-400 font-mono">
                 Skill 2: Feishu Topic Analyzer
               </div>
             </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Value Proposition</h3>
             <ul className="space-y-4">
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-300">流程自动化</span>
                 <span className="text-sm font-bold text-white">-2h / Day</span>
               </li>
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-300">Token 节省</span>
                 <span className="text-sm font-bold text-emerald-400">60% Off</span>
               </li>
               <li className="flex items-center justify-between">
                 <span className="text-xs text-slate-300">工具复用性</span>
                 <span className="text-sm font-bold text-white">High</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Right Column: Workflow Details */}
        <div className="lg:col-span-2 glass-card p-8 rounded-2xl border-t-2 border-t-emerald-500">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-xl font-bold text-white">自动化作业流程</h3>
             <button 
               onClick={() => setShowWorkflowModal(true)}
               className="px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20 transition-all flex items-center group"
             >
               <i className="fas fa-image mr-2 group-hover:scale-110 transition-transform"></i> 查看示例
             </button>
           </div>
           
           <div className="relative space-y-8">
             <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800"></div>

             {/* Step 1 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_10px_#10b981]">
                 <i className="fas fa-rss"></i>
               </div>
               <h4 className="text-lg font-bold text-white">主动采集 (Collector)</h4>
               <p className="text-xs text-slate-400 mt-1 mb-2">主动订阅 RSS 源，增量监控指定公众号更新。</p>
               <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 text-[10px] text-slate-300 font-mono">
                 &gt; Fetch RSS Feed<br/>
                 &gt; Filter New Articles (Incremental)<br/>
                 &gt; Parse Content to Markdown
               </div>
             </div>

             {/* Step 2 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_#06b6d4]">
                 <i className="fas fa-brain"></i>
               </div>
               <h4 className="text-lg font-bold text-white">智能分析 (Analyzer)</h4>
               <p className="text-xs text-slate-400 mt-1 mb-2">利用 AI 聚合分析当日热点，生成摘要与选题建议。</p>
               <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 text-[10px] text-slate-300 font-mono">
                 &gt; Aggregate Daily Articles<br/>
                 &gt; LLM Analysis (Trends & Hot Topics)<br/>
                 &gt; Generate 3 Potential Topics
               </div>
             </div>

             {/* Step 3 */}
             <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center text-purple-400 shadow-[0_0_10px_#a855f7]">
                 <i className="fas fa-table"></i>
               </div>
               <h4 className="text-lg font-bold text-white">数据归档 (Feishu)</h4>
               <p className="text-xs text-slate-400 mt-1 mb-2">结构化数据自动写入飞书多维表格，生成日报。</p>
               <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-[10px] border border-purple-500/20">自动写入</span>
                  <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-[10px] border border-purple-500/20">日报推送</span>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Workflow Demo Modal */}
      {showWorkflowModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowWorkflowModal(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[85vh] flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowWorkflowModal(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="w-full h-full bg-slate-800/50 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden relative group">
              <img 
                src="/images/agent_skills_workflow_demo.png" 
                alt="Workflow Demo" 
                className="w-full h-full object-contain z-10 relative hidden"
                onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.placeholder')?.classList.remove('hidden');
                }} 
              />
              
              <div className="placeholder absolute inset-0 flex flex-col items-center justify-center z-0">
                <i className="fas fa-project-diagram text-slate-600 text-6xl mb-4"></i>
                <span className="text-slate-500 text-lg">此处贴自动化作业流程示意图</span>
                <span className="text-slate-600 text-sm mt-2 font-mono">/images/agent_skills_workflow_demo.png</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAgentSkillsPage;
