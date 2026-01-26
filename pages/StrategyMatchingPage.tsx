import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Network, Zap, Target, BarChart3, Users, Bot, Gift, Trophy, Crown, ArrowRight, Sparkles, Filter, ShieldCheck, TrendingUp, Star, Cpu, ScanSearch, Gem } from 'lucide-react';

const StrategyMatchingPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-slate-50/50 min-h-screen">
      <header className="mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-4 shadow-sm"
        >
          <Target className="w-4 h-4" />
          <span className="font-bold text-sm">Strategy • Matching</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-black text-slate-800 mb-3 tracking-tight"
        >
          基于 ROI 最大化的数智增长与分发引擎
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-4xl font-medium"
        >
          从“权益裂变增长”到“OCPB智能分发”，打造全链路商业化闭环
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: Growth & Tiering */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 flex flex-col gap-4"
        >
           <div className="flex items-center gap-2 mb-1">
             <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600 shadow-inner">
               <Users className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-black text-slate-800">全域增长与价值分层</h3>
           </div>
           
           <div className="bg-white rounded-3xl p-5 shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10 space-y-5">
                 
                 {/* Dual Engine: Growth & Scoring */}
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-3 rounded-2xl border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-1.5">
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                            <span className="font-black text-orange-800 text-base">成长体系</span>
                        </div>
                        <div className="text-[10px] font-bold text-orange-600 mb-1">自运营驱动 (Self-Drive)</div>
                        <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-orange-500 font-bold shadow-sm">任务</span>
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-orange-500 font-bold shadow-sm">勋章</span>
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-orange-500 font-bold shadow-sm">等级权益</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-2xl border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-1.5">
                            <ShieldCheck className="w-4 h-4 text-blue-500" />
                            <span className="font-black text-blue-800 text-base">评分体系</span>
                        </div>
                        <div className="text-[10px] font-bold text-blue-600 mb-1">平台管控 (Control)</div>
                        <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-blue-500 font-bold shadow-sm">信用分</span>
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-blue-500 font-bold shadow-sm">服务分</span>
                            <span className="px-1.5 py-0.5 bg-white rounded-md text-[9px] text-blue-500 font-bold shadow-sm">规范</span>
                        </div>
                    </div>
                 </div>

                 {/* Divider */}
                 <div className="flex items-center gap-2 opacity-50">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <span className="text-xs font-bold text-slate-400">驱动分层跃迁</span>
                    <div className="h-px bg-slate-300 flex-1"></div>
                 </div>

                 {/* Tiering System */}
                 <div className="space-y-3">
                    {/* Tier 1 */}
                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-md relative z-10 transform hover:-translate-y-1 transition-transform duration-300">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-black text-sm shadow-inner">01</div>
                          <div>
                             <div className="text-lg font-black text-slate-700">新锐经纪人</div>
                             <div className="text-xs font-bold text-slate-400 mt-0.5">潜力孵化池 • 线上运营培养</div>
                          </div>
                       </div>
                       <Trophy className="w-5 h-5 text-slate-300" />
                    </div>

                    {/* Tier 2 */}
                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-blue-100 shadow-md border-l-4 border-l-blue-500 relative z-10 transform hover:-translate-y-1 transition-transform duration-300">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-sm shadow-inner">02</div>
                          <div>
                             <div className="text-lg font-black text-blue-700">优选经纪人</div>
                             <div className="text-xs font-bold text-blue-500 mt-0.5">效能中坚层 • 高效转化主力</div>
                          </div>
                       </div>
                       <Trophy className="w-5 h-5 text-blue-500 fill-blue-500" />
                    </div>

                    {/* Tier 3 */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-purple-50 rounded-2xl border border-purple-100 shadow-lg border-l-4 border-l-purple-500 relative z-10 transform hover:-translate-y-1 transition-transform duration-300">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black text-sm shadow-inner">03</div>
                          <div>
                             <div className="text-lg font-black text-purple-700">城市合伙人</div>
                             <div className="text-xs font-bold text-purple-500 mt-0.5">战略合伙层 • 深度绑定付费</div>
                          </div>
                       </div>
                       <Crown className="w-6 h-6 text-purple-500 fill-purple-500 animate-pulse" />
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Middle Column: Intelligent Distribution Engine */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 flex flex-col gap-4"
        >
           <div className="flex items-center gap-2 mb-1">
             <div className="p-2 bg-blue-100 rounded-xl text-blue-600 shadow-inner">
               <Network className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-black text-slate-800">AI 驱动的智能分发矩阵</h3>
           </div>
           
           <div className="bg-white rounded-3xl p-5 shadow-xl border border-white/50 backdrop-blur-sm flex-1 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300">
              
              {/* Simplified ROI Section */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg text-white mb-1 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex items-center justify-between">
                   <div>
                      <div className="text-xs font-medium opacity-80 mb-0.5">AI-Driven Matrix</div>
                      <div className="text-xl font-black tracking-tight">智能分发 ROI MAX</div>
                   </div>
                   <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Cpu className="w-4 h-4 text-white" />
                   </div>
                </div>
              </div>

              {/* Distribution Strategies */}
              <div className="space-y-3 flex-1">
                 {/* Strategy 1: Smart Matching */}
                 <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-lg hover:border-slate-300 transition-all duration-300 group">
                    <div className="flex justify-between items-center mb-1.5">
                       <span className="text-base font-black text-slate-700 group-hover:text-slate-900 transition-colors flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          智能匹配
                       </span>
                       <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">Smart Matching</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium pl-2 border-l-4 border-slate-200">
                       基于经纪人能力画像与商机属性的智能撮合策略，实现资源利用率最大化
                    </div>
                 </div>

                 {/* Strategy 2: Intent Insight */}
                 <div className="p-4 bg-blue-50/50 rounded-2xl border-2 border-blue-100 shadow-lg relative group hover:border-blue-200 transition-all duration-300">
                    <div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-sm"></div>
                    <div className="flex justify-between items-center mb-1.5">
                       <span className="text-base font-black text-blue-700 flex items-center gap-2">
                          <ScanSearch className="w-4 h-4" />
                          意图洞察
                       </span>
                       <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-md text-[10px] font-bold">Intent Insight</span>
                    </div>
                    <div className="text-xs text-blue-600 font-medium pl-2 border-l-4 border-blue-300">
                       深度解析客户实时对话与行为特征，向高转化潜力经纪人精准推荐高意向商机
                    </div>
                 </div>

                 {/* Strategy 3: Value Symbiosis */}
                 <div className="p-4 bg-purple-50/50 rounded-2xl border-2 border-purple-100 shadow-lg hover:border-purple-200 transition-all duration-300 group">
                    <div className="flex justify-between items-center mb-1.5">
                       <span className="text-base font-black text-purple-700 flex items-center gap-2">
                          <Gem className="w-4 h-4" />
                          价值竞得
                       </span>
                       <span className="px-2 py-0.5 bg-purple-100 text-purple-600 rounded-md text-[10px] font-bold">Real-time Bidding</span>
                    </div>
                    <div className="text-xs text-purple-600 font-medium pl-2 border-l-4 border-purple-300">
                       基于转化预估模型，对稀缺 S 级商机实行实时价值评估与动态竞得
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Right Column: AI Empowerment Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1 flex flex-col gap-4"
        >
           <div className="flex items-center gap-2 mb-1">
             <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600 shadow-inner">
               <Bot className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-display font-black text-slate-800">7x24h 全自动数智替身</h3>
           </div>
           
           <div className="bg-white rounded-3xl p-5 shadow-xl border border-white/50 backdrop-blur-sm flex-1 flex flex-col gap-4 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute left-[26px] top-8 bottom-8 w-0.5 bg-slate-100 -z-10"></div>
              
              {/* Stage 1: Reception */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 font-black text-base shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                   0s
                </div>
                <div className="flex-1 p-3 bg-white rounded-2xl border border-slate-100 shadow-md group-hover:shadow-lg transition-shadow">
                   <div className="text-sm font-black text-slate-700 mb-0.5">自动接待 (Reception)</div>
                   <div className="text-xs text-slate-500 font-medium">客户进线即刻响应，AI自动完成意向清洗与标签录入</div>
                </div>
              </div>

              {/* Stage 2: Marketing */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border-4 border-indigo-100 flex items-center justify-center text-indigo-600 font-black text-base shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                   Auto
                </div>
                <div className="flex-1 p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100 shadow-md group-hover:shadow-lg transition-shadow">
                   <div className="text-sm font-black text-indigo-700 mb-0.5 flex items-center gap-1.5">
                      触发式营销
                      <Sparkles className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                   </div>
                   <div className="text-xs text-indigo-600 font-medium">监测浏览行为，自动推送同户型高性价比房源卡片</div>
                </div>
              </div>

              {/* Stage 3: Activation */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 font-black text-base shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                   7d
                </div>
                <div className="flex-1 p-3 bg-white rounded-2xl border border-slate-100 shadow-md group-hover:shadow-lg transition-shadow">
                   <div className="text-sm font-black text-slate-700 mb-0.5">沉睡激活 (Activation)</div>
                   <div className="text-xs text-slate-500 font-medium">超7天未访问客户，AI自动发送降价/新上房源通知</div>
                </div>
              </div>

              {/* Stage 4: Daily Plan */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 font-black text-base shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                   8am
                </div>
                <div className="flex-1 p-3 bg-white rounded-2xl border border-slate-100 shadow-md group-hover:shadow-lg transition-shadow">
                   <div className="text-sm font-black text-slate-700 mb-0.5">作业流生成 (Daily Plan)</div>
                   <div className="text-xs text-slate-500 font-medium">每日晨报：今日必做清单、需回访客户自动列出</div>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyMatchingPage;
