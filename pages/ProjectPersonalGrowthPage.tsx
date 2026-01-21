
import React from 'react';
import { getAssetPath } from '../utils';

const ProjectPersonalGrowthPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          <i className="fas fa-user-astronaut text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">AI 个人成长与职责跃迁</h2>
          <p className="text-base text-slate-400">从“功能交付者”到“智能化体系架构师”的思维重构</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Phase 1: AI User */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-blue-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-blue-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">PM Stage 1</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-toolbox mr-3 text-blue-400"></i> 工具赋能与提效
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">1. 洞察力增强</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    利用 Coze 等工具搭建分析智能体，快速处理海量录音与反馈，将用户画像描摹从“经验判断”转向<span className="text-blue-400 font-bold text-base">“数据实证”</span>。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Coze</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Data Insight</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">2. 需求定义标准化</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    基于 <span className="text-blue-400 font-bold">Prompt 与上下文内容要求</span>，结合业务经验辅助生成内容设计思路与角度。
                    <br/>向开发侧输出更标准的“生产需求”，而非模糊的“功能需求”。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Prompt Design</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Phase 2: AI Creator */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-purple-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">PM Stage 2</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-code mr-3 text-purple-400"></i> 工程化思维与实践
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">3. 深入技术实现</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    打破边界，深入 IDE 参与核心逻辑验证。不再只提“我要什么”，而是能评估“模型能做什么”以及“成本是多少”。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Model Evaluation</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">4. 复杂系统决策</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    在 IM 智能回复等项目中，综合考量模型成本、上下文工程与质量平衡，做出更符合业务利益的技术决策。
                 </p>
              </div>
           </div>
        </div>

        {/* Phase 3: AI Architect */}
        <div className="glass-card p-6 rounded-2xl border-t-4 border-indigo-500 flex flex-col relative overflow-hidden hover:bg-slate-800/60 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-indigo-500/10 rounded-bl-xl">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">PM Stage 3</span>
           </div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-brain mr-3 text-indigo-400"></i> 战略架构与体系构建
           </h3>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">5. 业务能力原子化</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    思考如何将业务流程拆解为可复用的 <span className="text-indigo-400 font-bold text-base">Atomic Skills</span>，构建企业级能力市场，而非堆砌单点功能。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/10 font-medium">Agentic Workflow</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-200 mb-2">6. 职责重定义</h4>
                 <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                    从“功能交付者”转型为 <span className="text-indigo-400 font-bold text-base">“业务模型架构师”</span> + <span className="text-indigo-400 font-bold text-base">“AI 效能工程师”</span>。
                 </p>
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
              <img src={getAssetPath('/images/logo_trae.png')} alt="Trae" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Trae IDE</div>
              <div className="text-[10px] text-slate-400">Native AI Editor</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src={getAssetPath('/images/logo_codebuddy.png')} alt="CodeBuddy" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">CodeBuddy</div>
              <div className="text-[10px] text-slate-400">Coding Assistant</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src={getAssetPath('/images/logo_aistudio.png')} alt="AI Studio" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">AI Studio</div>
              <div className="text-[10px] text-slate-400">Model Platform</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5">
              <img src={getAssetPath('/images/logo_claude.png')} alt="Claude" className="w-full h-full object-contain" />
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
