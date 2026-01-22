
import React, { useState } from 'react';

const HighlightCard = ({ title, metric, subMetric, desc, icon, color, action }: any) => {
  return (
    <div className={`clay-card p-6 group hover:bg-${color}-50 transition-all`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl bg-${color}-100 flex items-center justify-center text-${color}-500 text-2xl group-hover:scale-110 transition-transform shadow-sm`}>
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-black text-${color}-500 drop-shadow-sm`}>{metric}</div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{subMetric}</div>
        </div>
      </div>
      <h3 className="text-lg font-black text-slate-700 mb-2">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3 font-medium mb-3">
        {desc}
      </p>
      {action}
    </div>
  );
};

const FunnelPage: React.FC = () => {
  const [showDataModal, setShowDataModal] = useState(false);

  return (
    <div className="space-y-8">
      <div className="mb-8 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 shadow-inner">
           <i className="fas fa-filter text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">非AI业务亮点</h2>
          <p className="text-slate-500 text-xs uppercase tracking-widest mt-1 font-bold">Non-AI Business Highlights</p>
        </div>
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
          action={
            <button 
              onClick={() => setShowDataModal(true)}
              className="w-full py-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-600 text-xs font-bold border border-emerald-200 transition-all flex items-center justify-center shadow-sm group"
            >
              <i className="fas fa-table mr-2 group-hover:scale-110 transition-transform"></i> 查看数据示例
            </button>
          }
        />
      </div>

      <div className="clay-card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
         <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shadow-sm">
                <i className="fas fa-chart-line text-lg"></i>
            </div>
            <h3 className="text-sm font-black text-blue-800 uppercase tracking-widest">业务价值总结</h3>
         </div>
         <p className="text-sm text-slate-600 leading-relaxed max-w-4xl font-medium">
           除了 AI 专项突破，在基础业务体验优化上也取得了扎实成果。通过对<b className="text-blue-600">成交页、小区页、订阅流程</b>等核心转化节点的精细化打磨，
           实现了流量变现效率的显著提升，证明了在存量市场下，体验优化依然是增长的重要引擎。
         </p>
      </div>

      {/* Data Example Modal */}
      {showDataModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowDataModal(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[85vh] flex flex-col bg-[#F3F6FD] border border-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-white">
              <h3 className="text-xl font-black text-slate-800 flex items-center">
                <i className="fas fa-table text-emerald-500 mr-3"></i>
                用户偏好数据采集示例
              </h3>
              <button 
                onClick={() => setShowDataModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shadow-sm"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-6 custom-scrollbar">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                      <th className="p-4 border-b border-slate-200 font-bold">事件 (指标)</th>
                      <th className="p-4 border-b border-slate-200 font-bold">当前页面名称</th>
                      <th className="p-4 border-b border-slate-200 font-bold">元素内容</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right">平均值</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right text-orange-600">2025-12</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right">2025-11</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right">2025-10</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    {[
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "100万-150万", avg: "96", cur: "522", prev1: "66", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "100万以下", avg: "80", cur: "443", prev1: "37", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "150万以内", avg: "74.67", cur: "423", prev1: "25", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "151万-250万", avg: "45.5", cur: "259", prev1: "14", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "50万-100万", avg: "50.17", cur: "256", prev1: "45", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "150万-200万", avg: "46.67", cur: "250", prev1: "30", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "50万以下", avg: "31.33", cur: "163", prev1: "25", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "251万-350万", avg: "27.83", cur: "153", prev1: "14", prev2: "0", prev3: "0" },
                      { event: "页面点击 (总人数 UV)", page: "户型列表", content: "100万以下", avg: "237.83", cur: "129", prev1: "283", prev2: "448", prev3: "475" },
                      { event: "页面点击 (总人数 UV)", page: "特价房列表", content: "61万-100万", avg: "17", cur: "95", prev1: "7", prev2: "0", prev3: "0" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-700">{row.event}</td>
                        <td className="p-4 text-slate-500">{row.page}</td>
                        <td className="p-4 font-mono text-xs bg-slate-50 rounded text-slate-600">{row.content}</td>
                        <td className="p-4 text-right font-mono text-slate-400">{row.avg}</td>
                        <td className="p-4 text-right font-mono font-bold text-orange-600 bg-orange-50/30">{row.cur}</td>
                        <td className="p-4 text-right font-mono text-slate-500">{row.prev1}</td>
                        <td className="p-4 text-right font-mono text-slate-400">{row.prev2}</td>
                        <td className="p-4 text-right font-mono text-slate-400">{row.prev3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                 <div className="text-xs text-slate-400 font-medium flex items-center">
                    <i className="fas fa-info-circle mr-1"></i>
                    数据来源：神策埋点 & 后端业务库 (2025 Q4 Snapshot)
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunnelPage;
