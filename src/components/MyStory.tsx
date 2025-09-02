import React from 'react';
import { User, GraduationCap, Edit3, Users, Target } from 'lucide-react';

const MyStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Digital ID Style Photo */}
          <div className="fade-in">
            <div className="relative">
              <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8 hover-card">
                <div className="border-2 border-pink-500 rounded-lg p-4 mb-4">
                  <div className="w-64 h-80 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <User size={80} className="text-gray-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-montserrat text-pink-400 mb-2">DIYA NATHWANI</h3>
                  <p className="text-blue-400 font-medium">CONTENT STRATEGIST & MEDIA FOUNDER</p>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>ID: DN2025</p>
                    <p>STATUS: ACTIVE</p>
                  </div>
                </div>
              </div>
              
              {/* Glowing corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-pink-500 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-pink-500 rounded-br-lg"></div>
            </div>
          </div>

          {/* Story Content */}
          <div className="fade-in-delayed">
            <h2 className="text-5xl font-black font-montserrat mb-8 glow-text">
              MY <span className="text-pink-400">STORY</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-pink-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-2">The Academic Journey</h3>
                  <p>Currently pursuing BS Data Science at <span className="text-blue-400 font-semibold">IIT Madras</span>, transforming from diploma to degree. Because data tells stories, and I love stories.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Edit3 className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-2">The Content Creator</h3>
                  <p>I'm an <span className="text-pink-400 font-semibold">ENFP</span> who discovered that words can build empires. From articles to social media campaigns, I craft content that doesn't just inform—it transforms.</p>
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
    </section>
  );
};

export default MyStory;