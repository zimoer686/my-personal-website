import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';
import ShinyText from './ShinyText';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../context/translations';

export default function Skills() {
  const { lang } = useLanguage();

  const skillItems = [
    {
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=85',
      title: t.skills.names.autocad[lang],
      subtitle: t.skills.descs.autocad[lang],
      handle: '92%',
      borderColor: '#0066ff',
      gradient: 'linear-gradient(145deg, #0066ff, #0a0a0a)',
    },
    {
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=85',
      title: t.skills.names.solidworks[lang],
      subtitle: t.skills.descs.solidworks[lang],
      handle: '88%',
      borderColor: '#00d4ff',
      gradient: 'linear-gradient(210deg, #00d4ff, #0a0a0a)',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=85',
      title: t.skills.names.catia[lang],
      subtitle: t.skills.descs.catia[lang],
      handle: '85%',
      borderColor: '#3399ff',
      gradient: 'linear-gradient(165deg, #3399ff, #0a0a0a)',
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=85',
      title: t.skills.names.cnc[lang],
      subtitle: t.skills.descs.cnc[lang],
      handle: '80%',
      borderColor: '#0044cc',
      gradient: 'linear-gradient(195deg, #0044cc, #0a0a0a)',
    },
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=85',
      title: t.skills.names.aiml[lang],
      subtitle: t.skills.descs.aiml[lang],
      handle: '75%',
      borderColor: '#7c3aed',
      gradient: 'linear-gradient(225deg, #7c3aed, #0a0a0a)',
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=85',
      title: t.skills.names.python[lang],
      subtitle: t.skills.descs.python[lang],
      handle: '70%',
      borderColor: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #0a0a0a)',
    },
  ];

  return (
    <section id="skills" style={{ padding: '140px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#555', marginBottom: 8 }}><ShinyText text={t.skills.label[lang]} speed={5} /></p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, letterSpacing: '-1px', marginBottom: 40 }}>{t.skills.heading[lang]}</h2>
      </motion.div>
      <div className="skills-grid-container" style={{ height: 520, position: 'relative' }}>
        <ChromaGrid items={skillItems} radius={280} damping={0.45} fadeOut={0.6} ease="power3.out" columns={3} rows={2} />
      </div>
      <style>{`
        .skills-grid-container {
          height: 520px;
        }
        @media (max-width: 768px) {
          .skills-grid-container {
            height: auto !important;
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  );
}

