
import React, { useState } from 'react';

const STARItem = ({ label, content, icon, color, action }: any) => (
  <div className={`p-5 rounded-xl border border-white/5 bg-slate-900/40 relative overflow-hidden group hover:bg-slate-800/60 transition-colors`}>
    <div className={`absolute top-0 left-0 w-1.5 h-full bg-${color}-500`}></div>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <i className={`fas ${icon} text-base text-${color}-400`}></i>
        <span className={`text-sm font-bold uppercase tracking-widest text-${color}-400`}>{label}</span>
      </div>
      {action}
    </div>
    <p className="text-base text-slate-300 leading-relaxed">{content}</p>
  </div>
);

const ProjectIMPage: React.FC = () => {
  const [showCleaningModal, setShowCleaningModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
          <i className="fas fa-database text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">数据基建</h2>
          <p className="text-base text-slate-400">Data Infrastructure & Governance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col justify-center">
          <STARItem 
            label="Background (背景)" 
            icon="fa-layer-group"
            color="purple"
            content="语音转文字质量差、语料数据来源杂、标准不一，严重影响 AI 推荐准确率与匹配效率。"
          />
          <STARItem 
            label="Corpus Cleaning (语料清洗)" 
            icon="fa-filter"
            color="cyan"
            content="解析 IM 高频卡片，过滤无效会话；明确发言人角色与系统招呼语，消除数据偏差。"
            action={
              <button 
                onClick={() => setShowCleaningModal(true)}
                className="px-2 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-colors flex items-center"
              >
                <i className="fas fa-search-plus mr-1"></i> 查看示例
              </button>
            }
          />
          
          {/* ASR Model Comparison */}
          <div className="p-5 rounded-xl border border-white/5 bg-slate-900/40 relative overflow-hidden group hover:bg-slate-800/60 transition-colors">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
            <div className="flex items-center space-x-3 mb-4">
               <i className="fas fa-microchip text-base text-blue-400"></i>
               <span className="text-sm font-bold uppercase tracking-widest text-blue-400">ASR Model Upgrade</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-lg border border-white/5 flex flex-col h-full">
                  <div className="text-xs text-slate-500 uppercase font-bold mb-2">Before (iFlytek)</div>
                  <div className="text-slate-300 text-base font-medium mb-3">科大讯飞</div>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start text-sm text-slate-400">
                      <i className="fas fa-times text-red-400 mt-0.5 mr-2"></i>
                      <span>仅逐字转译</span>
                    </li>
                    <li className="flex items-start text-sm text-slate-400">
                      <i className="fas fa-times text-red-400 mt-0.5 mr-2"></i>
                      <span>口语化噪音多</span>
                    </li>
                  </ul>
               </div>
               
               <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1.5 bg-blue-500 text-[8px] font-bold text-white rounded-bl-lg">RECOMMENDED</div>
                  <div className="text-xs text-blue-300 uppercase font-bold mb-2">After (Volcano)</div>
                  <div className="text-white text-base font-bold mb-3">火山引擎转译</div>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start text-sm text-blue-200">
                      <i className="fas fa-check text-green-400 mt-0.5 mr-2"></i>
                      <span><strong className="text-white">智能纠错</strong> (方言/口音)</span>
                    </li>
                    <li className="flex items-start text-sm text-blue-200">
                      <i className="fas fa-magic text-purple-400 mt-0.5 mr-2"></i>
                      <span><strong className="text-white">上下文补全</strong> (语义通顺)</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-slate-800/60 transition-colors">
           <div>
             <h3 className="text-xl font-bold text-white mb-8">关键成果看板</h3>
             <div className="space-y-10">
               <div className="flex justify-between items-end">
                 <div>
                   <div className="text-5xl font-black text-purple-400 mb-2">&gt;90%</div>
                   <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">用户偏好识别准确率</div>
                 </div>
               </div>
               <div className="h-3 w-full bg-slate-800 rounded-full">
                 <div className="h-full bg-purple-500 rounded-full w-[90%] shadow-[0_0_15px_#a855f7]"></div>
               </div>
               <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                 具备<strong>多模态解析能力</strong>：不仅识别文本，更能解析纯小程序卡片（无文字）中的商品属性，结合上下文精准推断用户潜在偏好。
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                 <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                   <div className="text-cyan-400 font-bold text-2xl mb-1">1000+</div>
                   <div className="text-sm text-slate-500 uppercase tracking-wider">非合作经纪人识别</div>
                 </div>
                 <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                   <div className="text-emerald-400 font-bold text-2xl mb-1">&lt;3%</div>
                   <div className="text-sm text-slate-500 uppercase tracking-wider">偏好识别错标率</div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="mt-10 pt-8 border-t border-white/5">
             <div className="text-sm text-slate-500 mb-3 uppercase tracking-widest font-bold">Data Governance</div>
             <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-md bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">ASR 优化</span>
                <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">元数据增强</span>
                <span className="px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">数据一致性</span>
             </div>
           </div>
        </div>
      </div>

      {/* Cleaning Example Modal */}
      {showCleaningModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowCleaningModal(false)}>
          <div className="relative w-full max-w-6xl h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowCleaningModal(false)}
              className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-white text-sm backdrop-blur-md transition-colors flex items-center shadow-lg"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
            </button>

            <button 
              onClick={() => setShowCleaningModal(false)}
              className="absolute -top-12 right-0 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="flex flex-col gap-6 w-full h-full overflow-y-auto p-4 items-center custom-scrollbar">
               <div className="w-full bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="text-base font-bold text-white mb-4 flex items-center">
                    <i className="fas fa-image text-cyan-400 mr-2"></i> 示例 1：小程序卡片多模态解析
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Example 1: New House */}
                    <div className="bg-slate-900/30 rounded-lg border border-white/5 p-4 flex flex-col hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-bold text-sm">新房-楼盘卡片</span>
                        <span className="text-[10px] text-slate-500 font-mono bg-white/5 px-1.5 py-0.5 rounded">01</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative group mb-4">
                        <img 
                          src="/images/im_card_new_house.png" 
                          alt="新房卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-building text-slate-700 text-2xl mb-1"></i>
                          <span className="text-slate-600 text-[10px]">im_card_new_house.png</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          <li className="flex justify-between"><span className="text-slate-500">楼盘名称:</span> <span className="text-white">四季花城</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">物业类型:</span> <span className="text-white">住宅</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">区属:</span> <span className="text-white">头屯河区</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">价格:</span> <span className="text-cyan-400 font-bold">16350元/平</span></li>
                        </ul>
                      </div>
                    </div>

                    {/* Example 2: Community */}
                    <div className="bg-slate-900/30 rounded-lg border border-white/5 p-4 flex flex-col hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-bold text-sm">二手房-小区卡片</span>
                        <span className="text-[10px] text-slate-500 font-mono bg-white/5 px-1.5 py-0.5 rounded">02</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative group mb-4">
                        <img 
                          src="/images/im_card_community.png" 
                          alt="小区卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-city text-slate-700 text-2xl mb-1"></i>
                          <span className="text-slate-600 text-[10px]">im_card_community.png</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          <li className="flex justify-between"><span className="text-slate-500">小区名称:</span> <span className="text-white">中海燕矶听潮</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">区属板块:</span> <span className="text-white">栖霞区/燕子矶</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">挂牌均价:</span> <span className="text-cyan-400 font-bold">33766元/平</span></li>
                        </ul>
                      </div>
                    </div>

                    {/* Example 3: Listing */}
                    <div className="bg-slate-900/30 rounded-lg border border-white/5 p-4 flex flex-col hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-bold text-sm">二手房-房源卡片</span>
                        <span className="text-[10px] text-slate-500 font-mono bg-white/5 px-1.5 py-0.5 rounded">03</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-800 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative group mb-4">
                        <img 
                          src="/images/im_card_listing.png" 
                          alt="房源卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-home text-slate-700 text-2xl mb-1"></i>
                          <span className="text-slate-600 text-[10px]">im_card_listing.png</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          <li className="flex flex-col pb-1 border-b border-white/5 mb-1">
                            <span className="text-slate-500 text-[10px] mb-0.5">房源标题:</span>
                            <span className="text-white truncate text-[10px]" title="万江地和苑1室1厅1卫100平方">万江地和苑1室1厅...</span>
                          </li>
                          <li className="flex justify-between"><span className="text-slate-500">小区:</span> <span className="text-white">万江地和苑</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">总价:</span> <span className="text-cyan-400 font-bold">200万</span></li>
                          <li className="flex justify-between"><span className="text-slate-500">户型/面积:</span> <span className="text-white">1室1厅 / 100㎡</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Recognition Note */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <i className="fas fa-info-circle mr-2 text-blue-400"></i>
                      <span>支持解析多种业务卡片，并自动触发相应业务动作（如：记录浏览偏好、触发加微状态等）。</span>
                    </div>
                  </div>
               </div>

               <div className="w-full bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="text-base font-bold text-white mb-4 flex items-center">
                    <i className="fas fa-user-tag text-purple-400 mr-2"></i> 示例 2：角色明确与系统消息过滤
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                       <div className="text-xs text-slate-500 uppercase font-bold mb-2">Problem (Ambiguity)</div>
                       <div className="space-y-2">
                         <div className="p-2 bg-white/5 rounded text-xs text-slate-400">
                           "你好，关于【能建·博悦府...】的房源，我有些问题..."
                         </div>
                         <div className="text-[10px] text-red-400 mt-1">
                           <i className="fas fa-exclamation-circle mr-1"></i> 无法区分是用户主动提问还是系统默认招呼语
                         </div>
                       </div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-purple-500/20">
                       <div className="text-xs text-purple-400 uppercase font-bold mb-2">Solution (Classification)</div>
                       <ul className="space-y-2 text-xs text-slate-300">
                         <li className="flex items-start">
                           <i className="fas fa-check text-purple-400 mt-0.5 mr-2"></i>
                           <span>引入 <strong className="text-white">发言者角色 & LLM 上下文分析</strong>，而非简单规则匹配。</span>
                         </li>
                         <li className="flex items-start">
                           <i className="fas fa-check text-purple-400 mt-0.5 mr-2"></i>
                           <span>结合会话路径识别 <strong className="text-white">系统触发</strong> vs <strong className="text-white">用户主动输入</strong>，精准归因意向。</span>
                         </li>
                       </ul>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectIMPage;
