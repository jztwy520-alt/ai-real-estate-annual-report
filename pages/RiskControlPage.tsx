
import React, { useState } from 'react';

const ResearchCard = ({ title, subTitle, icon, color, children, onDemoClick }: any) => (
  <div className={`glass-card p-5 rounded-2xl flex flex-col h-full border-t-4 border-t-${color}-500`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center text-${color}-400 text-xl`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div className={`text-xs px-2 py-1 rounded bg-${color}-500/10 text-${color}-400 font-bold uppercase`}>
        {subTitle}
      </div>
    </div>
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <div className="text-sm text-slate-400 leading-relaxed space-y-3 flex-1">
      {children}
    </div>
    {onDemoClick && (
      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex flex-col gap-2">
           <button 
             onClick={() => onDemoClick('beike')}
             className={`w-full py-2 rounded bg-${color}-500/10 hover:bg-${color}-500/20 text-${color}-400 text-xs font-bold border border-${color}-500/20 transition-all flex items-center justify-center`}
           >
             <i className="fas fa-play-circle mr-2"></i> 贝壳来客演示
           </button>
           <button 
             onClick={() => onDemoClick('zhuge')}
             className={`w-full py-2 rounded bg-${color}-500/10 hover:bg-${color}-500/20 text-${color}-400 text-xs font-bold border border-${color}-500/20 transition-all flex items-center justify-center`}
           >
             <i className="fas fa-play-circle mr-2"></i> 诸葛云小助演示
           </button>
        </div>
      </div>
    )}
  </div>
);

const RiskControlPage: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoUrl, setDemoUrl] = useState('');
  const [demoTitle, setDemoTitle] = useState('');

  const handleDemoClick = (type: string) => {
    if (type === 'beike') {
      setDemoUrl('/demos/beike_demo.html');
      setDemoTitle('贝壳来客功能演示');
    } else if (type === 'zhuge') {
      setDemoUrl('/demos/zhuge_demo.html');
      setDemoTitle('诸葛云小助功能演示');
    }
    setShowDemoModal(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">行业调研与技术探索</h2>
          <p className="text-slate-400">竞品洞察、基建对标与 AI 工程化方向</p>
        </div>
        <div className="flex items-center space-x-2 text-xs text-slate-500 uppercase font-bold tracking-widest">
           <i className="fas fa-globe text-cyan-400"></i>
           <span>Research & Insights</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResearchCard 
          title="竞品 AI 应用" 
          subTitle="数智化闭环" 
          icon="fa-robot" 
          color="cyan"
          onDemoClick={handleDemoClick}
        >
          <p>
            <strong className="text-slate-200">核心洞察:</strong> 竞品（贝壳/诸葛）已完成从单点工具向<span className="text-cyan-400">“7x24h 数智员工”</span>的进化。
          </p>
          <p>
            不仅仅是自动通过好友，更实现了“全渠道引流 → 自动清洗打标 → SOP标准触达 → 商机归因”的全链路闭环。
          </p>
          <div className="pt-2 border-t border-white/5 mt-2">
             <span className="text-slate-500">启示:</span> 需打通公域触点，构建全域自动化体系。
          </div>
        </ResearchCard>

        <ResearchCard 
          title="房源系统基建" 
          subTitle="数据治理" 
          icon="fa-database" 
          color="purple"
        >
          <p>
            <strong className="text-slate-200">楼盘字典:</strong> 坚持“城市-城区-小区-楼栋-单元-门牌”的六级唯一性校验，是数据治理的核心。
          </p>
          <p>
            <strong className="text-slate-200">角色分权:</strong> 精细化的房源维护角色（维护人、实勘人等）与业绩强挂钩，驱动数据鲜活度。
          </p>
          <div className="pt-2 border-t border-white/5 mt-2">
             <span className="text-slate-500">结论:</span> 坚定推进 ERP 对接与非标数据治理。
          </div>
        </ResearchCard>

        <ResearchCard 
          title="AI 工程化" 
          subTitle="Agent Skills" 
          icon="fa-network-wired" 
          color="emerald"
        >
          <p>
            <strong className="text-slate-200">核心理念:</strong> “业务逻辑原子化，能力调用标准化”。将复杂流程拆解为可被 AI 独立调用的 Skills。
          </p>
          <p>
            <strong className="text-slate-200">战略价值:</strong> 业务侧可像搭积木一样自由组合 Skills (Automation)，构建“企业级技能市场”。
          </p>
          <div className="pt-2 border-t border-white/5 mt-2">
             <span className="text-slate-500">愿景:</span> 让 AI 成为能自主调度能力的“超级业务助理”。
          </div>
        </ResearchCard>
      </div>
      
      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowDemoModal(false)}>
          <div className="relative w-full h-full bg-slate-900 flex flex-col pt-16 pb-20" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-slate-800 shrink-0">
               <div className="flex items-center space-x-3">
                 <button 
                    onClick={() => setShowDemoModal(false)}
                    className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors flex items-center mr-4"
                 >
                    <i className="fas fa-arrow-left mr-2"></i> 返回
                 </button>
                 <h3 className="text-white font-bold text-lg">{demoTitle}</h3>
                 <span className="text-sm text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">Full Screen Preview</span>
               </div>
               <button 
                  onClick={() => setShowDemoModal(false)}
                  className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-colors border border-red-500/30"
               >
                  <i className="fas fa-times"></i>
               </button>
            </div>
            <div className="flex-1 bg-white relative w-full h-full overflow-hidden">
               <iframe 
                 src={demoUrl} 
                 className="w-full h-full border-none block"
                 title={demoTitle}
                 style={{ width: '100%', height: '100%' }}
               />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskControlPage;
