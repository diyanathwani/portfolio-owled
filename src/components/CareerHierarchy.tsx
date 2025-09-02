import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Building2, Users, Award, Briefcase, MapPin, Calendar, Target } from 'lucide-react';

interface CareerItem {
  company: string;
  role: string;
  period: string;
  description: string;
  details?: string[];
  type: 'corporate' | 'freelance' | 'leadership' | 'education';
  category: 'corporate' | 'clients' | 'events' | 'education';
  logo?: string;
}

const CareerHierarchy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'corporate' | 'clients' | 'events' | 'education'>('corporate');
  const [expandedCards, setExpandedCards] = useState<{[key: string]: number | null}>({
    corporate: null,
    clients: null,
    events: null,
    education: null
  });
  const sectionRef = useRef<HTMLElement>(null);

  const careerData: CareerItem[] = [
    // Corporate Roles
    {
      company: 'Affinco Pvt. Ltd.',
      role: 'Content Strategist',
      period: '2023–2024',
      description: 'Blended AI + creativity → campaigns rooted in philosophy: "Balance of AI & Automation with Emotional Intelligence." 40% increase in team output by streamlining content workflows. Created conversion-focused campaigns across multi-platforms (SaaS, healthcare, e-commerce, dating).',
      details: [
        '🚀 AI SaaS Marketing: Positioning + GTM content',
        '📦 Amazon Product Listings: Boosted visibility & conversions',
        '🏥 Healthcare Content: Patient-first blogs, improved SEO reach',
        '💕 Dating Funnels: Crafted brand voice & community-driven storytelling',
        '🎯 Landing Pages: Lead magnets + onboarding content',
        '🛠️ Tools: WordPress (Yoast, Elementor), SEMrush, Google Trends, Canva, Ideogram',
        '📊 Analytics: Google Analytics, Search Console for traffic monitoring'
      ],
      type: 'corporate',
      category: 'corporate',
      logo: '⚡'
    },
    {
      company: 'CenturySoft Pvt. Ltd.',
      role: 'Content Creator',
      period: '2022–2023',
      description: 'Flagship Website: Consumer Health Digest → 358.4K monthly visitors (Dec \'23) → one of the largest health & wellness portals globally. Led team of US-based freelance writers with training, mentoring, and performance reviews.',
      details: [
        '✍️ Content Creation & Editing: Website blogs, YouTube scripts, social media posts, news articles, infographics, SEO content, marketing campaigns, brand voice',
        '📰 PR & Media Outreach: Trending press releases, media distribution, moment marketing campaigns',
        '🔍 SEO Mastery: Keyword research, competitor gap analysis, SERP optimization using SEMrush, Ubersuggest, Ahrefs',
        '👩‍💻 Team Leadership: Directed remote US-based writing team with editorial guidelines and training modules',
        '📊 Industry Research: Competitive analysis, consumer behavior studies, trend insights',
        '🤖 AI Integration: Leveraged ChatGPT, Jasper, Bard + AI detectors (ContentScale, Writer.ai)',
        '🎯 Key Wins: 100+ articles/month, 30% increase in team delivery rate'
      ],
      type: 'corporate',
      category: 'corporate',
      logo: '🌐'
    },
    {
      company: 'ICCW, Chennai',
      role: 'Content Intern',
      period: 'Nov 2022 – Jan 2023',
      description: 'Led "Nallampatti Project," wrote for water/soil contamination study, PR + SEO strategy.',
      type: 'corporate',
      category: 'corporate',
      logo: '💧'
    },
    {
      company: 'Younity.in',
      role: 'Market Research Intern',
      period: 'Jan 2022',
      description: 'Product analysis, proposals, course launches.',
      type: 'corporate',
      category: 'corporate',
      logo: '📊'
    },
    // Clients/Freelance
    {
      company: 'Soul AI',
      role: 'AI Trainer (Project Mercury)',
      period: 'Jun 2024 – Jul 2024',
      description: 'LLM training, advanced prompt engineering, market research.',
      type: 'freelance',
      category: 'clients',
      logo: '🤖'
    },
    {
      company: 'Melooha',
      role: 'Script Writer (Paid Ads)',
      period: 'Shark Tank Featured',
      description: 'Conversion rates increased by ~38% through strategic ad storytelling.',
      type: 'freelance',
      category: 'clients',
      logo: '🦈'
    },
    {
      company: 'Vidhi Chotai',
      role: 'Social Media Strategist',
      period: 'Ongoing',
      description: 'Complete A–Z ideation & execution for Instagram + LinkedIn branding.',
      type: 'freelance',
      category: 'clients',
      logo: '📱'
    },
    {
      company: 'Pristilo Cold Pressed Oil',
      role: 'Social Media Strategist',
      period: '2023',
      description: 'Dubai-targeted campaign, sales increased by ~42%.',
      type: 'freelance',
      category: 'clients',
      logo: '🫒'
    },
    {
      company: 'StatGlow',
      role: 'SaaS Writer & Wireframe Strategist',
      period: 'Oct 2023 – Mar 2024',
      description: 'SEO + storytelling + UI wireframing.',
      type: 'freelance',
      category: 'clients',
      logo: '📈'
    },
    {
      company: 'Kukreja Builders, Nagpur',
      role: 'Copywriter',
      period: 'Launch Campaign',
      description: 'Strategic copywriting for property launch campaign.',
      type: 'freelance',
      category: 'clients',
      logo: '🏗️'
    },
    {
      company: 'Sagar Bhatt',
      role: 'Research Paper Writer',
      period: 'Technical & Scientific Writing',
      description: 'Technical and scientific writing for research publications.',
      type: 'freelance',
      category: 'clients',
      logo: '📄'
    },
    {
      company: 'Fiscaleye Pvt. Ltd.',
      role: 'Website Rebranding Specialist',
      period: 'Website Rebranding',
      description: 'Complete website content strategy and rebranding.',
      type: 'freelance',
      category: 'clients',
      logo: '💼'
    },
    {
      company: 'Investment Forum Company',
      role: 'Script Writer',
      period: 'YouTube & Instagram',
      description: 'Script writing for YouTube and Instagram content.',
      type: 'freelance',
      category: 'clients',
      logo: '🎬'
    },
    {
      company: 'Darshan Thakral',
      role: 'Content Creation Strategist',
      period: 'Ongoing',
      description: 'Strategic content creation and planning.',
      type: 'freelance',
      category: 'clients',
      logo: '✨'
    },
    {
      company: 'Venkateshwaran Giri',
      role: 'AI Content & SEO Expert',
      period: 'AI Content & SEO',
      description: 'AI-powered content creation and SEO optimization.',
      type: 'freelance',
      category: 'clients',
      logo: '🤖'
    },
    {
      company: 'Shrirang Siras',
      role: 'Content Creator',
      period: 'Multiple Clients',
      description: 'Content creation for multiple clients across various industries.',
      type: 'freelance',
      category: 'clients',
      logo: '📝'
    },
    // Events/Leadership
    {
      company: 'Paradox, IIT Madras',
      role: 'Content Head',
      period: '2022–2025',
      description: 'Led IITM BS fest content team, live coverage, interviews, social strategy. Achieved +553.8% engagement.',
      type: 'leadership',
      category: 'events',
      logo: '🎭'
    },
    {
      company: 'IIT Madras Web Admin',
      role: 'Web Admin',
      period: 'Sep 2022 – Aug 2023',
      description: 'Managed a 2500+ student community, boosted reach by 179%.',
      type: 'leadership',
      category: 'events',
      logo: '🌐'
    },
    {
      company: 'Team Professionals, IITM',
      role: 'Content Specialist',
      period: 'Jul 2022 – Jun 2023',
      description: 'Speaker content & event coverage (Ashok Jhunjhunwala, etc.).',
      type: 'leadership',
      category: 'events',
      logo: '🎤'
    },
    // Education
    {
      company: 'IIT Madras',
      role: 'B.S. in Data Science & Applications',
      period: '2021–25',
      description: 'CGPA: 7.5',
      type: 'education',
      category: 'education',
      logo: '🎓'
    },
    {
      company: 'IIT Madras',
      role: 'Diploma in Programming & Data Science',
      period: 'Completed',
      description: 'Foundation in data science and programming.',
      type: 'education',
      category: 'education',
      logo: '📜'
    },
    {
      company: 'Rajmal Puglia Institute',
      role: 'BBA in HR',
      period: '2020–23',
      description: 'CGPA: 9.5',
      type: 'education',
      category: 'education',
      logo: '🏛️'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: 'corporate' as const, label: 'Corporate Roles', icon: <Building2 className="w-5 h-5" /> },
    { key: 'clients' as const, label: 'Clients', icon: <Users className="w-5 h-5" /> },
    { key: 'events' as const, label: 'Events', icon: <Award className="w-5 h-5" /> },
    { key: 'education' as const, label: 'Education', icon: <Briefcase className="w-5 h-5" /> }
  ];

  const filteredData = careerData.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'corporate': return 'from-blue-600 to-purple-600';
      case 'freelance': return 'from-red-600 to-pink-600';
      case 'leadership': return 'from-purple-600 to-indigo-600';
      case 'education': return 'from-green-600 to-teal-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  const getCategoryBackground = (category: string) => {
    switch (category) {
      case 'corporate': return 'CORPORATE';
      case 'clients': return 'CLIENTS';
      case 'events': return 'EVENTS';
      case 'education': return 'EDUCATION';
      default: return 'JOURNEY';
    }
  };

  return (
    <section ref={sectionRef} id="career-glimpse" className="relative py-20 overflow-hidden">
      {/* Dynamic Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h2 className="text-[10rem] font-black text-white select-none transform rotate-12 transition-all duration-500">
          {getCategoryBackground(activeCategory)}
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="section-title mb-16">Career Glimpse</h2>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                console.log('Button clicked:', category.key);
                setActiveCategory(category.key);
              }}
              className={`category-tab flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white'
                  : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-white'
              }`}
              style={{ 
                cursor: 'pointer',
                pointerEvents: 'auto',
                zIndex: 10,
                position: 'relative'
              }}
            >
              {category.icon}
              <span className="font-semibold">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Glowing Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12 opacity-50"></div>

        {/* Content Grid */}
        <div className="relative max-w-5xl mx-auto">
          {activeCategory === 'corporate' || activeCategory === 'events' ? (
            // Timeline Layout for Corporate and Events
            <>
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-red-600"></div>
              
              {filteredData.map((item, index) => (
                <div
                  key={`${item.company}-${index}`}
                  className={`relative mb-12 transition-all duration-700 delay-${index * 100} transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                  }`}
                >
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-black"></div>
                  
                  <div className="ml-20">
                    <div 
                      className={`career-card p-6 rounded-lg border border-gray-800 transition-all duration-300 cursor-pointer ${
                        expandedCards.corporate === index ? 'bg-gray-900/50' : 'bg-gray-900/30'
                      }`}
                      onClick={() => setExpandedCards(prev => ({ ...prev, corporate: prev.corporate === index ? null : index }))}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center text-2xl`}>
                            {item.logo}
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {item.company}
                            </h3>
                            <p className="text-lg font-semibold neon-text mb-1">
                              {item.role}
                            </p>
                            <p className="text-sm text-gray-400 italic mb-3">
                              {item.period}
                            </p>
                            
                            {expandedCards.corporate === index && (
                              <div className="mt-4">
                                <p className="text-gray-300 leading-relaxed mb-4">
                                  {item.description}
                                </p>
                                {item.details && (
                                  <div className="space-y-2">
                                    {item.details.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="text-sm text-gray-400 flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{detail}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <ChevronRight 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            expandedCards.corporate === index ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Grid Layout for Clients and Education
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <div
                  key={`${item.company}-${index}`}
                  className={`client-card group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 transition-all duration-700 delay-${index * 100} transform hover:scale-105 cursor-pointer ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-10 group-hover:opacity-25 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{item.logo}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:neon-text transition-all duration-300">
                      {item.company}
                    </h3>
                    
                    <p className="text-sm font-semibold text-blue-400 mb-2">
                      {item.role}
                    </p>
                    
                    <p className="text-xs text-gray-400 italic mb-3">
                      {item.period}
                    </p>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerHierarchy;