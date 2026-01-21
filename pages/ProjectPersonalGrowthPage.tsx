
import React from 'react';

const ProjectPersonalGrowthPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          <i className="fas fa-user-astronaut text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">AI 个人成长与提效总结</h2>
          <p className="text-base text-slate-400">从“工具使用者”到“系统架构者”的蜕变之路</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Phase 1: AI User */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-blue-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-blue-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Phase 1: User</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-toolbox mr-3 text-blue-400"></i> 工具赋能
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">1. 用户洞察 (User Insight)</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    利用 Coze 搭建购房洞察智能体，快速分析录音语料，辅助提升 <span className="text-blue-400 font-bold text-base">100+</span> 用户画像描摹质量。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Coze</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">通用模型</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">2. AIGC 辅助需求</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    利用 AI 辅助定义内容生成角度、侧重点与规范（房源标题/描述/测评）。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">DS-R1</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">豆包</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Phase 2: AI Creator */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-purple-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Phase 2: Creator</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-code mr-3 text-purple-400"></i> 工程实践
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">3. AI Design Coding</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    深入 IDE，打通 "需求 -&gt; Figma -&gt; Code" 链路，实现地图画圈等复杂交互的高效生产。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Claude Code</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Vibe Coding</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">4. IM 智能回复智能体</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    能力蜕变点。综合考量模型成本、MCP 服务、上下文工程与 Prompt 能力，平衡 <span className="text-purple-400 font-bold text-base">效率/质量/成本</span>。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Context Engineering</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Phase 3: AI Architect */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-indigo-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-indigo-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Phase 3: Architect</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-brain mr-3 text-indigo-400"></i> 体系构建
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">5. Agent Skills 探索</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    探索竞品调研、公众号采集分析等前沿模式，将业务流程封装为可复用的原子能力。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Agentic Workflow</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">6. AI Memory System</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    构建个人知识库，将项目经验提炼为 <span className="text-indigo-400 font-bold text-base">情景、行为、认知</span> 三层核心记忆，形成 AI 复利。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Knowledge Graph</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Tools Stack Section */}
      <div className="glass-card p-6 rounded-2xl border border-white/5 bg-slate-900/50">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
          <i className="fas fa-layer-group mr-3 text-cyan-400"></i> AI Tool Stack Experience
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src="/images/logo_trae.png" alt="Trae" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Trae IDE</div>
              <div className="text-[10px] text-slate-400">Native AI Editor</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src="/images/logo_codebuddy.png" alt="CodeBuddy" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">CodeBuddy</div>
              <div className="text-[10px] text-slate-400">Coding Assistant</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src="/images/logo_aistudio.png" alt="AI Studio" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">AI Studio</div>
              <div className="text-[10px] text-slate-400">Model Platform</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src="/images/logo_claude.png" alt="Claude" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Claude Code</div>
              <div className="text-[10px] text-slate-400">Terminal / VS Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Timeline Indicator */}
      <div className="flex items-center justify-between px-10 text-xs text-slate-500 uppercase tracking-widest flex-shrink-0">
         <div>Start of Year</div>
         <div className="flex-1 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-6 opacity-30"></div>
         <div>End of Year</div>
      </div>
    </div>
  );
};

export default ProjectPersonalGrowthPage;
