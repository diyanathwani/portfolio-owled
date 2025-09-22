import React, { useEffect, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Throttle mouse move events for better performance
  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Only add trail if cursor is moving
    const now = Date.now();
    setTrails(prev => {
      // Filter out old trails
      const recentTrails = prev.filter(trail => now - trail.id < 300);
      // Add new trail if cursor moved enough
      if (recentTrails.length === 0 || 
          Math.abs(recentTrails[recentTrails.length - 1].x - e.clientX) > 10 ||
          Math.abs(recentTrails[recentTrails.length - 1].y - e.clientY) > 10) {
        return [...recentTrails, { x: e.clientX, y: e.clientY, id: now }].slice(-8);
      }
      return recentTrails;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      updatePosition(e);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Use passive event listener for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [updatePosition]);

  // Don't render anything on server-side
  if (typeof window === 'undefined') return null;
  if (!isVisible) return null;

  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
      {trails.map((trail, index, arr) => {
        // Calculate opacity based on trail age
        const opacity = (index + 1) / arr.length * 0.4;
        const scale = 0.2 + (index / arr.length) * 0.8;
        
        return (
          <div
            key={trail.id}
            className="cursor-trail"
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              opacity,
              transform: `scale(${scale})`,
              transition: 'all 0.1s ease-out',
            }}
          />
        );
      })}
    </>
  );
};

export default CustomCursor;