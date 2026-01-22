
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const STARItem = ({ label, content, icon, color, action }: any) => (
  <div className={`clay-card p-5 relative overflow-hidden group hover:bg-${color}-50 transition-colors`}>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded-full bg-${color}-100 flex items-center justify-center text-${color}-500 shadow-sm`}>
            <i className={`fas ${icon} text-sm`}></i>
        </div>
        <span className={`text-sm font-bold uppercase tracking-widest text-${color}-600`}>{label}</span>
      </div>
      {action}
    </div>
    <p className="text-sm text-slate-600 leading-relaxed font-medium">{content}</p>
  </div>
);

const ProjectIMPage: React.FC = () => {
  const [showCleaningModal, setShowCleaningModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 shadow-inner">
          <i className="fas fa-database text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">数据基建</h2>
          <p className="text-base text-slate-500 font-bold">Data Infrastructure & Governance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col h-full">
          <STARItem 
            label="背景" 
            icon="fa-layer-group"
            color="purple"
            content="语音转文字质量差、语料数据来源杂、标准不一，严重影响 AI 推荐准确率与匹配效率。"
          />
          <STARItem 
            label="语料清洗" 
            icon="fa-filter"
            color="cyan"
            content="解析 IM 高频卡片，过滤无效会话；明确发言人角色与系统招呼语，消除数据偏差。"
            action={
              <button 
                onClick={() => setShowCleaningModal(true)}
                className="px-3 py-1.5 rounded-lg bg-cyan-100 hover:bg-cyan-200 text-cyan-600 text-xs font-bold transition-colors flex items-center shadow-sm"
              >
                <i className="fas fa-search-plus mr-1"></i> 查看示例
              </button>
            }
          />
          
          {/* ASR Model Comparison */}
          <div className="clay-card p-5 relative overflow-hidden group hover:bg-blue-50 transition-colors flex-1 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shadow-sm">
                   <i className="fas fa-microchip text-sm"></i>
               </div>
               <span className="text-sm font-bold uppercase tracking-widest text-blue-600">ASR Model Upgrade</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 flex-1">
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col h-full relative overflow-hidden hover:shadow-md transition-shadow">
                  <div className="text-xs text-slate-500 uppercase font-bold mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    Original (Before)
                  </div>
                  <div className="text-slate-700 text-lg font-black mb-4">科大讯飞</div>
                  
                  <div className="space-y-3 mt-auto">
                     <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3">
                        <i className="fas fa-times-circle text-red-400 mt-1"></i>
                        <span className="text-xs text-slate-600 font-medium">仅逐字转译，无语义理解能力</span>
                     </div>
                     <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3">
                        <i className="fas fa-times-circle text-red-400 mt-1"></i>
                        <span className="text-xs text-slate-600 font-medium">口语噪音多，严重干扰分析</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 flex flex-col h-full relative overflow-hidden shadow-inner group-hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 p-1.5 bg-blue-500 text-[8px] font-bold text-white rounded-bl-lg shadow-sm z-10">UPGRADE</div>
                  
                  <div className="text-xs text-blue-600 uppercase font-bold mb-3 flex items-center gap-2 border-b border-blue-200/50 pb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Optimized (After)
                  </div>
                  <div className="text-blue-900 text-lg font-black mb-4">火山引擎转译</div>
                  
                  <div className="space-y-3 mt-auto relative z-10">
                     <div className="p-3 bg-white/60 rounded-lg border border-blue-100 backdrop-blur-sm flex items-start gap-3 shadow-sm">
                        <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                        <div className="text-xs">
                           <strong className="block text-blue-900 mb-0.5">智能纠错</strong>
                           <span className="text-blue-700/80">方言与口音自动校准</span>
                        </div>
                     </div>
                     <div className="p-3 bg-white/60 rounded-lg border border-blue-100 backdrop-blur-sm flex items-start gap-3 shadow-sm">
                        <i className="fas fa-wand-magic-sparkles text-purple-500 mt-1"></i>
                        <div className="text-xs">
                           <strong className="block text-blue-900 mb-0.5">上下文补全</strong>
                           <span className="text-blue-700/80">语义通顺化处理</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="clay-card p-6 flex flex-col justify-between hover:bg-slate-50 transition-colors">
           <div>
             <h3 className="text-xl font-black text-indigo-900 mb-8">关键成果看板</h3>
             <div className="space-y-10">
               <div className="flex justify-between items-end">
                 <div>
                   <div className="text-5xl font-black text-purple-500 mb-2 drop-shadow-sm">&gt;90%</div>
                   <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">用户偏好识别准确率</div>
                 </div>
               </div>
               <div className="h-4 w-full bg-slate-100 rounded-full shadow-inner">
                 <div className="h-full bg-purple-500 rounded-full w-[90%] shadow-[0_2px_4px_rgba(168,85,247,0.4)]"></div>
               </div>
               <p className="text-sm text-slate-500 mt-2 leading-relaxed font-medium">
                 具备<strong>多模态解析能力</strong>：不仅识别文本，更能解析纯小程序卡片（无文字）中的商品属性，结合上下文精准推断用户潜在偏好。
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                 <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-100">
                   <div className="text-cyan-600 font-black text-2xl mb-1">1000+</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">非合作经纪人识别</div>
                 </div>
                 <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                   <div className="text-emerald-600 font-black text-2xl mb-1">&lt;3%</div>
                   <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">偏好识别错标率</div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="mt-10 pt-8 border-t border-slate-100">
             <div className="text-sm text-slate-400 mb-3 uppercase tracking-widest font-black">Data Governance</div>
             <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-purple-100 text-purple-600 text-sm font-bold shadow-sm">ASR 优化</span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-100 text-cyan-600 text-sm font-bold shadow-sm">元数据增强</span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-600 text-sm font-bold shadow-sm">数据一致性</span>
             </div>
           </div>
        </div>
      </div>

      {/* Cleaning Example Modal - Clay Style */}
      {showCleaningModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowCleaningModal(false)}>
          <div className="relative w-full max-w-6xl h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowCleaningModal(false)}
              className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-sm transition-colors flex items-center shadow-lg font-bold"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
            </button>

            <button 
              onClick={() => setShowCleaningModal(false)}
              className="absolute -top-12 right-0 z-50 w-10 h-10 rounded-full bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-lg"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="flex flex-col gap-6 w-full h-full overflow-y-auto p-4 items-center custom-scrollbar">
               <div className="w-full bg-[#F3F6FD] rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="text-xl font-black text-slate-800 mb-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 mr-3 shadow-sm">
                        <i className="fas fa-image"></i>
                    </div>
                    示例 1：小程序卡片多模态解析
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Example 1: New House */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col hover:shadow-lg transition-all border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-700 font-bold text-sm">新房-楼盘卡片</span>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded-md">01</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden relative group mb-4 shadow-inner">
                        <img 
                          src={getAssetPath('/images/im_card_new_house.png')} 
                          alt="新房卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-building text-slate-300 text-3xl mb-2"></i>
                          <span className="text-slate-400 text-xs">im_card_new_house.png</span>
                        </div>
                      </div>

                      <div className="mt-auto bg-slate-50 p-3 rounded-xl">
                        <div className="text-[10px] text-slate-400 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex justify-between"><span className="text-slate-400">楼盘名称:</span> <span className="font-bold text-slate-800">四季花城</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">物业类型:</span> <span className="font-bold text-slate-800">住宅</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">区属:</span> <span className="font-bold text-slate-800">头屯河区</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">价格:</span> <span className="text-cyan-600 font-black">16350元/平</span></li>
                        </ul>
                      </div>
                    </div>

                    {/* Example 2: Community */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col hover:shadow-lg transition-all border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-700 font-bold text-sm">二手房-小区卡片</span>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded-md">02</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden relative group mb-4 shadow-inner">
                        <img 
                          src={getAssetPath('/images/im_card_community.png')} 
                          alt="小区卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-city text-slate-300 text-3xl mb-2"></i>
                          <span className="text-slate-400 text-xs">im_card_community.png</span>
                        </div>
                      </div>

                      <div className="mt-auto bg-slate-50 p-3 rounded-xl">
                        <div className="text-[10px] text-slate-400 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex justify-between"><span className="text-slate-400">小区名称:</span> <span className="font-bold text-slate-800">中海燕矶听潮</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">区属板块:</span> <span className="font-bold text-slate-800">栖霞区/燕子矶</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">挂牌均价:</span> <span className="text-cyan-600 font-black">33766元/平</span></li>
                        </ul>
                      </div>
                    </div>

                    {/* Example 3: Listing */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col hover:shadow-lg transition-all border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-700 font-bold text-sm">二手房-房源卡片</span>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded-md">03</span>
                      </div>
                      
                      <div className="aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden relative group mb-4 shadow-inner">
                        <img 
                          src={getAssetPath('/images/im_card_listing.png')} 
                          alt="房源卡片" 
                          className="w-full h-full object-cover z-10 relative"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                          <i className="fas fa-home text-slate-300 text-3xl mb-2"></i>
                          <span className="text-slate-400 text-xs">im_card_listing.png</span>
                        </div>
                      </div>

                      <div className="mt-auto bg-slate-50 p-3 rounded-xl">
                        <div className="text-[10px] text-slate-400 uppercase font-bold mb-2 tracking-wider">Parsed Data</div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li className="flex flex-col pb-2 border-b border-slate-200 mb-2">
                            <span className="text-slate-400 text-[10px] mb-0.5">房源标题:</span>
                            <span className="text-slate-800 font-bold truncate text-xs" title="万江地和苑1室1厅1卫100平方">万江地和苑1室1厅...</span>
                          </li>
                          <li className="flex justify-between"><span className="text-slate-400">小区:</span> <span className="font-bold text-slate-800">万江地和苑</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">总价:</span> <span className="text-cyan-600 font-black">200万</span></li>
                          <li className="flex justify-between"><span className="text-slate-400">户型/面积:</span> <span className="font-bold text-slate-800">1室1厅 / 100㎡</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Recognition Note */}
                  <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
                    <div className="text-sm text-slate-500 font-medium">
                      <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                      <span>支持解析多种业务卡片，并自动触发相应业务动作（如：记录浏览偏好、触发加微状态等）。</span>
                    </div>
                  </div>
               </div>

               <div className="w-full bg-[#F3F6FD] rounded-3xl p-8 shadow-2xl border border-white mt-6">
                  <div className="text-xl font-black text-slate-800 mb-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3 shadow-sm">
                        <i className="fas fa-user-tag"></i>
                    </div>
                    示例 2：角色明确与系统消息过滤
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                       <div className="text-xs text-slate-400 uppercase font-bold mb-3">Problem</div>
                       <div className="space-y-3">
                         <div className="p-3 bg-white rounded-lg text-sm text-slate-600 shadow-sm border border-slate-100 italic">
                           "你好，关于【能建·博悦府...】的房源，我有些问题..."
                         </div>
                         <div className="text-xs text-red-500 font-bold flex items-center">
                           <i className="fas fa-exclamation-circle mr-2"></i> 无法区分是用户主动提问还是系统默认招呼语
                         </div>
                       </div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                       <div className="text-xs text-purple-500 uppercase font-bold mb-3">Solution</div>
                       <ul className="space-y-3 text-sm text-slate-600">
                         <li className="flex items-start">
                           <i className="fas fa-check-circle text-purple-500 mt-0.5 mr-2"></i>
                           <span>引入 <strong className="text-purple-700">发言者角色 & LLM 上下文分析</strong>，而非简单规则匹配。</span>
                         </li>
                         <li className="flex items-start">
                           <i className="fas fa-check-circle text-purple-500 mt-0.5 mr-2"></i>
                           <span>结合会话路径识别 <strong className="text-purple-700">系统触发</strong> vs <strong className="text-purple-700">用户主动输入</strong>，精准归因意向。</span>
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
