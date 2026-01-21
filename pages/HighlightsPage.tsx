
import React from 'react';

const HighlightItem = ({ icon, title, tags, description, color }: any) => (
  <div className={`p-6 rounded-2xl border border-white/5 bg-slate-900/40 relative overflow-hidden group hover:bg-slate-800/60 transition-colors h-full flex flex-col`}>
    <div className={`absolute top-0 left-0 w-full h-1.5 bg-${color}-500`}></div>
    <div className="flex items-center justify-between mb-5">
      <div className={`w-14 h-14 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-400 group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3 mb-5">
      {tags.map((tag: string, i: number) => (
        <span key={i} className={`px-2.5 py-1 rounded-md bg-${color}-500/10 border border-${color}-500/20 text-xs font-bold text-${color}-400 uppercase shadow-[0_0_10px_rgba(0,0,0,0.2)]`}>
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm text-slate-300 leading-relaxed mt-auto font-medium">{description}</p>
  </div>
);

const HighlightsPage: React.FC = () => {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
          <i className="fas fa-star text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">年度 AI 核心亮点</h2>
          <p className="text-base text-slate-400">Key Achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
        <HighlightItem 
          icon="fa-database" 
          title="数据基建与治理" 
          tags={['语料清洗', '无效过滤', '板块主数据']}
          description="清洗 IM 高频卡片与无效会话，增强元数据（新鲜度/角色）；构建 AI House 区属板块主数据，确保全链路数据一致性。"
          color="orange"
        />
        <HighlightItem 
          icon="fa-pen-nib" 
          title="房源包装升级" 
          tags={['10-20s 生成', 'CTR +30%', '一键描述']}
          description="AI一键生成房源标题描述，10-20秒极速产出，点击转化率提升30%。"
          color="blue"
        />
        <HighlightItem 
          icon="fa-robot" 
          title="内容生产自动化" 
          tags={['11000+ 篇测评', '全流程自动化', '0人工成本']}
          description="AI小区测评生成全站 11000+ 篇优质内容，彻底改变人工编辑模式，实现内容生产的工业化转型。"
          color="cyan"
        />
        <HighlightItem 
          icon="fa-comments" 
          title="IM回复质变" 
          tags={['回复率 55%→85%', '付费服务全开', 'AI直接留资']}
          description="经纪人IM助手上线，实现全天候无缝服务，付费账号无一主动关闭，AI 对话直接引导客户留资。"
          color="purple"
        />
      </div>
    </div>
  );
};

export default HighlightsPage;
