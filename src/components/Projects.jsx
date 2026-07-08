import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'AI 赋能机械臂',
    subtitle: '智能控制 · 深度学习',
    desc: '基于深度学习的机械臂智能控制系统，实现视觉识别、自主抓取与路径规划，将 AI 能力注入传统工业机械臂。',
    status: '开发中',
    tags: ['Python', 'TensorFlow', 'ROS', 'SolidWorks'],
    color: '#0066ff',
    image: null,
    gradient: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
  },
  {
    title: '智能 CNC 监控系统',
    subtitle: '工业物联网 · 实时监测',
    desc: '实时采集 CNC 加工数据，通过 AI 模型预测刀具磨损与加工质量，实现预测性维护，减少停机时间。',
    status: '规划中',
    tags: ['IoT', 'ML', 'CNC', 'Catia'],
    color: '#00d4ff',
    image: null,
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
  },
  {
    title: '机械设计自动化平台',
    subtitle: '参数化设计 · AI 生成',
    desc: '利用 AI Agent 自动生成机械零件三维模型，输入参数即可输出多版本设计方案，大幅缩短设计周期。',
    status: '构思中',
    tags: ['AutoCAD', 'SolidWorks', 'AI', 'API'],
    color: '#3399ff',
    image: null,
    gradient: 'linear-gradient(135deg, #3399ff 0%, #0066ff 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">精选项目</h2>
        <p className="section-subtitle">用 AI 重新定义机械工程的边界，每个项目都是未来的种子</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 30,
        marginTop: 60,
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            whileHover={{ y: -8 }}
            className="glass"
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{
              height: 240,
              background: project.gradient,
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `
                  radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
              }} />
              <div style={{
                fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.15)',
                letterSpacing: 4, position: 'relative', zIndex: 1,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{
                position: 'absolute', top: 16, right: 16,
                padding: '4px 14px',
                borderRadius: 100,
                background: 'var(--bg-card)',
                fontSize: '0.75rem', fontWeight: 600,
                color: project.color,
              }}>
                {project.status}
              </div>
            </div>

            <div style={{ padding: 28 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 8 }}>
                {project.subtitle}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={{
                    padding: '4px 12px', borderRadius: 6,
                    background: 'var(--code-bg)', fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 20, opacity: 0, pointerEvents: 'none',
              }}
            >
              <div style={{
                color: '#fff', display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.95rem', fontWeight: 600,
              }}>
                <ExternalLink size={18} /> 查看详情
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ textAlign: 'center', marginTop: 48 }}
      >
        <a
          href="https://github.com/zimoer686"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
          }}
        >
          <GithubIcon size={18} /> 查看 GitHub 主页
        </a>
      </motion.div>
    </section>
  );
}
