import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { label: 'Home', zh: '首页', id: 'hero' },
  { label: 'About', zh: '关于', id: 'about' },
  { label: 'Work', zh: '项目', id: 'projects' },
  { label: 'Skills', zh: '技能', id: 'skills' },
  { label: 'Contact', zh: '联系', id: 'contact' },
];

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (item) => {
    scrollTo(item.id);
  };

  const gooeyItems = navItems.map(item => ({
    label: item.label,
    onClick: () => scrollTo(item.id),
  }));

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '16px 48px' : '20px 48px',
        background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: 1200, margin: '0 auto',
      }}>
        <button onClick={() => scrollTo('hero')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#fff', fontSize: '1rem', fontWeight: 600, letterSpacing: '3px',
        }}>MO</button>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={toggleLang} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '5px 12px', borderRadius: 6,
            background: lang === 'zh' ? '#0066ff' : '#222',
            border: 'none', color: '#fff', cursor: 'pointer',
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px',
            transition: 'background 0.2s',
          }}>
            {lang === 'en' ? '中' : 'EN'}
          </button>

          <div className="nav-desktop-gooey">
            <GooeyNav
              items={navItems.map(item => ({ label: item.label, href: `#${item.id}` }))}
              initialActiveIndex={0}
              particleCount={25}
              animationTime={500}
              timeVariance={400}
              particleDistances={[70, 8]}
              particleR={80}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onItemClick={(item) => scrollTo(navItems.find(i => i.label === item.label)?.id || 'hero')}
            />
          </div>

          <button onClick={() => setMenuOpen(true)} className="hamburger" style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: 5,
          }}>
            <div style={{ width: 20, height: 1.5, background: '#fff' }} />
            <div style={{ width: 20, height: 1.5, background: '#fff' }} />
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nav-desktop-gooey { display: none !important; }
            .hamburger { display: flex !important; }
            nav { padding: 16px 24px !important; }
          }
        `}</style>
      </nav>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 200, background: '#000',
        transition: 'opacity 0.3s, visibility 0.3s',
        opacity: menuOpen ? 1 : 0, visibility: menuOpen ? 'visible' : 'hidden',
        display: 'flex', flexDirection: 'column', padding: 24,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '3px' }}>MO</span>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
          {navItems.map((item, i) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
              fontSize: '1.5rem', fontWeight: 500, letterSpacing: '2px',
              transitionDelay: `${i * 60}ms`, transition: 'opacity 0.4s, transform 0.4s',
              opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}>{item.label}</button>
          ))}
          <button onClick={toggleLang} style={{
            padding: '10px 24px', borderRadius: 8,
            background: lang === 'zh' ? '#0066ff' : '#222',
            border: 'none', color: '#fff', cursor: 'pointer',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px',
            transitionDelay: `${navItems.length * 60 + 60}ms`, transition: 'opacity 0.4s, transform 0.4s',
            opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
          }}>
            {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </div>
    </>
  );
}
