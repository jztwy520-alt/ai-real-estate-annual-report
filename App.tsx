
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
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col font-sans select-none">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
      <div className="scanline"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/10 blur-[150px] rounded-full animate-pulse [animation-delay:2s]"></div>
      
      {/* Header Navigation */}
      <header className="relative z-30 flex justify-between items-center px-10 py-4 backdrop-blur-md border-b border-white/10 transition-all duration-500">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 animate-pulse"></div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-2xl border border-white/20">
              <i className="fas fa-cube text-white text-xl"></i>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
              PropTech <span className="text-cyan-400 glow-text">INTELLIGENCE</span>
            </h1>
            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-[0.4em]">2024 Annual Strategic Report</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-1 glass-card p-1 rounded-full border border-white/5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              title={`Page ${i + 1}`}
              className={`w-8 h-1 transition-all duration-500 rounded-full ${
                currentPage === i ? 'bg-cyan-400 w-12 shadow-[0_0_15px_#22d3ee]' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-6">
           <div className="hidden md:flex flex-col items-end mr-4">
             <span className="text-[8px] text-slate-500 uppercase font-black">System Status</span>
             <span className="text-[10px] text-cyan-400 font-mono flex items-center">
               <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2 animate-ping"></span>
               OPERATIONAL
             </span>
           </div>
           <div className="flex items-center space-x-2 glass-card rounded-lg p-1">
             <button onClick={handlePrev} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
               <i className="fas fa-arrow-left text-sm"></i>
             </button>
             <div className="px-3 text-lg font-black font-mono text-white min-w-[60px] text-center">
               {String(currentPage + 1).padStart(2, '0')} <span className="text-slate-600 mx-1">/</span> {String(totalPages).padStart(2, '0')}
             </div>
             <button onClick={handleNext} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
               <i className="fas fa-arrow-right text-sm"></i>
             </button>
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main 
        ref={containerRef}
        className="relative flex-1 z-10 flex flex-col items-center py-8 px-6 md:px-20 overflow-y-auto overflow-x-hidden custom-scrollbar"
      >
        <div className="w-full max-w-7xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out my-auto">
          {pages[currentPage]}
        </div>
      </main>

      {/* Footer AI HUD */}
      <footer className="relative z-30 px-10 py-4 glass-card border-t border-white/10 flex flex-col md:flex-row items-center justify-between transition-all duration-500">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
               <i className="fas fa-microchip text-cyan-400 text-[10px]"></i>
               <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">AI Strategic Insight Engine</span>
            </div>
            <div className="h-8 flex items-center min-w-[300px]">
              {loadingInsight ? (
                <div className="flex space-x-2">
                  <div className="w-1 h-3 bg-cyan-500/50 rounded-sm animate-[bounce_1s_infinite]"></div>
                  <div className="w-1 h-3 bg-cyan-500/50 rounded-sm animate-[bounce_1s_infinite_0.1s]"></div>
                  <div className="w-1 h-3 bg-cyan-500/50 rounded-sm animate-[bounce_1s_infinite_0.2s]"></div>
                </div>
              ) : (
                <p className="text-xs text-slate-200 font-medium tracking-wide italic border-l-2 border-cyan-500 pl-4 py-1">
                  {aiInsight}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end mt-4 md:mt-0">
          <div className="text-[8px] text-slate-500 uppercase tracking-[0.3em] font-bold mb-1">Platform Architecture v2.4.0</div>
          <div className="flex space-x-4">
             <div className="text-[8px] text-slate-400"><i className="fas fa-shield-halved mr-1 text-purple-400"></i> SECURE</div>
             <div className="text-[8px] text-slate-400"><i className="fas fa-bolt mr-1 text-orange-400"></i> OPTIMIZED</div>
             <div className="text-[8px] text-slate-400"><i className="fas fa-network-wired mr-1 text-cyan-400"></i> CONNECTED</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
