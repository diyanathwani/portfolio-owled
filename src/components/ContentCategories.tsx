import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, Share2, Video, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  projects: Project[];
}

const ContentCategories: React.FC = () => {
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories: Category[] = [
    {
      id: 'articles',
      title: 'Articles',
      icon: <FileText size={24} />,
      projects: [
        {
          id: '1',
          title: 'The Future of Digital Marketing',
          description: 'Exploring emerging trends in the digital landscape',
          type: 'Long-form Article',
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '2',
          title: 'Content Strategy Revolution',
          description: 'How authentic storytelling transforms brands',
          type: 'Industry Analysis',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '3',
          title: 'Data-Driven Storytelling',
          description: 'Merging analytics with creative narratives',
          type: 'Research Article',
          image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      id: 'social',
      title: 'Social Media Content',
      icon: <Share2 size={24} />,
      projects: [
        {
          id: '4',
          title: 'Instagram Campaign Series',
          description: 'Viral content strategy for lifestyle brands',
          type: 'Social Campaign',
          image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '5',
          title: 'LinkedIn Thought Leadership',
          description: 'Professional content that drives engagement',
          type: 'B2B Content',
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '6',
          title: 'TikTok Viral Strategy',
          description: 'Short-form content that captures attention',
          type: 'Video Content',
          image: 'https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      id: 'scripts',
      title: 'Script Writing',
      icon: <Video size={24} />,
      projects: [
        {
          id: '7',
          title: 'Event Coverage Scripts',
          description: 'Dynamic scripts for live event broadcasting',
          type: 'Live Coverage',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '8',
          title: 'Interview Series',
          description: 'Engaging conversation frameworks',
          type: 'Interview Scripts',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '9',
          title: 'Brand Storytelling Videos',
          description: 'Compelling narratives for video content',
          type: 'Brand Content',
          image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    {
      id: 'web',
      title: 'Web Content',
      icon: <Globe size={24} />,
      projects: [
        {
          id: '10',
          title: 'Website Copy Redesign',
          description: 'Converting visitors into customers through words',
          type: 'Website Copy',
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '11',
          title: 'E-commerce Product Descriptions',
          description: 'Sales-driven product storytelling',
          type: 'E-commerce',
          image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: '12',
          title: 'Blog Content Strategy',
          description: 'SEO-optimized content that ranks and converts',
          type: 'Blog Content',
          image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    }
  ];

  const scroll = (categoryId: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[categoryId];
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="categories" className="py-20 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            CONTENT <span className="text-pink-400">CATEGORIES</span>
          </h2>
          <p className="text-xl text-gray-400">
            Netflix-style showcase of my diverse content portfolio
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={category.id} className="fade-in-delayed">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-pink-400">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold font-montserrat text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pink-500/50 to-transparent"></div>
              </div>

              <div className="relative group">
                {/* Scroll buttons */}
                <button
                  onClick={() => scroll(category.id, 'left')}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scroll(category.id, 'right')}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Projects carousel */}
                <div
                  ref={(el) => scrollRefs.current[category.id] = el}
                  className="flex space-x-6 overflow-x-auto category-scroll pb-4"
                >
                  {category.projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-80 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover-card group/card"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded">
                              {project.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCategories;