import { memo } from 'react';
import './FluidMesh.css';

const blobs = [
  { size: 500, x: '10%', y: '-10%', color: 'rgba(0,102,255,0.12)', duration: 25, delay: 0 },
  { size: 400, x: '70%', y: '20%', color: 'rgba(0,212,255,0.08)', duration: 30, delay: -5 },
  { size: 350, x: '-5%', y: '60%', color: 'rgba(0,102,255,0.1)', duration: 28, delay: -10 },
  { size: 450, x: '80%', y: '70%', color: 'rgba(0,212,255,0.06)', duration: 22, delay: -3 },
  { size: 300, x: '40%', y: '90%', color: 'rgba(0,102,255,0.08)', duration: 35, delay: -8 },
  { size: 250, x: '90%', y: '40%', color: 'rgba(0,102,255,0.06)', duration: 20, delay: -12 },
  { size: 380, x: '50%', y: '0%', color: 'rgba(0,212,255,0.05)', duration: 32, delay: -6 },
];

const FluidMesh = memo(() => {
  return (
    <div className="fluid-mesh">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="fluid-blob"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            animation: `fluidDrift${i} ${blob.duration}s ease-in-out infinite alternate`,
            animationDelay: `${blob.delay}s`,
          }}
        />
      ))}
      <style>{`
        ${blobs.map((blob, i) => `
          @keyframes fluidDrift${i} {
            0% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(${30 + (i * 7) % 60}px, ${-20 + (i * 11) % 50}px) scale(${1 + (i % 3) * 0.05}); }
            50% { transform: translate(${10 + (i * 13) % 40}px, ${30 + (i * 5) % 60}px) scale(${0.95 + (i % 4) * 0.03}); }
            75% { transform: translate(${-20 + (i * 17) % 50}px, ${10 + (i * 3) % 40}px) scale(${1.05 + (i % 2) * 0.04}); }
            100% { transform: translate(${15 + (i * 23) % 45}px, ${-10 + (i * 7) % 35}px) scale(1); }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
});

FluidMesh.displayName = 'FluidMesh';
export default FluidMesh;
