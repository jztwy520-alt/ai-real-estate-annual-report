
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import CoverPage from './pages/CoverPage';
import MetricsPage from './pages/MetricsPage';
import FunnelPage from './pages/FunnelPage';
import HighlightsPage from './pages/HighlightsPage';
import ProjectIMPage from './pages/ProjectIMPage';
import ProjectUserPersonaPage from './pages/ProjectUserPersonaPage';
import ProjectSmartReplyPage from './pages/ProjectSmartReplyPage';
import ProjectListingGenPage from './pages/ProjectListingGenPage';
import ProjectCommunityGenPage from './pages/ProjectCommunityGenPage';
import ProjectToolboxPage from './pages/ProjectToolboxPage';
import ProjectAgentSkillsPage from './pages/ProjectAgentSkillsPage';
import ProjectAIOpsPage from './pages/ProjectAIOpsPage';
import RiskControlPage from './pages/RiskControlPage';
import ProjectPersonalGrowthPage from './pages/ProjectPersonalGrowthPage';
import StrategyOverviewPage from './pages/StrategyOverviewPage';
import StrategyNurturingPage from './pages/StrategyNurturingPage';
import StrategyMatchingPage from './pages/StrategyMatchingPage';
import StrategyRefactoringPage from './pages/StrategyRefactoringPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [aiInsight, setAiInsight] = useState<string>("正在同步 AI 战略洞察...");
  const [loadingInsight, setLoadingInsight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = 18;

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const pages = [
    <CoverPage key="0" />,
    <MetricsPage key="1" />,
    <FunnelPage key="2" />,
    <HighlightsPage key="3" />,
    <ProjectIMPage key="4" />,
    <ProjectUserPersonaPage key="5" />,
    <ProjectListingGenPage key="6" />,
    <ProjectCommunityGenPage key="7" />,
    <ProjectSmartReplyPage key="8" />,
    <ProjectToolboxPage key="9" />,
    <RiskControlPage key="10" />,
    <ProjectAgentSkillsPage key="11" />,
    <ProjectAIOpsPage key="12" />,
    <ProjectPersonalGrowthPage key="13" />,
    <StrategyOverviewPage key="14" />,
    <StrategyNurturingPage key="15" />,
    <StrategyMatchingPage key="16" />,
    <StrategyRefactoringPage key="17" />,
  ];

  const fetchAIInsight = async (pageIndex: number) => {
    setLoadingInsight(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Constructing a more specific prompt for high-level summary
      const pageNames = [
        "年度总结封面", "年度需求概览", "非AI业务亮点", "年度 AI 核心亮点", 
        "数据与房源基建", "数据基建-用户画像", "AI应用场景-房源包装", "AI应用场景-小区测评", "AI应用场景-IM智能回复", "AI Design Coding", 
        "行业调研与技术探索", "AI工程化-Agent Skills", "AI质量工程与持续迭代", "AI个人成长与提效", 
        "2026 战略蓝图-总览", "战略-自动化培育", "战略-智能撮合", "战略-基建重构"
      ];
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一名顶级房产科技战略分析师。当前年度总结页面是：${pageNames[pageIndex]}。
        请针对该板块内容提供一条深刻的执行层洞察。
        要求：极简（15字以内），富有前瞻性，语气专业。
        输出：仅输出中文内容，不要任何标点符号。`,
      });
      setAiInsight(response.text?.trim() || "AI 驱动效率与转化的双轮增长");
    } catch (error) {
      console.error("AI Insight error:", error);
      setAiInsight("AI 正在重塑房产交易新生态");
    } finally {
      setLoadingInsight(false);
    }
  };

  useEffect(() => {
    fetchAIInsight(currentPage);
    // Scroll to top when page changes
    if (containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col font-sans select-none text-slate-800 bg-slate-50/50">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply animate-blob"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-200/40 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>

      {/* Header Navigation - Clay Style */}
      <header className="relative z-50 flex justify-between items-center px-8 py-3">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white transform hover:rotate-12 transition-transform duration-300">
            <i className="fas fa-cube text-lg"></i>
          </div>
          <div>
            <div className="text-xl font-black text-slate-800 tracking-tight leading-none">AI Real Estate</div>
            <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-0.5">2025 Annual Report</div>
          </div>
        </div>
        
        {/* Page Indicators */}
        <div className="hidden lg:flex items-center gap-1 p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              title={`Page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === i ? 'bg-indigo-500 w-8' : 'bg-slate-300 w-2 hover:bg-indigo-300'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">

             
             {/* Navigation Buttons */}
             <div className="flex items-center gap-2">
               <button onClick={handlePrev} className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                 <i className="fas fa-chevron-left"></i>
               </button>
               <div className="px-4 font-black font-mono text-slate-400 text-lg">
                 <span className="text-indigo-600">{String(currentPage + 1).padStart(2, '0')}</span>
                 <span className="mx-1 text-slate-300">/</span>
                 {String(totalPages).padStart(2, '0')}
               </div>
               <button onClick={handleNext} className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                 <i className="fas fa-chevron-right"></i>
               </button>
             </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main 
        ref={containerRef}
        className="relative flex-1 z-10 flex flex-col items-center py-4 px-6 md:px-12 overflow-y-auto overflow-x-hidden custom-scrollbar"
      >
        <div className="w-full max-w-7xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out my-auto pb-8">
          {pages[currentPage]}
        </div>
      </main>

      {/* Footer AI HUD - Clay Style */}
      <footer className="relative z-30 px-8 py-4 bg-white/60 backdrop-blur-md border-t border-white/50 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
               <span className="text-[10px] text-indigo-600 uppercase font-black tracking-widest">AI Strategic Insight Engine</span>
            </div>
            <div className="h-6 flex items-center min-w-[300px]">
              {loadingInsight ? (
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                </div>
              ) : (
                <p className="text-sm text-slate-700 font-bold tracking-wide italic border-l-2 border-indigo-500 pl-3">
                  {aiInsight}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end mt-4 md:mt-0 opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-bold mb-1">Platform Architecture v2.4.0</div>
          <div className="flex space-x-4">
             <div className="text-[9px] text-slate-500 font-semibold"><i className="fas fa-shield-alt mr-1 text-green-500"></i> SECURE</div>
             <div className="text-[9px] text-slate-500 font-semibold"><i className="fas fa-bolt mr-1 text-yellow-500"></i> FAST</div>
             <div className="text-[9px] text-slate-500 font-semibold"><i className="fas fa-circle-nodes mr-1 text-blue-500"></i> CONNECTED</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
