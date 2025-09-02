import React, { useState } from 'react';
import { GraduationCap, Briefcase, Users, Mic, ChevronRight, ExternalLink } from 'lucide-react';

interface CareerItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  period: string;
}

const CareerHierarchy: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const careerItems: CareerItem[] = [
    {
      id: 'education',
      icon: <GraduationCap size={32} />,
      title: 'EDUCATION',
      subtitle: 'IIT Madras BS Data Science',
      description: 'Academic journey from diploma to degree, mastering the art of data-driven storytelling.',
      details: [
        'Diploma in Data Science & Applications - Foundation Level',
        'Currently pursuing BS Data Science Degree',
        'Specialized in Statistical Analysis and Machine Learning',
        'Applied data science principles to content strategy',
        'Academic Excellence in Programming and Analytics'
      ],
      period: '2022 - Present'
    },
    {
      id: 'jobs',
      icon: <Briefcase size={32} />,
      title: 'JOBS & INTERNSHIPS',
      subtitle: 'Affinco Pvt. Ltd. + Corporate Experience',
      description: 'Professional experience spanning corporate environments and innovative startups.',
      details: [
        'Content Strategy Intern at Affinco Pvt. Ltd.',
        'Social Media Management for multiple clients',
        'Corporate content development and brand storytelling',
        'Cross-functional collaboration with marketing teams',
        'Performance analytics and content optimization'
      ],
      period: '2023 - Present'
    },
    {
      id: 'clients',
      icon: <Users size={32} />,
      title: 'CLIENTS',
      subtitle: 'Freelance & Social Media Portfolio',
      description: 'Building digital empires for diverse clients across industries.',
      details: [
        'Social media strategy for 15+ clients',
        'Content creation for lifestyle and tech brands',
        'Influencer collaboration and campaign management',
        'Brand voice development and storytelling',
        'Multi-platform content optimization'
      ],
      period: '2022 - Present'
    },
    {
      id: 'events',
      icon: <Mic size={32} />,
      title: 'EVENTS',
      subtitle: 'Paradox Fest Content Super Coordinator',
      description: 'Transforming college events into legendary experiences through immersive content.',
      details: [
        'Content Super Coordinator (2022-2025)',
        'Live event coverage and real-time storytelling',
        'Conducted 50+ interviews with performers and attendees',
        'Social media campaigns reaching 100K+ impressions',
        'Event documentation and post-production content'
      ],
      period: '2022 - 2025'
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="career" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            CAREER <span className="text-pink-400">HIERARCHY</span>
          </h2>
          <p className="text-xl text-gray-400">
            The journey from student to content strategist
          </p>
        </div>

        <div className="space-y-6">
          {careerItems.map((item, index) => (
            <div key={item.id} className="fade-in-delayed">
              {/* Glowing divider */}
              {index > 0 && (
                <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-8"></div>
              )}
              
              <div 
                className={`timeline-item ${expandedItem === item.id ? 'border-pink-500 bg-pink-500/10' : ''}`}
                onClick={() => toggleExpanded(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="text-pink-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold font-montserrat text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-300 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <span className="text-sm text-gray-500 font-medium">
                      {item.period}
                    </span>
                    <ChevronRight 
                      size={24} 
                      className={`text-pink-400 transition-transform ${
                        expandedItem === item.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded content */}
                {expandedItem === item.id && (
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex space-x-4">
                      <button className="neon-button text-sm">
                        <ExternalLink size={16} />
                        View Case Study
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHierarchy;