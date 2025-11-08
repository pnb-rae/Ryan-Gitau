import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  shape: 'circle' | 'star';
  rotation: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const total = 120;
      const starShapeProbability = 0.15;
      const newStars: Star[] = [];
      for (let i = 0; i < total; i++) {
        const shape: 'circle' | 'star' = Math.random() < starShapeProbability ? 'star' : 'circle';
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.6 + 0.6,
          shape,
          rotation: Math.random() * 360,
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);

    return () => window.removeEventListener('resize', generateStars);
  }, []);

  useEffect(() => {
    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          x: star.x + star.speed,
          y: star.y + star.speed * 0.5,
          // Reset position if star goes off screen
          ...(star.x > window.innerWidth && {
            x: -10,
            y: Math.random() * window.innerHeight,
          }),
        }))
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 dark:block hidden overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute animate-pulse ${star.shape === 'circle' ? 'rounded-full bg-white' : 'bg-white'}`}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.shape === 'circle' ? star.size : star.size * 6}px`,
            height: `${star.shape === 'circle' ? star.size : star.size * 6}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.9)`,
            clipPath: star.shape === 'star'
              ? 'polygon(50% 0%, 52% 40%, 100% 50%, 52% 60%, 50% 100%, 48% 60%, 0% 50%, 48% 40%)'
              : undefined,
            transform: star.shape === 'star' ? `rotate(${star.rotation}deg)` : undefined,
            transformOrigin: '50% 50%',
          }}
        />
      ))}
    </div>
  );
};

export default StarField;