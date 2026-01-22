
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ResearchCard = ({ title, subTitle, icon, color, children, onDemoClick }: any) => (
  <div className={`clay-card p-5 flex flex-col h-full hover:bg-slate-50 transition-colors`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-2xl bg-${color}-100 flex items-center justify-center text-${color}-500 text-xl shadow-sm`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div className={`text-xs px-2 py-1 rounded-lg bg-${color}-100 text-${color}-600 font-bold uppercase shadow-sm`}>
        {subTitle}
      </div>
    </div>
    <h3 className="text-lg font-display font-bold text-slate-800 mb-4">{title}</h3>
    <div className="text-sm text-slate-500 leading-relaxed space-y-3 flex-1 font-medium">
      {children}
    </div>
    {onDemoClick && (
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex flex-col gap-2">
           <button 
             onClick={() => onDemoClick('beike')}
             className={`w-full py-2 rounded-xl bg-${color}-50 hover:bg-${color}-100 text-${color}-600 text-xs font-bold border border-${color}-200 transition-all flex items-center justify-center shadow-sm`}
           >
             <i className="fas fa-play-circle mr-2"></i> 贝壳来客演示
           </button>
           <button 
             onClick={() => onDemoClick('zhuge')}
             className={`w-full py-2 rounded-xl bg-${color}-50 hover:bg-${color}-100 text-${color}-600 text-xs font-bold border border-${color}-200 transition-all flex items-center justify-center shadow-sm`}
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
      setDemoUrl(getAssetPath('/demos/beike_demo.html'));
      setDemoTitle('贝壳来客功能演示');
    } else if (type === 'zhuge') {
      setDemoUrl(getAssetPath('/demos/zhuge_demo.html'));
      setDemoTitle('诸葛云小助功能演示');
    }
    setShowDemoModal(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-inner">
             <i className="fas fa-flask text-2xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-black text-indigo-900 mb-2 drop-shadow-sm">行业调研与技术探索</h2>
            <p className="text-slate-500 font-bold">竞品洞察、基建对标与 AI 工程化方向</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-slate-400 uppercase font-black tracking-widest">
           <i className="fas fa-globe text-cyan-500"></i>
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
            <strong className="text-slate-700">核心洞察:</strong> 竞品（贝壳/诸葛）正处于从单点工具向<span className="text-cyan-600 font-bold">“7x24h 数智员工”</span>进化的过程中。
          </p>
          <p>
            <strong className="text-slate-700">现状:</strong> <span className="text-slate-400 italic font-normal">进化尚未完成。</span> 虽然在尝试打通全链路闭环，但在复杂场景处理上仍有局限。
          </p>
          <div className="pt-2 border-t border-slate-100 mt-2">
             <span className="text-slate-400 font-bold">启示:</span> 需打通公域触点，构建全域自动化体系。
          </div>
        </ResearchCard>

        <ResearchCard 
          title="市面常见 ERP" 
          subTitle="Lessons Learned" 
          icon="fa-triangle-exclamation" 
          color="red"
        >
          <p>
            <strong className="text-slate-700">AI 程度低:</strong> 仍停留在传统的“人海战术”维护阶段，大量基础内容需人工填报。
          </p>
          <p>
            <strong className="text-slate-700">无效字段冗余:</strong> 系统包含大量无实际业务价值的字段，造成数据噪音。
          </p>
          <p>
            <strong className="text-slate-700">配房模式落后:</strong> 依赖人工手动搜筛，效率低下。
          </p>
          <div className="pt-2 border-t border-slate-100 mt-2">
             <span className="text-slate-400 font-bold">警示:</span> 重构房源系统时需引以为戒。
          </div>
        </ResearchCard>

        <ResearchCard 
          title="AI 工程化" 
          subTitle="Agent Skills" 
          icon="fa-network-wired" 
          color="emerald"
        >
          <p>
            <strong className="text-slate-700">核心理念:</strong> “业务逻辑原子化，能力调用标准化”。将复杂流程拆解为可被 AI 独立调用的 Skills。
          </p>
          <p>
            <strong className="text-slate-700">战略价值:</strong> 业务侧可像搭积木一样自由组合 Skills (Automation)，构建“企业级技能市场”。
          </p>
          <div className="pt-2 border-t border-slate-100 mt-2">
             <span className="text-slate-400 font-bold">愿景:</span> 让 AI 成为能自主调度能力的“超级业务助理”。
          </div>
        </ResearchCard>
      </div>
      
      {/* Demo Modal - Clay Style */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowDemoModal(false)}>
          <div className="relative w-full h-full bg-[#F3F6FD] flex flex-col pt-16 pb-20" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-3 border-b border-white bg-white shrink-0 shadow-sm">
               <div className="flex items-center space-x-3">
                 <button 
                    onClick={() => setShowDemoModal(false)}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs text-slate-500 hover:text-slate-700 transition-colors flex items-center mr-4 font-bold shadow-sm"
                 >
                    <i className="fas fa-arrow-left mr-2"></i> 返回
                 </button>
                 <h3 className="text-slate-800 font-black text-lg">{demoTitle}</h3>
                 <span className="text-sm text-slate-400 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-bold">Full Screen Preview</span>
               </div>
               <button 
                  onClick={() => setShowDemoModal(false)}
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 text-red-500 flex items-center justify-center transition-colors border border-red-200 shadow-sm"
               >
                  <i className="fas fa-times"></i>
               </button>
            </div>
            <div className="flex-1 bg-white relative w-full h-full overflow-hidden shadow-inner">
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
