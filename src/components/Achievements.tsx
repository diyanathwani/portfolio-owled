import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const achievements = [
    {
      title: 'TTT – Writing That Sells Pro',
      year: '2024',
      organization: 'TTT Academy',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'SeekEase Mental Wellness App Strategy',
      year: '2023',
      organization: 'Healthcare Innovation',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Spirit @ Parivartan Runner-Up',
      year: '2023',
      organization: 'IIT Delhi',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Safar Project Innovation Runner-Up',
      year: '2023',
      organization: 'Gondwana University',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="relative py-20 bg-gray-950/50 overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h2 className="text-[10rem] font-black text-white select-none transform rotate-6">
          AWARDS
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="section-title mb-16">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-tile group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 transition-all duration-700 delay-${index * 150} transform hover:scale-105 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-10 group-hover:opacity-25 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-6 text-center h-full flex flex-col">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${achievement.gradient} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-black/50 border border-gray-700 text-sm font-semibold neon-text mb-4">
                  {achievement.year}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:neon-text transition-all duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {achievement.organization}
                </p>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-blue-500/20`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
