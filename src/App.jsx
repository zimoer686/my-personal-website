import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FluidMesh from './components/FluidMesh';

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#0a0a0a' }}>
        <FluidMesh />
      </div>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
