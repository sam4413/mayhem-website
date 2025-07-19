"use client";

import { useEffect, useState } from "react";

type Star = {
  key: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  tx: number;
  ty: number;
};

type StarfieldProps = {
  count?: number;
};

const Starfield = ({ count = 500 }: StarfieldProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 1.5 + Math.random() * 2;
      const delay = Math.random() * 600;
      const angle = Math.random() * 2 * Math.PI;
      const maxDistance = 60; // max translation in percent

      let tx = Math.cos(angle) * maxDistance;
      let ty = Math.sin(angle) * maxDistance;

      // Clamp translation values so the star stays within [0, 100]%
      if (left + tx < 0) tx = -left;
      if (left + tx > 100) tx = 100 - left;
      if (top + ty < 0) ty = -top;
      if (top + ty > 100) ty = 100 - top;

      return {
        key: i,
        size,
        left,
        top,
        duration,
        delay,
        tx,
        ty,
      };
    });
    setStars(generatedStars);
  }, [count]);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        overflow: 'hidden', // Ensure stars outside are hidden
      }}
    >
      <style>{`
        @keyframes moveStar {
          0% { transform: translate(0, 0); }
          100% { transform: translate(var(--tx), var(--ty)); }
        }
        .starfield-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
      {stars.map(star => (
        <div
          key={star.key}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            position: 'absolute',
            borderRadius: '9999px',
            background: 'white',
            opacity: 0.7,
            animation: `star-twinkle ${star.duration}s infinite alternate, moveStar 15s linear infinite alternate`,
            animationDelay: `${star.delay}s, 0s`,
            '--tx': `${star.tx}px`,
            '--ty': `${star.ty}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Starfield;