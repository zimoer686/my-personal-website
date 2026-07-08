import { motion } from 'framer-motion';
import { Cpu, Code2, Wrench, Brain, Cog, Gauge } from 'lucide-react';

const skills = [
  {
    icon: <Cog size={28} />,
    title: 'AutoCAD',
    desc: '二维机械制图与设计，精准出图，标准化图纸管理',
    level: 92,
    tags: ['机械制图', '零件图', '装配图'],
  },
  {
    icon: <Wrench size={28} />,
    title: 'SolidWorks',
    desc: '三维参数化建模、装配体设计与工程图生成',
    level: 88,
    tags: ['三维建模', '装配体', '钣金设计'],
  },
  {
    icon: <Cpu size={28} />,
    title: 'CATIA',
    desc: '高级曲面设计与复杂机械系统三维建模',
    level: 85,
    tags: ['曲面设计', 'DMU', '逆向工程'],
  },
  {
    icon: <Gauge size={28} />,
    title: 'CNC 加工',
    desc: '数控编程与加工工艺，从代码到实物的全流程',
    level: 80,
    tags: ['G代码', '工艺规划', '刀具路径'],
  },
  {
    icon: <Brain size={28} />,
    title: 'AI Agent',
    desc: '打造专属 AI Agent，赋能机械行业智能化升级',
    level: 75,
    tags: ['LLM', 'Agent', '自动化'],
  },
  {
    icon: <Code2 size={28} />,
    title: 'Python / 编程',
    desc: '用于机械自动化脚本、数据处理与 AI 模型集成',
    level: 70,
    tags: ['自动化脚本', '数据处理', 'API'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">个人优势</h2>
        <p className="section-subtitle">机械工程的硬核技能 × AI 时代的创新思维</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        marginTop: 60,
      }}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass"
            style={{ padding: 32, position: 'relative', overflow: 'hidden' }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'var(--gradient-1)',
            }} />

            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'var(--gradient-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', marginBottom: 20,
              opacity: 0.9,
            }}>
              {skill.icon}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>
              {skill.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
              {skill.desc}
            </p>

            {/* Progress bar */}
            <div style={{ marginBottom: 16 }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: '0.8rem', marginBottom: 6,
              }}>
                <span style={{ color: 'var(--text-muted)' }}>熟练度</span>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{skill.level}%</span>
              </div>
              <div style={{
                height: 4, borderRadius: 2,
                background: 'var(--code-bg)',
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + 0.1 * i, ease: 'easeOut' }}
                  style={{
                    height: '100%', borderRadius: 2,
                    background: 'var(--gradient-1)',
                  }}
                />
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {skill.tags.map((tag, j) => (
                <span key={j} style={{
                  padding: '2px 10px',
                  borderRadius: 6,
                  background: 'var(--code-bg)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
