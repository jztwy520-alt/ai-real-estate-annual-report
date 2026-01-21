
import React, { useState } from 'react';

const ProjectCommunityGenPage: React.FC = () => {
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <i className="fas fa-city text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">AI 应用场景 II：小区测评规模化生产</h2>
          <p className="text-base text-slate-400">全流程自动化，0人工成本，流量收割机</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="glass-card p-5 rounded-2xl border-t-4 border-cyan-500 flex flex-col h-full hover:bg-slate-800/60 transition-colors">
           <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-white">自动化生产闭环</h3>
              <div className="px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-400 text-sm font-bold border border-cyan-500/20">自动化率 100%</div>
           </div>
           
           <div className="flex flex-col gap-6 flex-1">
             {/* Industrial Transformation Process */}
             <div className="p-5 rounded-xl bg-slate-800/50 border border-white/5 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                   <i className="fas fa-bolt text-yellow-400 mr-3 text-lg"></i>
                   <span className="text-lg font-bold text-white">工业化转型流程</span>
                </div>
                
                {/* Process Visual */}
                <div className="flex items-center justify-between my-6 px-2">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center border border-white/10">
                        <i className="fas fa-database text-blue-400"></i>
                      </div>
                      <span className="text-xs text-slate-400 font-bold uppercase">数据聚合</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-600 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                        <i className="fas fa-robot text-cyan-400"></i>
                      </div>
                      <span className="text-xs text-cyan-400 font-bold uppercase">AI 生成</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-600 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center border border-white/10">
                        <i className="fas fa-check-circle text-emerald-400"></i>
                      </div>
                      <span className="text-xs text-slate-400 font-bold uppercase">质量校验</span>
                   </div>
                   <i className="fas fa-chevron-right text-slate-600 text-xs"></i>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center border border-white/10">
                        <i className="fas fa-globe text-purple-400"></i>
                      </div>
                      <span className="text-xs text-slate-400 font-bold uppercase">上线更新</span>
                   </div>
                </div>

                <p className="text-base text-slate-300 leading-relaxed mt-auto">
                  从人工编辑彻底转向自动化。无需运营配置，目前已实现 <span className="text-cyan-400 font-bold">11,000+</span> 小区全站覆盖，数据实时性与准确性大幅提升。
                </p>
             </div>

             {/* Business Impact Stats */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 hover:border-green-500/40 transition-colors">
                   <div className="flex items-center gap-2 mb-2">
                      <i className="fas fa-chart-line text-green-400 text-sm"></i>
                      <span className="text-xs text-green-400 uppercase font-bold tracking-wider">咨询转化率</span>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">8-12</span>
                      <span className="text-sm font-bold text-green-400">%</span>
                   </div>
                   <div className="mt-2 text-xs text-slate-400 font-medium">
                      <span className="text-slate-500 line-through mr-1">5%</span> 
                      <span className="text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">↑ 提升显著</span>
                   </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                   <div className="flex items-center gap-2 mb-2">
                      <i className="fas fa-coins text-cyan-400 text-sm"></i>
                      <span className="text-xs text-cyan-400 uppercase font-bold tracking-wider">单篇成本</span>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">0.2</span>
                      <span className="text-sm font-bold text-cyan-400">元</span>
                   </div>
                   <div className="mt-2 text-xs text-slate-400 font-medium">
                      <span className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">↓ 极致压缩</span>
                   </div>
                </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col">
           <div className="glass-card p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex-1 hover:bg-slate-800/60 transition-colors">
              <h3 className="text-base font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                <i className="fas fa-lightbulb mr-3 text-cyan-400"></i> 核心优势与迭代思考
              </h3>
              
              <ul className="space-y-6">
                 <li className="flex items-start">
                    <i className="fas fa-check text-green-400 mt-1 mr-3 text-sm"></i>
                    <div>
                       <div className="text-base font-bold text-white mb-1">数据驱动的内容质量</div>
                       <p className="text-base text-slate-400 leading-relaxed">利用平台存量房数据 + 联网搜索能力，生成内容比人工编辑更全面、更客观、更有数据支撑。</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <i className="fas fa-check text-green-400 mt-1 mr-3 text-sm"></i>
                    <div>
                       <div className="flex items-center gap-2 mb-1">
                          <div className="text-base font-bold text-white">用户偏好洞察</div>
                          <button 
                            onClick={() => setShowAnalysisModal(true)}
                            className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-colors flex items-center"
                          >
                            <i className="fas fa-chart-pie mr-1"></i> 查看分析
                          </button>
                       </div>
                       <p className="text-base text-slate-400 leading-relaxed">根据测评内容自动生成针对性的咨询引导短语，间接观测并收集用户的关注点与偏好。</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-orange-400 mt-1 mr-3 text-sm"></i>
                    <div>
                       <div className="text-base font-bold text-white mb-1">待优化方向</div>
                       <p className="text-base text-slate-400 leading-relaxed">平台基础数据维护仍需加强；联网搜索能力有提升空间；可快速复用到分站以满足扩张需求。</p>
                    </div>
                 </li>
              </ul>
           </div>

           <div className="p-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-between">
              <div>
                 <div className="text-sm text-cyan-300 font-bold mb-1 uppercase tracking-wider">Total Coverage</div>
                 <div className="text-3xl font-black text-white">11,000+</div>
              </div>
              <div className="text-right">
                 <div className="text-sm text-blue-300 font-bold mb-1 uppercase tracking-wider">Cost Saving</div>
                 <div className="text-3xl font-black text-white">100%</div>
              </div>
           </div>
        </div>
      </div>
      {/* Analysis Modal */}
      {showAnalysisModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowAnalysisModal(false)}>
          <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-800">
               <h3 className="text-white font-bold text-lg flex items-center">
                 <i className="fas fa-chart-pie text-cyan-400 mr-2"></i>
                 用户咨询关注点分析 (Top User Interests)
               </h3>
               <button 
                  onClick={() => setShowAnalysisModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
               >
                  <i className="fas fa-times"></i>
               </button>
            </div>
            
            {/* Back to Content Button - Fixed in Modal */}
            <div className="absolute top-4 right-16">
              <button 
                onClick={() => setShowAnalysisModal(false)}
                className="px-3 py-1.5 rounded-full bg-slate-800 border border-white/10 text-xs text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 {/* Summary Stats */}
                 <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Total Interactions</div>
                    <div className="text-3xl font-black text-white">450+</div>
                    <div className="text-xs text-slate-500 mt-1">样本覆盖主流咨询场景</div>
                 </div>
                 <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Top Concern</div>
                    <div className="text-3xl font-black text-cyan-400">房价趋势</div>
                    <div className="text-xs text-slate-500 mt-1">占比 15.5% (Rank 1)</div>
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
                   <div key={idx} className="flex items-center space-x-4 group">
                      <div className={`w-8 text-xs font-mono text-center font-bold ${idx < 3 ? 'text-cyan-400 text-sm' : 'text-slate-500'}`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between text-xs mb-1.5">
                            <div className="flex flex-col">
                               <span className={`font-medium ${idx < 3 ? 'text-white text-sm' : 'text-slate-300'}`}>
                                 {item.label}
                                 {idx < 3 && <i className="fas fa-fire text-orange-500 ml-2 text-xs"></i>}
                               </span>
                               <span className="text-xs text-slate-500 mt-0.5 italic">{item.detail}</span>
                            </div>
                            <span className={`${idx < 3 ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>{item.percent}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${idx < 3 ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-slate-600 group-hover:bg-cyan-500/50 transition-colors'}`} 
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
