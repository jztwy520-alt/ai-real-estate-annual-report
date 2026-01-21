
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ProjectListingGenPage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
          <i className="fas fa-pen-nib text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">AI 应用场景 I：房源包装自动化</h2>
          <p className="text-base text-slate-400">一键生成高质量标题描述，CTR 提升引擎</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col">
           <div className="glass-card p-5 rounded-2xl border-l-4 border-blue-500 hover:bg-slate-800/60 transition-colors">
             <h3 className="text-xl font-bold text-white mb-4">核心价值 (Core Value)</h3>
             <p className="text-base text-slate-300 leading-relaxed">
               辅助个人房东与经纪人快速生成高质量房源内容，降低发布门槛，解决手动编辑耗时、内容同质化严重的问题。
             </p>
           </div>

           <div className="glass-card p-5 rounded-2xl flex-1 hover:bg-slate-800/60 transition-colors">
             <h3 className="text-xl font-bold text-white mb-6">关键指标 (Key Metrics)</h3>
             <div className="grid grid-cols-2 gap-5 h-full max-h-[300px]">
               <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center flex flex-col justify-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">+30%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">曝光点击率 (CTR)</div>
               </div>
               <div className="p-5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center flex flex-col justify-center">
                  <div className="text-4xl font-black text-white mb-2">85-90%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">功能使用率</div>
               </div>
               <div className="p-5 bg-white/5 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <div className="text-3xl font-bold text-slate-300 mb-2">10-20s</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">生成耗时</div>
               </div>
               <div className="p-5 bg-white/5 rounded-xl border border-white/10 text-center flex flex-col justify-center">
                  <div className="text-3xl font-bold text-slate-300 mb-2">Top 1</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">优于竞品体验</div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col">
           <div className="glass-card p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 flex-1 hover:bg-slate-800/60 transition-colors flex flex-col">
             <h3 className="text-base font-bold text-slate-200 uppercase tracking-widest mb-6 flex items-center">
               <i className="fas fa-layer-group mr-3 text-yellow-400"></i> 设计亮点 (Design Highlights)
             </h3>
             
             <div className="space-y-5 flex-1">
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 mr-3 text-xs font-bold flex-shrink-0">1</div>
                   <div>
                      <div className="text-sm font-bold text-white mb-0.5">低门槛交互 & 思路外显</div>
                      <p className="text-xs text-slate-400 leading-relaxed">“先生成，再微调”，并在界面展示内容生成的设计思路（Chain of Thought），增强用户信任感。</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 mr-3 text-xs font-bold flex-shrink-0">2</div>
                   <div>
                      <div className="text-sm font-bold text-white mb-0.5">上下文引入平台数据</div>
                      <p className="text-xs text-slate-400 leading-relaxed">自动注入平台沉淀的<span className="text-blue-400">市场行情、成交数据</span>，让生成内容言之有物，拒绝空洞。</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 mr-3 text-xs font-bold flex-shrink-0">3</div>
                   <div>
                      <div className="text-sm font-bold text-white mb-0.5">高价值源联网搜索</div>
                      <p className="text-xs text-slate-400 leading-relaxed">指定<span className="text-blue-400">贝壳、安居客</span>等高价值数据源进行联网检索，补全房源亮点信息。</p>
                   </div>
                </div>
             </div>

             <button 
                onClick={() => setShowVideoModal(true)}
                className="w-full mt-6 py-2.5 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-bold flex items-center justify-center transition-all group"
              >
                <i className="fas fa-play-circle mr-2 group-hover:scale-110 transition-transform text-lg"></i>
                观看功能演示 (Watch Demo)
              </button>
          </div>
          
          <div className="p-5 rounded-xl border border-dashed border-white/20 bg-white/5">
             <div className="text-sm text-slate-500 uppercase font-bold mb-2 tracking-wider">Future Planning</div>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <i className="fas fa-arrow-right text-slate-500 mt-1 mr-2 text-xs"></i>
                   <div>
                      <span className="text-sm text-slate-200 font-bold">多渠道内容适配:</span>
                      <p className="text-xs text-slate-400 mt-0.5">一键生成适配微信社群、朋友圈、小红书等不同渠道风格的文案。</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <i className="fas fa-arrow-right text-slate-500 mt-1 mr-2 text-xs"></i>
                   <div>
                      <span className="text-sm text-slate-200 font-bold">运营推荐与热点结合:</span>
                      <p className="text-xs text-slate-400 mt-0.5">运营调用能力结合实时热点，快速生产热门房源合集分发私域。</p>
                   </div>
                </li>
             </ul>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl group" onClick={e => e.stopPropagation()}>
            {/* Back Button */}
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 left-4 z-[60] px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 text-white text-sm backdrop-blur-md transition-colors flex items-center opacity-0 group-hover:opacity-100 duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回 (Back)
            </button>

            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20 opacity-0 group-hover:opacity-100 duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="w-full h-full flex items-center justify-center">
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
                src={getAssetPath('/videos/listing_gen_demo.mp4')}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectListingGenPage;
