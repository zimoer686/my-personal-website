import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '优势' },
  { id: 'contact', label: '联系' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 60px' : '20px 60px',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1700px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => scrollTo('hero')}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'var(--gradient-1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '1.1rem', color: '#fff',
          boxShadow: '0 0 20px var(--primary-glow)',
        }}>
          MO
        </div>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>zimoer</span>
      </motion.div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: activeSection === link.id ? 600 : 400,
                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                position: 'relative',
                padding: '4px 0',
                letterSpacing: '0.5px',
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="navIndicator"
                  style={{
                    position: 'absolute', bottom: -4, left: 0, right: 0,
                    height: 2, background: 'var(--gradient-1)',
                    borderRadius: 1,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 10,
            width: 38, height: 38,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--text-primary)',
          }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            cursor: 'pointer', color: 'var(--text-primary)',
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 70, left: 0, right: 0,
              background: 'var(--bg-card)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '20px 24px',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}
          >
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none', border: 'none',
                  fontSize: '1rem', fontWeight: 500,
                  color: 'var(--text-primary)',
                  textAlign: 'left', padding: '8px 0',
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav > div > div:first-child { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
