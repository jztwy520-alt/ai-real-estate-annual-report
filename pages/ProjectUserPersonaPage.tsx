
import React, { useState } from 'react';

const ProjectUserPersonaPage: React.FC = () => {
  const [showDataModal, setShowDataModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shadow-inner">
          <i className="fas fa-fingerprint text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">数据基建进阶：用户主动行为画像</h2>
          <p className="text-base text-slate-500 font-bold">基于“搜/筛/问”全链路主动行为的画像重构算法</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left: Logic & Algorithm */}
        <div className="space-y-6 flex flex-col">
          <div className="clay-card p-6 flex flex-col hover:bg-slate-50 transition-colors">
             <div className="flex items-center gap-3 mb-5">
               <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shadow-sm">
                 <i className="fas fa-microchip"></i>
               </div>
               <h3 className="text-xl font-display font-bold text-slate-800">核心算法逻辑</h3>
             </div>
             <div className="space-y-5">
                <div className="p-5 bg-white rounded-xl border border-slate-100 relative shadow-sm">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-orange-400 rounded-r"></div>
                   <h4 className="text-sm font-bold text-slate-700 mb-2">1. 行为加权</h4>
                   <p className="text-sm text-slate-500 leading-relaxed mb-3">
                     区分意向强度，赋予差异化权重参数。
                   </p>
                   <div className="flex gap-3">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-lg border border-red-200 font-bold">High (20): 找房需求单 / 咨询</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-lg border border-blue-200 font-bold">Mid (10): 搜索 / 筛选</span>
                   </div>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-100 relative shadow-sm">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-cyan-400 rounded-r"></div>
                   <h4 className="text-sm font-bold text-slate-700 mb-2">2. 时间衰减</h4>
                   <p className="text-sm text-slate-500 leading-relaxed flex items-center justify-between">
                     <span>引入指数衰减因子，聚焦用户近期真实意图。</span>
                     <span className="font-mono text-cyan-600 text-base bg-cyan-50 px-2 rounded">e^(-t/180)</span>
                   </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-100 relative shadow-sm">
                   <div className="absolute -left-1 top-4 w-2 h-8 bg-purple-400 rounded-r"></div>
                   <h4 className="text-sm font-bold text-slate-700 mb-2">3. 置信度分级</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">
                     基于全量用户分位数法（30%/70%），将偏好强度划分为 <span className="text-slate-800 font-black">高、中、低</span> 三级，输出 Top 5 偏好值。
                   </p>
                </div>
             </div>
          </div>

          <div className="clay-card p-6 bg-gradient-to-br from-slate-50 to-orange-50 flex-1 hover:bg-orange-100/50 transition-colors">
             <h3 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-4 flex items-center">
               <i className="fas fa-tag mr-2"></i> CDP 标签输出示例
             </h3>
             <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-orange-200 pb-2">
                   <span className="text-slate-500">主动行为标签_总价偏好</span>
                   <span className="text-emerald-600 font-bold">100万以内, 高</span>
                </div>
                <div className="flex justify-between border-b border-orange-200 pb-2">
                   <span className="text-slate-500">主动行为标签_新房板块</span>
                   <span className="text-emerald-600 font-bold">南京-河西, 中</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-slate-500">主动行为标签_业务偏好</span>
                   <span className="text-emerald-600 font-bold">新房, 高</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Data Collection Matrix */}
        <div className="clay-card p-8 flex flex-col h-full hover:bg-slate-50 transition-colors">
           <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shadow-sm">
               <i className="fas fa-layer-group"></i>
             </div>
             <h3 className="text-2xl font-display font-bold text-slate-800">全场景数据采集矩阵</h3>
             <button 
               onClick={() => setShowDataModal(true)}
               className="ml-auto px-3 py-1.5 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-600 text-xs font-bold border border-orange-200 transition-all flex items-center group shadow-sm"
             >
               <i className="fas fa-table mr-2 group-hover:scale-110 transition-transform"></i> 查看数据示例
             </button>
           </div>
           
           <div className="flex-1 space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-1 bg-slate-200 rounded-full"></div>

              {/* Item 1 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-cyan-400 flex items-center justify-center text-cyan-500 z-10 shadow-sm">
                    <i className="fas fa-magnifying-glass text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-slate-700">搜</h4>
                 <div className="text-sm text-slate-500 mt-2 space-y-1.5 font-medium">
                    <p>• 采集联想词、历史记录中的<strong>小区/楼盘 ID</strong></p>
                    <p>• 映射楼盘户型总价集合、板块归属</p>
                 </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-purple-400 flex items-center justify-center text-purple-500 z-10 shadow-sm">
                    <i className="fas fa-sliders text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-slate-700">筛</h4>
                 <div className="text-sm text-slate-500 mt-2 space-y-1.5 font-medium">
                    <p>• 采集列表页筛选条件：<strong>Total Price & Location</strong></p>
                    <p>• 精确匹配主数据板块字典（location_level_three）</p>
                 </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-emerald-400 flex items-center justify-center text-emerald-500 z-10 shadow-sm">
                    <i className="fas fa-comments text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-slate-700">问</h4>
                 <div className="text-sm text-slate-500 mt-2 space-y-1.5 font-medium">
                    <p>• 咨询楼盘/房源/户型详情页</p>
                    <p>• 优先采集具体房源总价，降级使用楼盘均价集合</p>
                 </div>
              </div>

              {/* Item 4 */}
              <div className="relative pl-12">
                 <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-red-400 flex items-center justify-center text-red-500 z-10 shadow-sm">
                    <i className="fas fa-clipboard-list text-sm"></i>
                 </div>
                 <h4 className="text-lg font-bold text-slate-700">填</h4>
                 <div className="text-sm text-slate-500 mt-2 space-y-1.5 font-medium">
                    <p>• “帮你找房”需求单提交</p>
                    <p>• <strong>最高权重</strong>的主动偏好表达</p>
                 </div>
              </div>
           </div>

           <div className="mt-10 pt-6 border-t border-slate-200 flex justify-between items-center">
              <div>
                 <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Data Update</div>
                 <div className="text-2xl font-black text-slate-700 mt-1">T+1</div>
              </div>
              <div className="text-right">
                 <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Accuracy</div>
                 <div className="text-2xl font-black text-orange-500 mt-1">&gt;90%</div>
              </div>
           </div>
        </div>
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
                <i className="fas fa-table text-orange-500 mr-3"></i>
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
                      <th className="p-4 border-b border-slate-200 font-bold">日期</th>
                      <th className="p-4 border-b border-slate-200 font-bold">行为类型</th>
                      <th className="p-4 border-b border-slate-200 font-bold">业务偏好</th>
                      <th className="p-4 border-b border-slate-200 font-bold">板块偏好</th>
                      <th className="p-4 border-b border-slate-200 font-bold">总价采集值 (万)</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-center">权重</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-center">间隔 (天)</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right">衰减因子</th>
                      <th className="p-4 border-b border-slate-200 font-bold text-right text-emerald-600">得分</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600">
                    {[
                      { date: "2025/8/9", type: "新房搜索", biz: "新房", loc: "河西-> 南京-河西", price: "580->", weight: 10, interval: 1, decay: "e^(-1/180)≈0.994", score: "10×0.994≈9.94" },
                      { date: "2025/7/1", type: "二手房筛选", biz: "二手房", loc: "南部新城->南京-南部新城", price: "620", weight: 10, interval: 30, decay: "e^(-30/180)≈0.847", score: "10×0.847≈8.47" },
                      { date: "2025/5/1", type: "咨询新房房源详情", biz: "新房", loc: "南部新城->南京-河西", price: "550", weight: 10, interval: 100, decay: "e^(-100/180)≈0.589", score: "10×0.589≈5.89" },
                      { date: "2025/2/10", type: "二手房找房需求提交", biz: "二手房", loc: "南部新城->南京-河西", price: "600-700", weight: 20, interval: 181, decay: "e^(-181/180)≈0.367", score: "20×0.367≈7.34" },
                      { date: "2025/1/1", type: "新房找房需求提交", biz: "新房", loc: "南部新城->南京-南部新城", price: "500-600", weight: 20, interval: 221, decay: "e^(-221/180)≈0.287", score: "20×0.287≈5.74" },
                      { date: "2024/12/10", type: "咨询二手房小区", biz: "二手房", loc: "南部新城->南京-南部新城", price: "590", weight: 10, interval: 243, decay: "e^(-243/180)≈0.267", score: "10×0.267≈2.67" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4 text-slate-700">{row.date}</td>
                        <td className="p-4 font-bold text-slate-800">{row.type}</td>
                        <td className="p-4 text-slate-600">{row.biz}</td>
                        <td className="p-4 text-slate-500 text-xs">{row.loc}</td>
                        <td className="p-4 text-slate-500 font-mono">{row.price}</td>
                        <td className="p-4 text-center font-bold text-slate-700">{row.weight}</td>
                        <td className="p-4 text-center text-slate-500">{row.interval}</td>
                        <td className="p-4 text-right font-mono text-xs text-slate-400">{row.decay}</td>
                        <td className="p-4 text-right font-mono font-bold text-emerald-600 bg-emerald-50/30">{row.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectUserPersonaPage;
