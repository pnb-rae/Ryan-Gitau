import { useEffect, useState } from 'react';

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-6 h-6 bg-accent/60 rounded-full pointer-events-none z-50 transition-transform duration-75 dark:mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isClicking ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className="fixed w-3 h-3 bg-accent/80 rounded-full pointer-events-none z-50 transition-all duration-300 dark:mix-blend-screen"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          opacity: 0.7,
        }}
      />
    </>
  );
}