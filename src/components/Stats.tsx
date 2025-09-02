import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: number;
  label: string;
  color: string;
  suffix?: string;
}

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { number: 25, label: 'Tools Mastered', color: 'text-pink-400', suffix: '+' },
    { number: 50, label: 'Projects Completed', color: 'text-blue-400', suffix: '+' },
    { number: 15, label: 'Happy Clients', color: 'text-pink-400', suffix: '+' },
    { number: 2, label: 'Years Experience', color: 'text-blue-400', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 60; // 60 frames for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });
        }, 30); // 30ms intervals for smooth animation
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="fade-in-delayed">
                <div className={`text-4xl md:text-5xl font-black font-montserrat ${stat.color} mb-2 transition-all duration-300 hover:scale-110`}>
                  {animatedValues[index]}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
