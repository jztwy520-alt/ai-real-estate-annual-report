
import React, { useState } from 'react';

const ProjectCommunityGenPage: React.FC = () => {
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-inner">
          <i className="fas fa-city text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">AI 应用场景 II：小区测评规模化生产</h2>
          <p className="text-base text-slate-500 font-bold">全流程自动化，0人工成本，流量收割机</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="clay-card p-5 flex flex-col h-full hover:bg-slate-50 transition-colors">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600 shadow-sm">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-800">自动化生产闭环</h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-cyan-100 text-cyan-600 text-sm font-bold shadow-sm">自动化率 100%</div>
           </div>
           
           <div className="flex flex-col gap-6 flex-1">
             {/* Industrial Transformation Process */}
             <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex-1 flex flex-col shadow-inner">
                <div className="flex items-center mb-4">
                   <i className="fas fa-bolt text-yellow-500 mr-3 text-lg"></i>
                   <span className="text-lg font-bold text-slate-700">工业化转型流程</span>
                </div>
                
                {/* Process Visual */}
                <div className="flex items-center justify-between my-6 px-2">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                        <i className="fas fa-database text-blue-500"></i>
                      </div>
                      <span className="text-xs text-slate-500 font-bold uppercase">数据聚合</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-400 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center border border-cyan-200 shadow-sm">
                        <i className="fas fa-robot text-cyan-500"></i>
                      </div>
                      <span className="text-xs text-cyan-600 font-bold uppercase">AI 生成</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-400 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                        <i className="fas fa-check-circle text-emerald-500"></i>
                      </div>
                      <span className="text-xs text-slate-500 font-bold uppercase">质量校验</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-400 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                        <i className="fas fa-globe text-purple-500"></i>
                      </div>
                      <span className="text-xs text-slate-500 font-bold uppercase">上线更新</span>
                   </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed mt-auto font-medium">
                  从人工编辑彻底转向自动化。无需运营配置，目前已实现 <span className="text-cyan-600 font-black">11,000+</span> 小区全站覆盖，数据实时性与准确性大幅提升。
                </p>
             </div>

             {/* Business Impact Stats */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:border-green-200 transition-colors shadow-sm">
                   <div className="flex items-center gap-2 mb-2">
                      <i className="fas fa-chart-line text-green-500 text-sm"></i>
                      <span className="text-xs text-green-600 uppercase font-bold tracking-wider">咨询转化率</span>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-800">8-12</span>
                      <span className="text-sm font-bold text-green-600">%</span>
                   </div>
                   <div className="mt-2 text-xs text-slate-500 font-medium">
                      <span className="text-slate-400 line-through mr-1">5%</span> 
                      <span className="text-green-600 bg-green-100 px-1.5 py-0.5 rounded">↑ 提升显著</span>
                   </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:border-cyan-200 transition-colors shadow-sm">
                   <div className="flex items-center gap-2 mb-2">
                      <i className="fas fa-coins text-cyan-500 text-sm"></i>
                      <span className="text-xs text-cyan-600 uppercase font-bold tracking-wider">单篇成本</span>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-800">0.2</span>
                      <span className="text-sm font-bold text-cyan-600">元</span>
                   </div>
                   <div className="mt-2 text-xs text-slate-500 font-medium">
                      <span className="text-cyan-600 bg-cyan-100 px-1.5 py-0.5 rounded">↓ 极致压缩</span>
                   </div>
                </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col">
           <div className="clay-card p-5 bg-white border border-slate-100 flex-1 hover:bg-slate-50 transition-colors flex flex-col">
             <h3 className="text-base font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
               <i className="fas fa-lightbulb mr-3 text-cyan-500"></i> 当前应用与未来规划
             </h3>
             
             <div className="space-y-6 flex-1">
                <div className="flex items-start">
                   <i className="fas fa-check-circle text-green-500 mt-1 mr-3 text-sm"></i>
                   <div>
                      <div className="text-base font-bold text-slate-800 mb-1">已快速应用到分站</div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                         基于<span className="text-cyan-600 font-bold">“查成交”</span>功能抓取贝壳小区数据，结合地图 SDK 配套数据与联网数据（贝壳等优质源）自动生产。
                         <br/><span className="text-xs text-slate-400 mt-1 block">运营仅需审核内容质量，生产环节 0 介入。</span>
                      </p>
                   </div>
                </div>
                
                <div className="flex items-start">
                   <i className="fas fa-layer-group text-cyan-500 mt-1 mr-3 text-sm"></i>
                   <div>
                      <div className="text-base font-bold text-slate-800 mb-1">AIGC 上下文基石</div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                         生成的结构化测评数据，反向作为其他 AIGC 应用（如智能对话、推荐系统）的 <span className="text-cyan-600 font-bold">核心 Context 数据</span>。
                      </p>
                   </div>
                </div>

                <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 mt-auto">
                   <div className="text-xs text-slate-400 uppercase font-bold mb-2 tracking-wider">Future Planning</div>
                   <div className="flex items-start">
                      <i className="fas fa-star text-yellow-500 mt-1 mr-2 text-xs"></i>
                      <div>
                         <div className="text-sm font-bold text-slate-700">全场景内容自动化</div>
                         <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                            延伸至淘房圈动态、公众号文章等场景，自动生成小区分析与房源描述，实现内容矩阵的自动化填充。
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

           <div className="p-5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl border border-cyan-200 flex items-center justify-between shadow-sm">
              <div>
                 <div className="text-sm text-cyan-700 font-bold mb-1 uppercase tracking-wider">Total Coverage</div>
                 <div className="text-3xl font-black text-cyan-900">11,000+</div>
              </div>
              <div className="text-right">
                 <div className="text-sm text-blue-700 font-bold mb-1 uppercase tracking-wider">Cost Saving</div>
                 <div className="text-3xl font-black text-blue-900">100%</div>
              </div>
           </div>
        </div>
      </div>
      {/* Analysis Modal - Clay Style */}
      {showAnalysisModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowAnalysisModal(false)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#F3F6FD] rounded-3xl overflow-hidden border border-white shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
               <h3 className="text-slate-800 font-black text-lg flex items-center">
                 <i className="fas fa-chart-pie text-cyan-500 mr-2"></i>
                 用户咨询关注点分析 (Top User Interests)
               </h3>
               <button 
                  onClick={() => setShowAnalysisModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shadow-sm"
               >
                  <i className="fas fa-times"></i>
               </button>
            </div>
            
            {/* Back to Content Button - Fixed in Modal */}
            <div className="absolute top-4 right-16">
              <button 
                onClick={() => setShowAnalysisModal(false)}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors flex items-center shadow-sm font-bold"
              >
                <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 {/* Summary Stats */}
                 <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Total Interactions</div>
                    <div className="text-3xl font-black text-slate-800">450+</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">样本覆盖主流咨询场景</div>
                 </div>
                 <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Top Concern</div>
                    <div className="text-3xl font-black text-cyan-500">房价趋势</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">占比 15.5% (Rank 1)</div>
                 </div>
              </div>

              <div className="space-y-3">
                 {[
                   { label: "房价涨跌趋势", detail: "最近三个月房价涨了还是跌了？", percent: 15.5 },
                   { label: "业主吐槽/缺点", detail: "业主最想吐槽哪几点？/ 小区最明显的缺点是什么？", percent: 9.5 },
                   { label: "捡漏房源", detail: "小区最近有捡漏房吗？/ 最近有没有抄底房？", percent: 4.6 },
                   { label: "周边物业对比", detail: "和周边小区比哪个物业更好？/ 和周边小区比好在哪儿？", percent: 3.5 },
                   { label: "居住适配度", detail: "这个小区适合我吗？去问问", percent: 3.0 },
                   { label: "楼栋噪音/隔音", detail: "楼栋隔音效果怎么样？/ 临街楼栋会不会很吵？", percent: 2.7 },
                   { label: "未来规划利好", detail: "这个地段未来规划有什么利好吗？/ 小区未来还有哪些市政规划落地？", percent: 2.7 },
                   { label: "入学政策", detail: "入学政策有什么要注意的吗？/ 树人学校入学政策是否有调整风险？", percent: 2.5 },
                   { label: "早高峰拥堵", detail: "早高峰出小区要堵多久？", percent: 2.5 },
                   { label: "周边对比优势", detail: "和周边小区比好在哪儿？", percent: 2.2 },
                   { label: "地铁距离", detail: "到最近地铁站要步行几分钟？", percent: 1.9 },
                   { label: "流通性", detail: "流通性怎么样？/ 小区房价抗跌吗，为什么？", percent: 1.9 },
                   { label: "公摊比例", detail: "热门户型公摊比例大概多少？", percent: 1.9 },
                   { label: "临街噪音", detail: "临街楼栋会不会很吵？", percent: 1.9 },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center space-x-4 group p-2 hover:bg-white rounded-lg transition-colors">
                      <div className={`w-8 text-xs font-mono text-center font-black ${idx < 3 ? 'text-cyan-600 text-sm' : 'text-slate-400'}`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between text-xs mb-1.5">
                            <div className="flex flex-col">
                               <span className={`font-bold ${idx < 3 ? 'text-slate-800 text-sm' : 'text-slate-600'}`}>
                                 {item.label}
                                 {idx < 3 && <i className="fas fa-fire text-orange-500 ml-2 text-xs"></i>}
                               </span>
                               <span className="text-xs text-slate-400 mt-0.5 italic">{item.detail}</span>
                            </div>
                            <span className={`${idx < 3 ? 'text-cyan-600 font-bold' : 'text-slate-400'}`}>{item.percent}%</span>
                         </div>
                         <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className={`h-full rounded-full ${idx < 3 ? 'bg-cyan-400 shadow-[0_2px_4px_rgba(34,211,238,0.4)]' : 'bg-slate-400 group-hover:bg-cyan-300 transition-colors'}`} 
                              style={{ width: `${(item.percent / 15.5) * 100}%` }}
                            ></div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCommunityGenPage;
