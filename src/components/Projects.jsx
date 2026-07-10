import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../context/translations';
import BlurText from './BlurText';
import BorderGlow from './BorderGlow';

export default function Projects() {
  const { lang } = useLanguage();

  const projects = [
    {
      title: t.work.items[0].title[lang],
      subtitle: t.work.items[0].subtitle[lang],
      desc: t.work.items[0].desc[lang],
      tags: ['Python', 'TensorFlow', 'ROS', 'SolidWorks'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85',
    },
    {
      title: t.work.items[1].title[lang],
      subtitle: t.work.items[1].subtitle[lang],
      desc: t.work.items[1].desc[lang],
      tags: ['IoT', 'ML', 'CNC', 'Catia'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85',
    },
    {
      title: t.work.items[2].title[lang],
      subtitle: t.work.items[2].subtitle[lang],
      desc: t.work.items[2].desc[lang],
      tags: ['AutoCAD', 'SolidWorks', 'AI', 'API'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=85',
    },
  ];

  return (
    <section id="projects" style={{ padding: '140px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#555', marginBottom: 8 }}>{t.work.label[lang]}</p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, letterSpacing: '-1px' }}>
          <BlurText text={t.work.heading[lang]} delay={60} as="span" />
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 60 }}>
        {projects.map((project, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: 0.05 * i }}>
            <BorderGlow backgroundColor="#111" borderRadius={16} glowColor="215 80 60" glowIntensity={0.8} colors={['#0066ff', '#00d4ff', '#3399ff']} glowRadius={30} edgeSensitivity={25} coneSpread={20}>
              <div className="project-card-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32, cursor: 'pointer' }}>
                <div className="project-card-image" style={{ height: 200, overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="project-card-content" style={{ padding: '24px 24px 24px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '2px', marginBottom: 8 }}>{project.subtitle}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.7, marginBottom: 16, maxWidth: 500 }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{ padding: '3px 10px', borderRadius: 4, background: '#1a1a1a', fontSize: '0.7rem', color: '#555', fontFamily: "'JetBrains Mono', monospace" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
      <style>{`
        .project-card-grid {
          grid-template-columns: 280px 1fr;
        }
        @media (max-width: 768px) {
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card-image {
            height: 200px !important;
          }
          .project-card-content {
            padding: 0 20px 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
