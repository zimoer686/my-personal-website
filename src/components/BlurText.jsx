import { useEffect, useRef, useState, memo } from 'react';

const BlurText = memo(({ text = '', delay = 100, className = '', as: Tag = 'p' }) => {
  const [visible, setVisible] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  const animStyle = (i) => ({
    display: 'inline-block',
    opacity: visible ? 1 : 0,
    filter: visible ? 'blur(0px)' : 'blur(6px)',
    transform: visible ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 0.5s ease ${i * delay}ms, filter 0.5s ease ${i * delay}ms, transform 0.5s ease ${i * delay}ms`,
  });

  return (
    <Tag ref={elRef} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, i) => (
        <span key={i} style={{ ...animStyle(i), marginRight: '0.25em' }}>
          {word}
        </span>
      ))}
    </Tag>
  );
});

BlurText.displayName = 'BlurText';
export default BlurText;
