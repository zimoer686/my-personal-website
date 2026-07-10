import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import ShinyText from './ShinyText';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../context/translations';

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" style={{
      padding: '140px 24px', maxWidth: 1200, margin: '0 auto',
      borderTop: '1px solid #1a1a1a',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <p style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#555', marginBottom: 16 }}><ShinyText text={t.contact.label[lang]} speed={5} /></p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 600,
          letterSpacing: '-2px', color: '#fff', marginBottom: 24,
        }}>
          {t.contact.heading[lang]}
        </h2>

        {/* Big CTA text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
            fontWeight: 600, color: '#fff',
            letterSpacing: '-1px', marginBottom: 48,
            lineHeight: 1.3,
          }}
        >
          {t.contact.ctaBig[lang]}
        </motion.p>

        <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: 40 }}>
          {t.contact.subtitle[lang]}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="tel:19333240420" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 8,
            background: '#111', border: '1px solid #1a1a1a',
            color: '#888', textDecoration: 'none',
            fontSize: '0.8rem', transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = '#333'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.borderColor = '#1a1a1a'; e.target.style.color = '#888'; }}
          >
            19333240420
          </a>
          <a href="mailto:zimoer@mechanical.ai" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 8,
            background: '#fff', border: 'none', color: '#000',
            textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500,
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.8'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            <Mail size={14} /> {t.contact.sendEmail[lang]} <ArrowUpRight size={14} />
          </a>
        </div>

        <div style={{ marginTop: 80, color: '#333', fontSize: '0.7rem', letterSpacing: '1px' }}>
          MO / zimoer &copy; 2026
        </div>
      </motion.div>
    </section>
  );
}

