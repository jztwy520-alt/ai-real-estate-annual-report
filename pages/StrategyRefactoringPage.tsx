import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Database, Filter, PlusCircle, Projector, Blocks, Zap, Terminal, ArrowRight } from 'lucide-react';

const StrategyRefactoringPage: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 mb-4 shadow-sm"
        >
          <Hammer className="w-4 h-4" />
          <span className="font-semibold text-sm">Strategy • Refactoring</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-slate-800 mb-4"
        >
          基建重构：Skills 思维下的后台进化
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-3xl"
        >
          稳定业务流程SOP + 原子化企业级SKILLS，重塑生产力
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Listing Management System */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="clay-card p-8 flex flex-col h-full"
        >
          <h3 className="text-2xl font-display font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-xl text-orange-600">
              <Database className="w-6 h-6" />
            </div>
            房源管理系统重构
          </h3>
          
          <div className="flex-1 space-y-6 flex flex-col justify-between">
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-xs font-bold text-orange-600 uppercase mb-2">现状与挑战</div>
              <p className="text-slate-700 leading-relaxed text-sm">
                当前房源数据非自建，主要依赖采集。面临数据清洗难、主数据标准不统一、多端调用困难等问题。
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Filter className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-800">数据清洗与存储</div>
                  <div className="text-xs text-slate-600 mt-1">多个包装选最优、字段切分，存储为 AI 高效利用格式。</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-800">增益数据维护</div>
                  <div className="text-xs text-slate-600 mt-1">补充行情、学区、配套等维度，丰富房源画像。</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Projector className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-800">中台化建设</div>
                  <div className="text-xs text-slate-600 mt-1">标准化接口，方便运营后台、C端、AI Agent 统一调用。</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Skills-Driven Ops */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6 h-full"
        >
          <div className="clay-card p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-display font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">
                <Blocks className="w-5 h-5" />
              </div>
              Skills 赋能高效配房
            </h3>
            
            <div className="flex-1 space-y-4">
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex-1">
                <div className="text-xs font-bold text-indigo-600 uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  AI 智能配房
                </div>
                <div className="flex items-center gap-1.5 flex-wrap mb-3">
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">需求解析</span>
                  <ArrowRight className="w-3 h-3 text-indigo-400" />
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">检索 Skill</span>
                  <ArrowRight className="w-3 h-3 text-indigo-400" />
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">推荐理由</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed pl-2 border-l-2 border-indigo-500">
                  改变“人工搜筛”模式，直接调用 <span className="text-indigo-600 font-bold">Matching Skills</span> 快速生成方案。
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-xs font-bold text-orange-600 uppercase mb-2 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  告别低效检索
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed pl-2 border-l-2 border-orange-500">
                  房源管理从“静态存储”升级为“动态服务”，让数据流动赋能全链路。
                </p>
              </div>
            </div>
          </div>

          {/* New Module: Skills 赋能 AIGC */}
          <div className="clay-card p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-display font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-600">
                <Blocks className="w-5 h-5" />
              </div>
              Skills 赋能 AIGC 生产
            </h3>
            <div className="flex-1 space-y-4">
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 flex-1">
                <div className="text-xs font-bold text-purple-600 uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  政策资讯内容自动化
                </div>
                <div className="flex items-center gap-1.5 flex-wrap mb-3">
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">采集</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">分析</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">推荐</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 bg-white rounded shadow-sm text-[10px] font-bold text-slate-600">生成</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                  <span className="px-2 py-1 bg-purple-500 text-white rounded shadow-sm text-[10px] font-bold">发布</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed pl-2 border-l-2 border-purple-500">
                  帮助业务从繁重生产中解放，成为内容生产的领航者和调优者。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyRefactoringPage;