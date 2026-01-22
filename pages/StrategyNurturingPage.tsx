import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Search, Activity, Terminal, CheckCircle2, Bot } from 'lucide-react';

const StrategyNurturingPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-4 shadow-sm"
        >
          <Target className="w-4 h-4" />
          <span className="font-semibold text-sm">Strategy • Nurturing</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-slate-800 mb-4"
        >
          自动化培育：全生命周期监控与 1人1策
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-3xl"
        >
          从“被动等待”转向“事件驱动 (Event-Driven) 主动激活”
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Lifecycle & Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="clay-card p-8 flex flex-col"
        >
          <h3 className="text-2xl font-display font-bold text-slate-800 mb-8 flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl text-purple-600">
              <Activity className="w-6 h-6" />
            </div>
            生命周期监控与触发
          </h3>

          <div className="flex-1 space-y-8">
            {/* Lifecycle Monitor */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="text-xs font-bold text-slate-400 uppercase mb-6 tracking-wider">User Lifecycle Monitor</div>
              <div className="relative flex justify-between items-center z-10">
                {/* Connecting Line - Optimized */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 rounded-full"></div>
                
                {[
                  { label: '潜客', active: false },
                  { label: '意向', active: false },
                  { label: '留资', active: true }, // Active Stage
                  { label: '带看', active: false },
                  { label: '成交', active: false },
                ].map((stage, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 bg-white px-2 rounded-full border border-transparent">
                    <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${stage.active ? 'bg-white border-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.2)] scale-125' : 'bg-slate-200 border-white ring-2 ring-white'}`}></div>
                    <span className={`text-xs font-bold ${stage.active ? 'text-purple-600' : 'text-slate-400'}`}>{stage.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trigger Strategy */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trigger Strategy (触达策略)</div>
              
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between group hover:border-blue-200 transition-colors">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-1">事件驱动 (Event-Driven)</div>
                  <div className="text-sm text-slate-500 font-medium">政策发布 / 房源降价 / 学区划分</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-between group hover:border-orange-200 transition-colors">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-1">主动触达 (Proactive)</div>
                  <div className="text-sm text-slate-500 font-medium">偏好挖掘 / 潜在需求探查 / 周期性激活</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 1-on-1 Strategy & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="clay-card p-8 flex flex-col"
        >
          <h3 className="text-2xl font-display font-bold text-slate-800 mb-8 flex items-center gap-3">
            <div className="p-2 bg-cyan-100 rounded-xl text-cyan-600">
              <Bot className="w-6 h-6" />
            </div>
            1人1策与 Skills 赋能
          </h3>

          <div className="flex-1 space-y-6">
            {/* Console Simulation - Optimized Style (Clay) */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden font-mono text-sm group hover:shadow-md transition-all duration-300">
              
              <div className="absolute top-3 right-3 px-2 py-1 bg-cyan-50 text-cyan-600 text-[10px] rounded border border-cyan-100 font-bold shadow-sm">
                 Running Skill: mining_user_demand
              </div>
              <div className="space-y-5 relative z-10">
                <div className="text-slate-600 font-medium">
                  <span className="text-purple-600 mr-2 font-bold text-xs bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100">INPUT &gt;</span> 
                  User(行为:多次浏览学区房, 标签:价格敏感), Memory(历史咨询:孩子明年上学)
                </div>
                <div className="pl-4 border-l-2 border-slate-200 space-y-3">
                   <div className="text-slate-500 flex items-center gap-3 font-medium">
                      <Terminal className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                      <span className="typing-effect">正在关联行为与历史记忆...</span>
                   </div>
                   <div className="text-slate-500 flex items-center gap-3 font-medium">
                      <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                      <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded border border-cyan-100">挖掘隐性需求：高性价比学区房...</span>
                   </div>
                   <div className="text-emerald-600 flex items-center gap-3 font-bold mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4" />
                      个性化推荐策略生成完毕
                   </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">Case Study</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-base font-bold text-slate-800 mb-2">无需订阅，自动挖掘：学区房需求捕获</h4>
                   <p className="text-sm text-slate-600 leading-relaxed mb-3">
                     系统通过自主分析用户浏览行为与历史对话记忆，自动识别出“学区”隐性需求。结合最新相关政策，生成针对性解读内容主动推送，引导开口、挖掘需求。
                   </p>
                   <div className="flex gap-2">
                      <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs font-bold rounded-lg border border-cyan-100">1人1策</span>
                      <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-lg border border-purple-100">自动激活</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyNurturingPage;