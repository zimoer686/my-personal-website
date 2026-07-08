import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Animated tech grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(var(--border-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.3,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }} />

      {/* Glow effects */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)',
        top: '10%', left: '10%',
        filter: 'blur(60px)',
        animation: 'pulse 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
        bottom: '10%', right: '10%',
        filter: 'blur(60px)',
        animation: 'pulse 4s ease-in-out infinite 2s',
      }} />

      <div style={{
        maxWidth: 1700,
        margin: '0 auto',
        padding: '0 60px',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px',
            borderRadius: 100,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: 32,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', display: 'inline-block' }} />
          机械工程师 · AI 赋能
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-2px',
          }}
        >
          致力打造专属{' '}
          <span style={{
            background: 'var(--gradient-1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            AI Agent
          </span>
          <br />
          让机械赋能成就未来
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: 700,
            lineHeight: 1.8,
            marginBottom: 48,
          }}
        >
          MO · 李志茂 — 17 岁机械工程师，精通 AutoCAD、SolidWorks、Catia、CNC
          <br />
          用 AI 重新定义机械制造的可能性
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
            style={{
              padding: '16px 36px',
              borderRadius: 12,
              background: 'var(--gradient-1)',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 20px var(--primary-glow)',
              cursor: 'pointer',
            }}
          >
            查看项目
            <ExternalLink size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            style={{
              padding: '16px 36px',
              borderRadius: 12,
              background: 'transparent',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            联系我
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: 'flex', gap: 48,
            marginTop: 80,
            flexWrap: 'wrap', justifyContent: 'center',
          }}
        >
          {[
            { num: '3+', label: 'CAD 工具精通' },
            { num: '17', label: '年龄 · 无限可能' },
            { num: '∞', label: 'AI 赋能潜力' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem', fontWeight: 800,
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo('about')}
        style={{
          position: 'absolute', bottom: 40,
          left: '50%', transform: 'translateX(-50%)',
          color: 'var(--text-muted)', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontSize: '0.8rem' }}>向下滚动</span>
        <ArrowDown size={20} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
