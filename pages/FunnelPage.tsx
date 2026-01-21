
import React from 'react';

const HighlightCard = ({ title, metric, subMetric, desc, icon, color }: any) => {
  return (
    <div className={`glass-card p-6 rounded-2xl border-l-4 border-${color}-500 bg-${color}-500/5 hover:bg-${color}-500/10 transition-all group`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl bg-${color}-500/20 flex items-center justify-center text-${color}-400 text-2xl group-hover:scale-110 transition-transform`}>
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-black text-${color}-400 glow-text`}>{metric}</div>
          <div className="text-[10px] text-slate-400 font-bold uppercase">{subMetric}</div>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
        {desc}
      </p>
    </div>
  );
};

const FunnelPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white glow-text">非AI业务亮点</h2>
        <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Non-AI Business Highlights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HighlightCard 
          title="成交房源详情页优化"
          metric="+28%"
          subMetric="总体转化率提升"
          desc="优化成交房源详情页布局，咨询转化率由 16% 提升至 20%，带动总体转化显著增长。"
          icon="fa-file-invoice-dollar"
          color="purple"
        />
        <HighlightCard 
          title="小区详情页改版"
          metric="+35%"
          subMetric="咨询转化率提升"
          desc="优化头部布局与导航逻辑，咨询转化率从 4.8% 提升至 6.79%。"
          icon="fa-building"
          color="cyan"
        />
        <HighlightCard 
          title="查成交订阅优化"
          metric="+33%"
          subMetric="订阅转化率提升"
          desc="强化搜索与订阅入口，大幅提升订阅转化率，同时降低了取消订阅率。"
          icon="fa-bell"
          color="orange"
        />
        <HighlightCard 
          title="用户偏好收集"
          metric="1000+"
          subMetric="周均收集意向"
          desc="在用户浏览过程中无侵入式收集板块、总价偏好，为精准推荐积累数据。"
          icon="fa-user-tag"
          color="emerald"
        />
      </div>

      <div className="glass-card p-6 rounded-2xl border border-white/5 bg-gradient-to-r from-slate-900 to-transparent">
         <div className="flex items-center space-x-4 mb-4">
            <i className="fas fa-chart-line text-blue-400 text-xl"></i>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">业务价值总结</h3>
         </div>
         <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
           除了 AI 专项突破，在基础业务体验优化上也取得了扎实成果。通过对<b>成交页、小区页、订阅流程</b>等核心转化节点的精细化打磨，
           实现了流量变现效率的显著提升，证明了在存量市场下，体验优化依然是增长的重要引擎。
         </p>
      </div>
    </div>
  );
};

export default FunnelPage;
