import { useEffect, useRef, memo } from 'react';

const ShinyText = memo(({ text = '', disabled = false, speed = 5, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (disabled) return;
    const el = containerRef.current;
    if (!el) return;

    let startTime = null;
    let animId;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % (speed * 1000)) / (speed * 1000);
      el.style.setProperty('--shiny-x', `${progress * 100}%`);
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [disabled, speed]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        background: 'linear-gradient(110deg, #fff 30%, #0066ff 50%, #fff 70%)',
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition: 'var(--shiny-x, 0%) 0%',
        transition: 'none',
      }}
    >
      {text}
    </span>
  );
});

ShinyText.displayName = 'ShinyText';
export default ShinyText;
