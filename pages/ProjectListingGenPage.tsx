
import React, { useState } from 'react';

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
           <div className="glass-card p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 flex-1 hover:bg-slate-800/60 transition-colors">
              <h3 className="text-base font-bold text-slate-200 uppercase tracking-widest mb-6 flex items-center">
                <i className="fas fa-medal mr-3 text-yellow-400"></i> 竞争优势与思考
              </h3>
              
              <div className="space-y-6">
                 <div className="flex items-start">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 mr-4 text-sm font-bold flex-shrink-0">1</div>
                    <div>
                       <div className="text-base font-bold text-white mb-1">预置提示词与多维数据</div>
                       <p className="text-base text-slate-400 leading-relaxed">相比竞品，预置了更丰富的提示词模板，并自动聚合平台房源数据，内容角度更多样化。</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 mr-4 text-sm font-bold flex-shrink-0">2</div>
                    <div>
                       <div className="text-base font-bold text-white mb-1">设计思路透明化</div>
                       <p className="text-base text-slate-400 leading-relaxed">展示内容生成的设计思路，强化用户对 AI 生成内容的认可度与信任感。</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 mr-4 text-sm font-bold flex-shrink-0">3</div>
                    <div>
                       <div className="text-base font-bold text-white mb-1">低门槛交互</div>
                       <p className="text-base text-slate-400 leading-relaxed">结合已填信息“先生成，再微调”，无需用户反复输入，经纪人反馈极其便利。</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="p-5 rounded-xl border border-dashed border-white/20 bg-white/5">
              <div className="text-sm text-slate-500 uppercase font-bold mb-2 tracking-wider">Future Iteration</div>
              <p className="text-base text-slate-300 leading-relaxed">
                后续将结合插件发房场景迭代 AIGC 功能，并尝试结合经纪人个人偏好（如话术风格）进行个性化生成。
              </p>
              
              <button 
                onClick={() => setShowVideoModal(true)}
                className="w-full mt-4 py-2.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 font-bold flex items-center justify-center transition-all group"
              >
                <i className="fas fa-play-circle mr-2 group-hover:scale-110 transition-transform text-lg"></i>
                观看功能演示 (Watch Demo)
              </button>
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
                src="/videos/listing_gen_demo.mp4"
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
