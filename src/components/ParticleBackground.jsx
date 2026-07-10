import { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 40;

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const particlesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    // Background particles
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.2 + 0.05;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    // Hover particles
    class HoverParticle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 8;
        this.y = y + (Math.random() - 0.5) * 8;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 0.3;
        this.size = Math.random() * 2 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.03 + 0.02;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.vx *= 0.98; this.vy += 0.015;
        this.life -= this.decay;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.life * 0.3})`;
        ctx.fill();
      }
    }

    const hoverP = [];

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      frameRef.current++;
      if (frameRef.current % 3 === 0) {
        hoverP.push(new HoverParticle(e.clientX, e.clientY));
      }
    };
    const onMouseLeave = () => { mouseRef.current = null; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => { p.update(); p.draw(); });

      // Mouse glow
      if (mouseRef.current) {
        const grad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 80
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.04)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(mouseRef.current.x - 80, mouseRef.current.y - 80, 160, 160);
      }

      // Hover
      for (let i = hoverP.length - 1; i >= 0; i--) {
        hoverP[i].update();
        hoverP[i].draw();
        if (hoverP[i].life <= 0) hoverP.splice(i, 1);
      }
      if (hoverP.length > 100) hoverP.splice(0, hoverP.length - 100);

      requestAnimationFrame(animate);
    };
    const anim = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />;
}
