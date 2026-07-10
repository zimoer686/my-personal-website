import { memo } from 'react';

const StarBorder = memo(({ children, color = '#0066ff', speed = 4, className = '', ...props }) => {
  return (
    <div className={`star-border-container ${className}`} {...props} style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className="star-border-svg"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
          borderRadius: 'inherit',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          style={{
            width: '100%', height: '100%',
            animation: `starBorderSpin ${speed}s linear infinite`,
          }}
        >
          <defs>
            <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor={color} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect
            x="2" y="2" width="96" height="96"
            fill="none"
            stroke="url(#starGrad)"
            strokeWidth="1.5"
            rx="12"
            ry="12"
            strokeDasharray="8 12"
          />
        </svg>
      </div>
      {children}
    </div>
  );
});

StarBorder.displayName = 'StarBorder';
export default StarBorder;
