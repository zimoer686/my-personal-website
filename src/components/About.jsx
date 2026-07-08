import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, ExternalLink } from 'lucide-react';

export default function About() {
  const info = {
    name: '李志茂',
    brand: 'MO / zimoer',
    age: 17,
    location: '河北 · 邯郸',
    phone: '19333240420',
    email: 'zimoer@mechanical.ai',
    tagline: '致力打造专属 AI Agent，让机械赋能成就未来',
    avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=zimoer&backgroundColor=0066ff&backgroundType=solid&hair=shortShort,shortCombover,shortCurly,shortRound&clothing=hoodie&clothingColor=0044cc&eyes=variant12&mouth=smile`,
    bio: `我是李志茂，一名 17 岁的机械工程师。

我相信 AI 与机械的融合将重新定义制造业的未来。从零开始自学 AutoCAD、SolidWorks、Catia 和 CNC 加工，我致力于将人工智能技术引入传统机械领域，打造真正智能的机械系统。

我的使命是用 AI Agent 赋能每一台机器、每一条产线，让中国制造迈向智能化的新高度。`,
    stats: [
      { value: '3+', label: 'CAD/CAM 工具', desc: 'AutoCAD · SW · Catia' },
      { value: '∞', label: 'AI 赋能', desc: '永不设限的探索' },
      { value: '24/7', label: '学习不停', desc: '热爱驱动的成长' },
    ],
  };

  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">关于我</h2>
        <p className="section-subtitle">从机械图纸到智能代码，用技术连接两个世界</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: 60,
        marginTop: 60,
        alignItems: 'start',
      }}>
        {/* Avatar & Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass" style={{ padding: 40, textAlign: 'center' }}>
            {/* Avatar */}
            <div style={{
              width: 200, height: 200, margin: '0 auto 24px',
              borderRadius: 20,
              background: 'var(--gradient-1)',
              padding: 4,
              boxShadow: '0 0 40px var(--primary-glow)',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--bg-card)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src={info.avatar}
                  alt="zimoer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 4 }}>{info.name}</h3>
            <div style={{
              display: 'inline-block',
              padding: '4px 16px',
              borderRadius: 100,
              background: 'var(--primary)',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: 20,
            }}>
              {info.brand}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              {[
                { icon: <MapPin size={16} />, text: info.location },
                { icon: <Calendar size={16} />, text: `${info.age} 岁` },
                { icon: <Phone size={16} />, text: info.phone },
                { icon: <Mail size={16} />, text: info.email },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: '0.9rem', color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bio & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass" style={{ padding: 40 }}>
            <div style={{
              fontSize: '1.1rem', lineHeight: 2,
              color: 'var(--text-primary)',
              whiteSpace: 'pre-line',
            }}>
              {info.bio}
            </div>
          </div>

          {/* Stats cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            marginTop: 30,
          }}>
            {info.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass"
                style={{ padding: 24, textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '2rem', fontWeight: 800,
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 4,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
