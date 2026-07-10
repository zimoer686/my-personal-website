import { motion } from 'framer-motion';
import BlurText from './BlurText';
import ShinyText from './ShinyText';
import ElectricBorder from './ElectricBorder';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../context/translations';

const EngineerAvatar = () => (
  <svg viewBox="0 0 200 200" fill="none" style={{ width: '100%', height: '100%' }}>
    <circle cx="100" cy="100" r="98" fill="#1a1a2e" stroke="#333" strokeWidth="1" />
    <ellipse cx="100" cy="58" rx="48" ry="12" fill="#2d2d44" />
    <rect x="70" y="38" width="60" height="20" rx="8" fill="#2d2d44" />
    <rect x="80" y="34" width="40" height="8" rx="3" fill="#3d3d5c" />
    <ellipse cx="100" cy="82" rx="36" ry="38" fill="#f0d5b0" />
    <path d="M64 72 Q64 54 80 48 Q72 60 76 72" fill="#4a3728" />
    <path d="M136 72 Q136 54 120 48 Q128 60 124 72" fill="#4a3728" />
    <circle cx="84" cy="78" r="4" fill="#333" />
    <circle cx="116" cy="78" r="4" fill="#333" />
    <rect x="74" y="72" width="22" height="14" rx="4" stroke="#666" strokeWidth="1.5" fill="none" />
    <rect x="104" y="72" width="22" height="14" rx="4" stroke="#666" strokeWidth="1.5" fill="none" />
    <line x1="96" y1="79" x2="104" y2="79" stroke="#666" strokeWidth="1.5" />
    <path d="M88 92 Q100 102 112 92" stroke="#c4956a" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M70 118 L65 170 L135 170 L130 118" fill="#1a1a40" />
    <path d="M90 118 L100 130 L110 118" fill="#2d2d54" />
    <rect x="108" y="138" width="14" height="12" rx="1" fill="#252545" />
    <path d="M70 125 L48 148 Q44 152 48 156" stroke="#f0d5b0" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M130 125 L152 148 Q156 152 152 156" stroke="#f0d5b0" strokeWidth="8" strokeLinecap="round" fill="none" />
    <line x1="20" y1="30" x2="40" y2="30" stroke="#0066ff" strokeWidth="0.5" opacity="0.3" />
    <line x1="20" y1="35" x2="35" y2="35" stroke="#0066ff" strokeWidth="0.5" opacity="0.3" />
    <line x1="160" y1="30" x2="180" y2="30" stroke="#0066ff" strokeWidth="0.5" opacity="0.3" />
    <line x1="165" y1="35" x2="180" y2="35" stroke="#0066ff" strokeWidth="0.5" opacity="0.3" />
    <text x="28" y="170" fill="#0066ff" opacity="0.15" fontSize="10" fontFamily="monospace">&lt;/&gt;</text>
    <text x="156" y="170" fill="#0066ff" opacity="0.15" fontSize="10" fontFamily="monospace">~</text>
  </svg>
);

export default function About() {
  const { lang } = useLanguage();
  const info = {
    name: lang === 'zh' ? '李志茂' : 'Li Zhimao',
    brand: 'MO / zimoer',
    age: 17,
    location: t.about.locationVal[lang],
    phone: '19333240420',
    email: 'zimoer@mechanical.ai',
  };

  return (
    <section id="about" style={{ padding: '140px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#555', marginBottom: 8 }}><ShinyText text={t.about.label[lang]} speed={5} /></p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, letterSpacing: '-1px', marginBottom: 60 }}>
          <BlurText text={t.about.heading1[lang]} delay={60} as="span" /><br />
          <span style={{ color: '#444' }}><BlurText text={t.about.heading2[lang]} delay={60} as="span" /></span>
        </h2>
      </motion.div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 60, alignItems: 'start' }}>
        <motion.div className="about-avatar" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ width: 280, height: 280 }}>
          <ElectricBorder color="#0066ff" speed={0.8} chaos={0.2} borderRadius={28}>
            <EngineerAvatar />
          </ElectricBorder>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>{info.name}</span>
            <span style={{ fontSize: '0.75rem', color: '#555', marginLeft: 12, letterSpacing: '2px' }}>{info.brand}</span>
          </div>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 600, marginBottom: 32 }}>{t.about.bio[lang]}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            {[
              { label: t.about.location[lang], value: t.about.locationVal[lang] },
              { label: t.about.age[lang], value: info.age },
              { label: t.about.phone[lang], value: info.phone },
              { label: t.about.email[lang], value: info.email },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: '0.6rem', color: '#555', letterSpacing: '2px', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: '#ccc' }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 40, borderTop: '1px solid #222', paddingTop: 24 }}>
            {[
              { value: '3+', label: t.about.stat1[lang] },
              { value: '17', label: t.about.stat2[lang] },
              { value: 'INF', label: t.about.stat3[lang] },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.6rem', color: '#555', letterSpacing: '2px', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 280px 1fr;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-avatar {
            width: 200px !important;
            height: 200px !important;
            justify-self: center;
          }
        }
      `}</style>
    </section>
  );
}





