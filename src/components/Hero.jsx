import { ArrowUpRight } from 'lucide-react';
import ShinyText from './ShinyText';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../context/translations';

const gearImage = 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1400&q=90';

export default function Hero() {
  const { lang } = useLanguage();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 48px', maxWidth: 1200, margin: '0 auto', overflow: 'hidden',
    }}>
      <div className="hero-banner" style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '84px 48px 0', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
        <p className="animate-fade-up" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.5rem)', color: '#555', letterSpacing: '6px', textTransform: 'uppercase', textAlign: 'center', borderBottom: '1px solid #1a1a1a', paddingBottom: 20, maxWidth: '100%', fontWeight: 300 }}>
          <ShinyText text={t.hero.banner[lang]} speed={3} />
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="animate-fade-up" style={{ marginBottom: 16 }}>
          <ShinyText text={t.hero.tagline[lang]} speed={5} style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase' }} />
        </div>

        <div className="animate-fade-up-d1" style={{ marginBottom: 32 }}>
          <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', letterSpacing: '10px', fontWeight: 300, color: '#555', textTransform: 'uppercase' }}>{t.hero.weAre[lang]} </span>
          <span style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '10px', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase' }}>{t.hero.mo[lang]}</span>
        </div>

        <h1 style={{ marginBottom: 32 }}>
          <div className="animate-fade-up-d1" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)', fontWeight: 600, lineHeight: 0.95, color: '#fff', letterSpacing: '-2px' }}>{t.hero.line1[lang]}</div>
          <div className="animate-fade-up-d2" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)', fontWeight: 600, lineHeight: 0.95, color: '#333', letterSpacing: '-2px' }}>{t.hero.line2[lang]}</div>
          <div className="animate-fade-up-d3" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-2px' }}><ShinyText text={t.hero.line3[lang]} speed={3} /></div>
        </h1>

        <p className="animate-fade-up-d3" style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 420, marginBottom: 48 }}>
          {t.hero.desc1[lang]}<br />
          <span style={{ color: '#fff' }}>{t.hero.desc2[lang]}</span>
        </p>

        <div className="animate-fade-up-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('projects')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, background: '#fff', border: 'none', color: '#000', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.target.style.opacity = '0.8'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >{t.hero.viewWork[lang]} <ArrowUpRight size={14} /></button>
          <button onClick={() => scrollTo('contact')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, background: 'transparent', border: '1px solid #333', color: '#888', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'border-color 0.2s,color 0.2s' }}
            onMouseEnter={e => { e.target.style.borderColor = '#666'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.borderColor = '#333'; e.target.style.color = '#888'; }}
          >{t.hero.contact[lang]}</button>
        </div>
      </div>

      <div style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '55%', height: '80%', opacity: 0.15, pointerEvents: 'none', background: `url(${gearImage}) center/contain no-repeat` }} className="hero-desktop-bg" />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none', background: `url(${gearImage}) center/cover no-repeat` }} className="hero-mobile-bg" />

      <div onClick={() => scrollTo('about')} style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#444', cursor: 'pointer', fontSize: '0.6rem', letterSpacing: '2px', opacity: 0.5 }}>{t.hero.scroll[lang]}</div>

      <style>{`
        .hero-desktop-bg { display: block; }
        .hero-mobile-bg { display: none; }
        section#hero { padding: 0 48px; }
        .hero-banner { padding: 84px 48px 0; }
        @media (max-width: 768px) {
          .hero-desktop-bg { display: none !important; }
          .hero-mobile-bg { display: block !important; }
          section#hero { padding: 0 20px !important; }
          .hero-banner { padding: 84px 20px 0 !important; }
        }
        @media (max-width: 400px) {
          section#hero h1 > div { font-size: clamp(1.6rem, 8vw, 2rem) !important; letter-spacing: -1px !important; }
          section#hero .animate-fade-up-d1 > span { letter-spacing: 6px !important; }
        }
      `}</style>
    </section>
  );
}
