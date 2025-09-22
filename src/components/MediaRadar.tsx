import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface RadarSector {
  id: string;
  title: string;
  angle: number;
  color: string;
  glowColor: string;
  skills: string[];
}

const MediaRadar: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [radarRotation, setRadarRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Single source of truth for sector data
  // Note: Angles are adjusted to start from top (270 degrees) and go clockwise
  const sectors: RadarSector[] = [
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      angle: 270, // Top
      color: '#00ff64',
      glowColor: 'rgba(0, 255, 100, 0.6)',
      skills: [
        'Brand voice development',
        'Content strategy and planning',
        'Competitor analysis',
        'Brand positioning and messaging'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media',
      angle: 330, // Top-right
      color: '#ff0064',
      glowColor: 'rgba(255, 0, 100, 0.6)',
      skills: [
        'Multi-platform content strategy',
        'Trend analysis and moment marketing',
        'Campaign development for B2B & B2C',
        'Audience segmentation and targeting'
      ]
    },
    {
      id: 'content-creation',
      title: 'Content',
      angle: 30, // Bottom-right
      color: '#0064ff',
      glowColor: 'rgba(0, 100, 255, 0.6)',
      skills: [
        'SEO-optimized blog writing',
        'Engaging social media content',
        'Case studies and whitepapers',
        'Email marketing campaigns'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      angle: 90, // Bottom
      color: '#ff6400',
      glowColor: 'rgba(255, 100, 0, 0.6)',
      skills: [
        'Performance tracking and reporting',
        'Data-driven decision making',
        'ROI analysis',
        'A/B testing and optimization'
      ]
    },
    {
      id: 'video-production',
      title: 'Video',
      angle: 150, // Bottom-left
      color: '#6400ff',
      glowColor: 'rgba(100, 0, 255, 0.6)',
      skills: [
        'Scriptwriting and storyboarding',
        'Video editing and production',
        'Motion graphics and animation',
        'Live streaming setup'
      ]
    },
    {
      id: 'community',
      title: 'Community',
      angle: 210, // Top-left
      color: '#ff00ff',
      glowColor: 'rgba(255, 0, 255, 0.6)',
      skills: [
        'Audience engagement strategies',
        'Community management',
        'Influencer partnerships',
        'User-generated content campaigns'
      ]
    }
  ];

  // This array is just for the radar line labels (shortened titles)
  const radarLineSectors = sectors.map(sector => ({
    id: sector.id,
    title: sector.title.split(' ')[0] // Just use first word for radar labels
  }));

  const getSectorPath = (angle: number, isHovered: boolean) => {
    const radius = isHovered ? 180 : 160;
    const innerRadius = 60;
    const startAngle = (angle - 30) * (Math.PI / 180);
    const endAngle = (angle + 30) * (Math.PI / 180);
    
    const x1 = 200 + innerRadius * Math.cos(startAngle);
    const y1 = 200 + innerRadius * Math.sin(startAngle);
    const x2 = 200 + radius * Math.cos(startAngle);
    const y2 = 200 + radius * Math.sin(startAngle);
    const x3 = 200 + radius * Math.cos(endAngle);
    const y3 = 200 + radius * Math.sin(endAngle);
    const x4 = 200 + innerRadius * Math.cos(endAngle);
    const y4 = 200 + innerRadius * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1}`;
  };

  return (
    <section id="media-radar" className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-9xl font-black font-montserrat text-gray-800 select-none transform -rotate-12">
          RADAR
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-4 glow-text">
            The Media <span className="text-pink-400">RADAR</span>
          </h2>
          <p className="text-xl text-gray-400 italic">
            Scanning Every Angle of Content Strategy
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Each sector = an expertise. Together = a 360° strategist.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Radar Circle */}
          <div className="relative">
            <svg width="400" height="400" className="transform rotate-0">
              {/* Radar Background */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="url(#radarGradient)"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              
              {/* Radar Grid Lines */}
              {[60, 120, 180].map(radius => (
                <circle
                  key={radius}
                  cx="200"
                  cy="200"
                  r={radius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
              ))}
              
              {/* Radar Lines */}
              {sectors.map((sector) => (
                <line
                  key={`line-${sector.id}`}
                  x1="200"
                  y1="200"
                  // Remove the -90 degree offset since we're now using the correct angles
                  x2={200 + 180 * Math.cos(sector.angle * (Math.PI / 180))}
                  y2={200 + 180 * Math.sin(sector.angle * (Math.PI / 180))}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              ))}

              {/* Radar Sweep */}
              <line
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos((radarRotation - 90) * (Math.PI / 180))}
                y2={200 + 180 * Math.sin((radarRotation - 90) * (Math.PI / 180))}
                stroke="rgba(0, 255, 100, 0.8)"
                strokeWidth="2"
                className="animate-pulse"
              />

              {/* Sectors */}
              {sectors.map((sector) => {
                
                return (
                  <path
                    key={sector.id}
                    d={getSectorPath(sector.angle, activeSector === sector.id)}
                    fill={activeSector === sector.id ? sector.glowColor : 'rgba(255, 255, 255, 0.05)'}
                    stroke={sector.color}
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveSector(sector.id)}
                    onMouseLeave={() => setActiveSector(null)}
                    style={{
                      filter: activeSector === sector.id ? `drop-shadow(0 0 20px ${sector.color})` : 'none'
                    }}
                  />
                );
              })}

              {/* Sector Labels */}
              {sectors.map((sector) => {
                const labelRadius = 140;
                // Remove the -90 degree offset since we're now using the correct angles
                const x = 200 + labelRadius * Math.cos(sector.angle * (Math.PI / 180));
                const y = 200 + labelRadius * Math.sin(sector.angle * (Math.PI / 180));
                
                return (
                  <g>
                    <circle
                      cx={x}
                      cy={y}
                      r="16"
                      fill={activeSector === sector.id ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'}
                      className="transition-all duration-300"
                    />
                    <text
                      key={`label-${sector.id}`}
                      x={x}
                      y={y + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="font-bold fill-white pointer-events-none select-none"
                      style={{
                        textShadow: activeSector === sector.id 
                          ? `0 0 15px ${sector.color}, 0 0 30px ${sector.color}` 
                          : '0 0 5px rgba(0,0,0,0.7)',
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        pointerEvents: 'none',
                        userSelect: 'none'
                      }}
                    >
                      {sector.title.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Center Dot */}
              <circle
                cx="200"
                cy="200"
                r="8"
                fill="url(#centerGradient)"
                className="animate-pulse"
              />

              {/* Gradients */}
              <defs>
                <radialGradient id="radarGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="rgba(10, 10, 15, 0.9)" />
                  <stop offset="100%" stopColor="rgba(18, 18, 32, 0.9)" />
                </radialGradient>
                <radialGradient id="centerGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#00ff64" />
                  <stop offset="100%" stopColor="#0064ff" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Skills Panel */}
          <div className="flex-1 max-w-2xl">
            {activeSector ? (
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-4 h-4 rounded-full mr-4"
                    style={{ 
                      backgroundColor: sectors.find(s => s.id === activeSector)?.color,
                      boxShadow: `0 0 20px ${sectors.find(s => s.id === activeSector)?.color}`
                    }}
                  ></div>
                  <h3 className="text-2xl font-bold text-white">
                    {sectors.find(s => s.id === activeSector)?.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {sectors.find(s => s.id === activeSector)?.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-slide-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Check 
                          size={16} 
                          className="text-green-400"
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))'
                          }}
                        />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hover Over Any Sector</h3>
                <p className="text-gray-400">
                  Explore my expertise across different content domains
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaRadar;
