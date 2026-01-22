
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Search, Activity, Terminal, CheckCircle2, Bot, Handshake, Network, MessageSquare, AlertTriangle } from 'lucide-react';

const StrategyMatchingPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm"
        >
          <Handshake className="w-4 h-4" />
          <span className="font-semibold text-sm">Strategy • Matching</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-slate-800 mb-4"
        >
          基于 ROI 与成功率的小B管理体系
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-3xl"
        >
          告别“平均主义”，实现“收益最大化”的动态分发
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: Evaluation & Management */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 clay-card p-4 flex flex-col hover:bg-slate-50 transition-colors"
        >
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shadow-sm">
               <Activity className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800">动态评价与管理</h3>
           </div>
           
           <div className="flex-1 space-y-6">
              <div className="space-y-4">
                 <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between mb-1">
                       <span className="text-sm font-bold text-slate-700">新手期 (New)</span>
                       <span className="text-xs text-slate-400 font-medium">权重: 扶持</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">重点考核：响应速度、服务态度</div>
                 </div>
                 <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 shadow-sm">
                    <div className="flex justify-between mb-1">
                       <span className="text-sm font-bold text-emerald-600">成长期 (Growth)</span>
                       <span className="text-xs text-emerald-600 font-medium">权重: 激励</span>
                    </div>
                    <div className="text-xs text-emerald-700 font-medium">重点考核：转化率、用户好评</div>
                 </div>
                 <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between mb-1">
                       <span className="text-sm font-bold text-slate-700">成熟期 (Stable)</span>
                       <span className="text-xs text-slate-400 font-medium">权重: 稳定</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">重点考核：ROI、复购率</div>
                 </div>
              </div>

              {/* Agent Management */}
              <div className="p-4 bg-red-50 rounded-xl border border-red-100 shadow-sm">
                 <div className="text-sm font-bold text-red-500 uppercase mb-2">管理机制探讨</div>
                 <p className="text-xs text-slate-600 leading-relaxed mb-2 font-medium">
                    建立强制卡点：未标记客户问题 <span className="text-red-500 font-bold">禁止回复</span> / <span className="text-red-500 font-bold">暂停新线索分配</span>，倒逼经纪人完善数据。
                 </p>
              </div>
           </div>
        </motion.div>

        {/* Middle Column: Distribution Engine */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 clay-card p-4 flex flex-col hover:bg-slate-50 transition-colors"
        >
           <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shadow-sm">
               <Network className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800">智能分发引擎</h3>
           </div>
           
           <div className="flex-1 flex flex-col justify-between gap-4">
              {/* Top Section: ROI & Signals - Grid Layout */}
              <div className="grid grid-cols-2 gap-3 h-full">
                 <div className="col-span-1 flex flex-col items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
                    <div className="text-xl font-black text-blue-600 mb-1">ROI</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold text-center">Maximization</div>
                 </div>

                 <div className="col-span-1 flex flex-col gap-3">
                    <div className="flex-1 flex flex-col items-center justify-center p-2 bg-red-50 rounded-xl border border-red-100 shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-sm mb-1"></div>
                       <span className="text-[10px] text-red-600 font-bold">饱和预警</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-2 bg-green-50 rounded-xl border border-green-100 shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm mb-1"></div>
                       <span className="text-[10px] text-green-600 font-bold">潜力挖掘</span>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-3">
                 <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col gap-2 shadow-sm">
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-slate-500 font-bold">业务匹配度</span>
                       <span className="text-xs text-blue-600 font-bold">High</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-blue-500 rounded-full"></div></div>
                 </div>
                 <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col gap-2 shadow-sm">
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-slate-500 font-bold">沟通风格匹配</span>
                       <span className="text-xs text-purple-600 font-bold">Medium</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[65%] h-full bg-purple-500 rounded-full"></div></div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Right Column: Connection Assistant */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1 clay-card p-4 flex flex-col hover:bg-slate-50 transition-colors"
        >
           <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 shadow-sm">
               <MessageSquare className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-bold text-slate-800">AI 辅助建联</h3>
           </div>
           
           <div className="flex-1 space-y-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                 <div className="text-xs font-bold text-indigo-500 uppercase mb-2 flex items-center gap-2">
                    <i className="fas fa-comment-alt"></i> 话术建议 
                 </div>
                 <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100 text-xs text-slate-600 font-medium mb-2">
                    <p className="italic">"您关注的[XX小区]近期成交了一套同户型..."</p>
                 </div>
                 <button className="w-full py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-[10px] text-white transition-colors font-bold shadow-sm">
                    一键发送
                 </button>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                 <div className="text-xs font-bold text-orange-500 uppercase mb-2 flex items-center gap-2">
                    <i className="fas fa-home"></i> 配房建议 
                 </div>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded border border-orange-100">房源A,推荐理由:xxxxxxx</span>
                    <span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded border border-orange-100">房源B,推荐理由xxxxxxxx</span>
                 </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                 <div className="text-xs font-bold text-blue-500 uppercase mb-2 flex items-center gap-2">
                    <i className="fas fa-file-alt"></i> 辅助资料
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-1.5 bg-blue-50 rounded border border-blue-100 text-[10px] text-blue-600 font-bold">小区测评.pdf</div>
                    <div className="text-center p-1.5 bg-blue-50 rounded border border-blue-100 text-[10px] text-blue-600 font-bold">学区政策.docx</div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyMatchingPage;
