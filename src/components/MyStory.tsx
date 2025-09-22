import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Edit3, Users, Target } from 'lucide-react';

const MyStory: React.FC = () => {
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

  return (
    <section ref={sectionRef} id="story" className="py-20 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-5xl font-black font-montserrat mb-12 text-center glow-text">
            MY <span className="text-pink-400">STORY</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Owl Animation - Commented Out But Preserved
            <div className="order-2 md:order-1">
              <div className="w-96 h-96 mx-auto mb-6 relative">
                <svg viewBox="0 0 120 120" className="w-full h-full owl-animation">
                  <ellipse cx="60" cy="70" rx="35" ry="40" fill="none" stroke="url(#owlGradient)" strokeWidth="2" className="owl-body"/>
                  <circle cx="48" cy="55" r="10" fill="none" stroke="url(#owlGradient)" strokeWidth="2" className="owl-eye"/>
                  <circle cx="72" cy="55" r="10" fill="none" stroke="url(#owlGradient)" strokeWidth="2" className="owl-eye"/>
                  <circle cx="48" cy="55" r="5" fill="#1060E0" className="owl-pupil"/>
                  <circle cx="72" cy="55" r="5" fill="#1060E0" className="owl-pupil"/>
                  <circle cx="50" cy="53" r="2" fill="white" className="owl-highlight"/>
                  <circle cx="74" cy="53" r="2" fill="white" className="owl-highlight"/>
                  <path d="M56 63 L60 70 L64 63 Z" fill="url(#owlGradient)" className="owl-beak"/>
                  <path d="M38 30 L42 48 L46 38" stroke="url(#owlGradient)" strokeWidth="2" fill="none" className="owl-ear"/>
                  <path d="M82 30 L78 48 L74 38" stroke="url(#owlGradient)" strokeWidth="2" fill="none" className="owl-ear"/>
                  <path d="M30 68 Q38 78 46 73" stroke="url(#owlGradient)" strokeWidth="2" fill="none" className="owl-wing"/>
                  <path d="M90 68 Q82 78 74 73" stroke="url(#owlGradient)" strokeWidth="2" fill="none" className="owl-wing"/>
                  <defs>
                    <linearGradient id="owlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1060E0"/>
                      <stop offset="50%" stopColor="#D03070"/>
                      <stop offset="100%" stopColor="#F00030"/>
                    </linearGradient>
                    <filter id="owlGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold font-montserrat text-pink-400 mb-2">DIYA NATHWANI</h3>
                <p className="text-blue-400 font-medium">CONTENT STRATEGIST & CREATIVE CURIOUS</p>
                <div className="mt-4 text-xs text-gray-500">
                  <p>ID: DN2025</p>
                  <p>STATUS: ACTIVE</p>
                </div>
              </div>
            </div>
            */}

            {/* New Profile Photo */}
            <div className="order-2 md:order-1">
              <div className="w-96 h-96 mx-auto mb-6 relative group">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/src/components/Assets/My close up photo (2).jpg" 
                      alt="Diya Nathwani"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/10 mix-blend-overlay"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold font-montserrat text-pink-400 mb-2">DIYA NATHWANI</h3>
                <p className="text-blue-400 font-medium">CONTENT STRATEGIST & CREATIVE CURIOUS</p>
                <div className="mt-4 text-xs text-gray-500">
                  <p>ID: DN2025</p>
                  <p>STATUS: ACTIVE</p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="order-1 md:order-2">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <div className="flex items-start space-x-4">
                  <Edit3 className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-2">The Content Lover</h3>
                    <p>I'm an <span className="text-pink-400 font-semibold">ENFP</span> who discovered that words can build empires. From articles to social media campaigns, I craft content that doesn't just inform—it transforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <GraduationCap className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-2">The Academic Journey</h3>
                    <p>Final year student @<span className="text-blue-400 font-semibold">IIT Madras BS | Data Science and Applications</span>. Because data tells stories, and I love stories.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-2">The Fest Leader</h3>
                    <p><span className="text-blue-400 font-semibold">Paradox Fest Content Super Coordinator</span> (2022-2025). Live coverage, interviews, storytelling—turning college events into legendary experiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-2">The Vision</h3>
                    <p>Aspiring media founder who believes in the power of authentic storytelling. Because in today's world, <span className="text-pink-400 font-semibold">content is king, queen, and the entire royal court.</span></p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="neon-button">
                  Let's Create Magic Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;