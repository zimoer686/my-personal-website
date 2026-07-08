import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, Send } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 60px',
      overflow: 'hidden',
    }}>
      {/* Tech grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(var(--border-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.15,
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', width: 700, height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1700,
        width: '100%',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            联系�?          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            有项目合作或技术交流的想法？随时联系我
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div style={{
          display: 'flex', gap: 24,
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: 60,
        }}>
          {[
            { icon: <Phone size={24} />, label: '电话', value: '19333240420', href: 'tel:19333240420' },
            { icon: <Mail size={24} />, label: '邮箱', value: 'zimoer@mechanical.ai', href: 'mailto:zimoer@mechanical.ai' },
            { icon: <MapPin size={24} />, label: '地址', value: '河北 · 邯郸', href: null },
            { icon: <GithubIcon size={24} />, label: 'GitHub', value: 'zimoer686', href: 'https://github.com/zimoer686' },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href || '#'}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass"
              style={{
                padding: '32px 40px',
                minWidth: 200,
                textDecoration: 'none',
                color: 'var(--text-primary)',
                cursor: item.href ? 'pointer' : 'default',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'var(--gradient-1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', opacity: 0.9,
              }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.label}</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>{item.value}</div>
            </motion.a>
          ))}
        </div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass"
          style={{
            maxWidth: 600,
            margin: '0 auto',
            padding: 40,
          }}
        >
          <div style={{
            fontSize: '1.2rem', fontWeight: 600, marginBottom: 12,
          }}>
            一起探�?AI + 机械的无限可�?🚀
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            无论你是�?AI 赋能机械感兴趣，还是有项目需要合作，
            <br />
            都欢迎随时联系我。让我们一起用技术改变世界�?          </div>

          <motion.a
            href="mailto:zimoer@mechanical.ai"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 24,
              padding: '14px 36px',
              borderRadius: 12,
              background: 'var(--gradient-1)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem', fontWeight: 600,
              boxShadow: '0 4px 20px var(--primary-glow)',
            }}
          >
            发送邮�?<Send size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center', marginTop: 80,
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 16 }}>
          <a href="https://github.com/zimoer686" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}>
            <GithubIcon size={18} />
          </a>
        </div>
        <p>© 2026 MO / zimoer. Built with AI · Engineered with passion</p>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed', bottom: 32, right: 32,
            width: 48, height: 48, borderRadius: 14,
            background: 'var(--gradient-1)',
            border: 'none',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px var(--primary-glow)',
            zIndex: 100,
          }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
