import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Star, Magnet, Sprout, Handshake, Blocks, ChevronDown } from 'lucide-react';

const StrategyOverviewPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 mb-4 shadow-sm"
        >
          <Compass className="w-4 h-4" />
          <span className="font-semibold text-sm">Strategy • Overview</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-slate-800 mb-4"
        >
          2026 规划：AI 驱动的私域闭环与企业级SKILLS建设
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-3xl"
        >
          从“流量思维”转向“全生命周期 ROI 经营”
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: North Star Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
           <div className="clay-card p-8 flex flex-col h-full">
              <h3 className="text-2xl font-display font-bold text-slate-800 mb-8 flex items-center gap-3">
                 <div className="p-2 bg-cyan-100 rounded-xl text-cyan-600">
                   <Star className="w-6 h-6" />
                 </div>
                 核心经营维度
              </h3>
              <div className="space-y-10 flex-1 flex flex-col justify-center">
                 <div className="space-y-3">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">获客成本 (CAC)</span>
                       <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-lg">Cost Optimization</span>
                    </div>
                    <div className="text-lg font-bold text-slate-700">持续降低私域流量获取成本</div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[70%] rounded-full shadow-sm"></div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">撮合效率 (Efficiency)</span>
                       <span className="text-cyan-600 text-xs font-bold bg-cyan-100 px-2 py-1 rounded-lg">Smart Matching</span>
                    </div>
                    <div className="text-lg font-bold text-slate-700">提升人客匹配精准度与速度</div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 w-[60%] rounded-full shadow-sm"></div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex justify-between items-end">
                       <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">投入产出比 (ROI)</span>
                       <span className="text-purple-600 text-xs font-bold bg-purple-100 px-2 py-1 rounded-lg">Value Maximization</span>
                    </div>
                    <div className="text-lg font-bold text-slate-700">最大化平台与小B整体收益</div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-[85%] rounded-full shadow-sm"></div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Right Column: Strategic Loop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 clay-card p-8 flex flex-col"
        >
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display font-bold text-slate-800">全链路业务闭环</h3>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500">AI Native</span>
                 <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500">Event Driven</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Magnet className="w-24 h-24 text-cyan-600" />
                 </div>
                 <div className="text-xs font-bold text-cyan-600 uppercase mb-3 tracking-wider bg-cyan-50 inline-block px-2 py-1 rounded">Acquisition</div>
                 <h4 className="text-xl font-bold text-slate-800 mb-2">公域投流获客</h4>
                 <p className="text-sm text-slate-600 leading-relaxed">
                    素材自动化生产，精准投流，引导用户添加企微账号，构建私域流量池。
                 </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sprout className="w-24 h-24 text-purple-600" />
                 </div>
                 <div className="text-xs font-bold text-purple-600 uppercase mb-3 tracking-wider bg-purple-50 inline-block px-2 py-1 rounded">Nurturing</div>
                 <h4 className="text-xl font-bold text-slate-800 mb-2">自动化培育 (1人1策)</h4>
                 <p className="text-sm text-slate-600 leading-relaxed">
                    基于全生命周期监控与事件驱动，利用 AI 生成个性化内容进行触达激活。
                 </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Handshake className="w-24 h-24 text-emerald-600" />
                 </div>
                 <div className="text-xs font-bold text-emerald-600 uppercase mb-3 tracking-wider bg-emerald-50 inline-block px-2 py-1 rounded">Matching</div>
                 <h4 className="text-xl font-bold text-slate-800 mb-2">ROI 驱动撮合</h4>
                 <p className="text-sm text-slate-600 leading-relaxed">
                    小B动态评价体系，智能分发线索，最大化撮合成功率与平台收益。
                 </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Blocks className="w-24 h-24 text-indigo-600" />
                 </div>
                 <div className="text-xs font-bold text-indigo-600 uppercase mb-3 tracking-wider bg-indigo-50 inline-block px-2 py-1 rounded">Infrastructure</div>
                 <h4 className="text-xl font-bold text-slate-800 mb-2">业务SOP+SKILLS</h4>
                 <p className="text-sm text-slate-600 leading-relaxed">
                    梳理业务流程 + 拆分建设企业级Skills技能，实现的高效运营与快速迭代。
                 </p>
              </div>
           </div>
        </motion.div>
      </div>
      
      {/* Footer Navigation Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center space-x-2 text-slate-400 text-sm animate-bounce"
      >
         <span>Scroll Down for Details</span>
         <ChevronDown className="w-4 h-4" />
      </motion.div>
    </div>
  );
};

export default StrategyOverviewPage;