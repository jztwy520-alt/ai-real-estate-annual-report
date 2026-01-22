
import React, { useState } from 'react';
import { getAssetPath } from '../utils';

const ProjectListingGenPage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shadow-inner">
          <i className="fas fa-pen-nib text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-black text-indigo-900 drop-shadow-sm">AI 应用场景 I：房源包装自动化</h2>
          <p className="text-base text-slate-500 font-bold">一键生成高质量标题描述，CTR 提升引擎</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
        <div className="space-y-6 flex flex-col">
           <div className="clay-card p-6 flex flex-col">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                 <i className="fas fa-gem"></i>
               </div>
               <h3 className="text-xl font-display font-bold text-slate-800">核心价值</h3>
             </div>
             <p className="text-base text-slate-600 leading-relaxed font-medium">
               辅助个人房东与经纪人快速生成高质量房源内容，降低发布门槛，解决手动编辑耗时、内容同质化严重的问题。
             </p>
           </div>

           <div className="clay-card p-6 flex-1 flex flex-col">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                 <i className="fas fa-chart-bar"></i>
               </div>
               <h3 className="text-xl font-display font-bold text-slate-800">关键指标</h3>
             </div>
             <div className="grid grid-cols-2 gap-5 flex-1">
               <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 text-center flex flex-col justify-center shadow-sm">
                  <div className="text-4xl font-black text-blue-500 mb-2 drop-shadow-sm">+30%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">曝光点击率 (CTR)</div>
               </div>
               <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 text-center flex flex-col justify-center shadow-sm">
                  <div className="text-4xl font-black text-indigo-500 mb-2 drop-shadow-sm">85-90%</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">功能使用率</div>
               </div>
               <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-center flex flex-col justify-center shadow-sm">
                  <div className="text-3xl font-black text-slate-700 mb-2">10-20s</div>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">生成耗时</div>
               </div>
               <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100 text-center flex flex-col justify-center shadow-sm">
                  <div className="text-3xl font-black text-emerald-500 mb-2">Top 1</div>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">优于竞品体验</div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col">
           <div className="clay-card p-5 bg-white border border-slate-100 flex-1 hover:bg-slate-50 transition-colors flex flex-col">
             <h3 className="text-base font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
               <i className="fas fa-layer-group mr-3 text-yellow-500"></i> 设计亮点
             </h3>
             
             <div className="space-y-5 flex-1">
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3 text-xs font-black flex-shrink-0 shadow-sm">1</div>
                   <div>
                      <div className="text-sm font-bold text-slate-800 mb-0.5">低门槛交互 & 思路外显</div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">“先生成，再微调”，并在界面展示内容生成的设计思路（Chain of Thought），增强用户信任感。</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3 text-xs font-black flex-shrink-0 shadow-sm">2</div>
                   <div>
                      <div className="text-sm font-bold text-slate-800 mb-0.5">上下文引入平台数据</div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">自动注入平台沉淀的<span className="text-blue-600 font-bold">市场行情、成交数据</span>，让生成内容言之有物，拒绝空洞。</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 mr-3 text-xs font-black flex-shrink-0 shadow-sm">3</div>
                   <div>
                      <div className="text-sm font-bold text-slate-800 mb-0.5">高价值源联网搜索</div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">指定<span className="text-blue-600 font-bold">贝壳、安居客</span>等高价值数据源进行联网检索，补全房源亮点信息。</p>
                   </div>
                </div>
             </div>

             <button 
                onClick={() => setShowVideoModal(true)}
                className="w-full mt-6 py-2.5 rounded-xl bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 text-yellow-600 font-bold flex items-center justify-center transition-all group shadow-sm"
              >
                <i className="fas fa-play-circle mr-2 group-hover:scale-110 transition-transform text-lg text-yellow-500"></i>
                观看功能演示
              </button>
          </div>
          
          <div className="p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50">
             <div className="text-sm text-slate-400 uppercase font-black mb-2 tracking-wider">Future Planning</div>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <i className="fas fa-arrow-right text-slate-400 mt-1 mr-2 text-xs"></i>
                   <div>
                      <span className="text-sm text-slate-700 font-bold">多渠道内容适配:</span>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">一键生成适配微信社群、朋友圈、小红书等不同渠道风格的文案。</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <i className="fas fa-arrow-right text-slate-400 mt-1 mr-2 text-xs"></i>
                   <div>
                      <span className="text-sm text-slate-700 font-bold">运营推荐与热点结合:</span>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">运营调用能力结合实时热点，快速生产热门房源合集分发私域。</p>
                   </div>
                </li>
             </ul>
          </div>
        </div>
      </div>

      {/* Video Modal - Clay Style */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border-4 border-white shadow-2xl group" onClick={e => e.stopPropagation()}>
            {/* Back Button */}
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 left-6 z-[60] px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 border border-white/20 text-white text-sm backdrop-blur-md transition-colors flex items-center opacity-0 group-hover:opacity-100 duration-300 font-bold shadow-lg"
            >
              <i className="fas fa-arrow-left mr-2"></i> 返回
            </button>

            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 z-[60] w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors border border-white/20 opacity-0 group-hover:opacity-100 duration-300 shadow-lg"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="w-full h-full flex items-center justify-center bg-slate-900">
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
