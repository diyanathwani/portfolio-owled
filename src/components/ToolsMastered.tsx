import React from 'react';
import { Search, Edit3, Shield, Palette, BarChart, Target } from 'lucide-react';

interface ToolCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  tools: string[];
  color: string;
}

const ToolsMastered: React.FC = () => {
  const toolCategories: ToolCategory[] = [
    {
      id: 'research',
      title: 'Research & Discovery',
      icon: <Search size={24} />,
      tools: ['Ubersuggest', 'Google Trends', 'Reddit', 'Quora', 'Perplexity', 'Google Scholar'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'writing',
      title: 'Writing & Strategy',
      icon: <Edit3 size={24} />,
      tools: ['ChatGPT', 'Gemini', 'Jasper', 'Claude', 'Grammarly', 'Notion'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'detection',
      title: 'AI Detection',
      icon: <Shield size={24} />,
      tools: ['Writer.ai', 'ContentScale', 'Originality.ai'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'design',
      title: 'Design & Publishing',
      icon: <Palette size={24} />,
      tools: ['Canva', 'Figma', 'Adobe Premiere Pro', 'WordPress', 'Medium', 'Beehiiv'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'analytics',
      title: 'Analytics & Workflow',
      icon: <BarChart size={24} />,
      tools: ['Google Analytics', 'Search Console', 'Trello', 'Loom', 'Scribe'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <Target size={24} />,
      tools: ['AIDA', 'PAS', 'FAB', 'PASTOR'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-conic opacity-20"></div>
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h2 className="text-[10rem] font-black text-white select-none">
          TOOLS
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            TOOLS <span className="text-pink-400">MASTERED</span>
          </h2>
          <p className="text-xl text-gray-400">
            My arsenal for creating exceptional content experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={category.id} className="fade-in-delayed" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover-card h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.tools.map((tool) => (
                    <div key={tool} className="tool-item">
                      <span className="text-sm font-medium text-gray-300">
                        {tool}
                      </span>
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

export default ToolsMastered;