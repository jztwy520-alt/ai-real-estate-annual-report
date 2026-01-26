
import React from 'react';
import { getAssetPath } from '../utils';

const ProjectPersonalGrowthPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 shadow-inner">
          <i className="fas fa-user-astronaut text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">AI 个人成长与职责跃迁</h2>
          <p className="text-base text-slate-500 font-bold">从“功能交付者”到“智能化体系架构师”的思维重构</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Phase 1: AI User */}
        <div className="clay-card p-6 flex flex-col relative overflow-hidden hover:bg-slate-50 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-blue-100 rounded-bl-xl shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">PM Stage 1</span>
           </div>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shadow-sm">
               <i className="fas fa-toolbox"></i>
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800"> 认知跃迁</h3>
           </div>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">洞察力重构</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                    利用 Coze 等工具搭建分析智能体，快速处理海量录音与反馈，将用户画像描摹从“经验判断”转向<span className="text-blue-600 font-bold text-base">“数据实证”</span>。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 font-bold shadow-sm">Coze</span>
                    <span className="px-2 py-1 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 font-bold shadow-sm">Data Insight</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">需求标准重塑</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                     需求不再是简单的界面堆砌，而是通过 Prompt <span className="text-blue-600 font-bold">与上下文内容要求</span> 建立标准化的人机交互协议。
                    <br/>通过定义高质量的“输入契约”，从源头确保研发落地的内容质量与效率。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 font-bold shadow-sm">Prompt Design</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Phase 2: AI Creator */}
        <div className="clay-card p-6 flex flex-col relative overflow-hidden hover:bg-slate-50 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-purple-100 rounded-bl-xl shadow-sm">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">PM Stage 2</span>
           </div>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shadow-sm">
               <i className="fas fa-code"></i>
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800">能力升维</h3>
           </div>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">逻辑共创</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                    打破边界，通过AI Design Coding 项目 深入 IDE 参与核心逻辑验证。不再只关心“我要什么”，而是通过验证核心逻辑与评估“AI 能力边界”，与研发共同定义技术可行性，驱动生产效率革命。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 font-bold shadow-sm">Model Evaluation</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">价值平衡</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                    在 IM 智能回复等项目中，而是综合考量模型效果、推理成本、上下文工程与质量平衡。通过建立“多维评价指标”，做出符合全局商业利益的决策。
                 </p>
              </div>
           </div>
        </div>

        {/* Phase 3: AI Architect */}
        <div className="clay-card p-6 flex flex-col relative overflow-hidden hover:bg-slate-50 transition-colors">
           <div className="absolute top-0 right-0 p-3 bg-indigo-100 rounded-bl-xl shadow-sm">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">PM Stage 3</span>
           </div>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 shadow-sm">
               <i className="fas fa-brain"></i>
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800">架构重塑</h3>
           </div>
           <div className="space-y-8 flex-1">
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">资产原子化</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                    将复杂业务逻辑解构为可复用、进化的原子 <span className="text-indigo-600 font-bold text-base">Atomic Skills</span>，通过 Agentic 实现从“功能累加”向“智能编排”的范式转变。
                 </p>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 font-bold shadow-sm">Agentic Workflow</span>
                 </div>
              </div>
              <div>
                 <h4 className="text-base font-bold text-slate-700 mb-2">身份跃迁</h4>
                 <p className="text-sm text-slate-500 mb-3 leading-relaxed font-medium">
                    从“功能交付者”转型为 <span className="text-indigo-600 font-bold text-base">“业务模型架构师”</span> + <span className="text-indigo-600 font-bold text-base">与“AI 效能工程师”</span>。
                 </p>
              </div>
           </div>
        </div>
      </div>
      
      {/* Tools Stack Section */}
      <div className="clay-card p-6 bg-slate-50 border border-slate-200">
        <h3 className="text-lg font-black text-slate-700 mb-6 flex items-center">
          <i className="fas fa-layer-group mr-3 text-cyan-500"></i> AI Tool Stack Experience
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200 hover:shadow-md transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5 shadow-sm">
              <img src={getAssetPath('/images/logo_trae.png')} alt="Trae" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Trae IDE</div>
              <div className="text-[10px] text-slate-500 font-medium">Native AI Editor</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200 hover:shadow-md transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5 shadow-sm">
              <img src={getAssetPath('/images/logo_codebuddy.png')} alt="CodeBuddy" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">CodeBuddy</div>
              <div className="text-[10px] text-slate-500 font-medium">Coding Assistant</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200 hover:shadow-md transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5 shadow-sm">
              <img src={getAssetPath('/images/logo_aistudio.png')} alt="AI Studio" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">AI Studio</div>
              <div className="text-[10px] text-slate-500 font-medium">Model Platform</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200 hover:shadow-md transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-1.5 shadow-sm">
              <img src={getAssetPath('/images/logo_claude.png')} alt="Claude" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Claude Code</div>
              <div className="text-[10px] text-slate-500 font-medium">Terminal / VS Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Timeline Indicator */}
      <div className="flex items-center justify-between px-10 text-xs text-slate-400 uppercase tracking-widest flex-shrink-0 font-bold">
         <div>Start of Year</div>
         <div className="flex-1 h-px bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 mx-6 opacity-50"></div>
         <div>End of Year</div>
      </div>
    </div>
  );
};

export default ProjectPersonalGrowthPage;
