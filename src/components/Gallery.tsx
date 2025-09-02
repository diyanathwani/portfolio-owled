import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Paradox Fest Live Coverage',
      description: 'Behind-the-scenes moments from the biggest college fest',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events'
    },
    {
      id: '2',
      title: 'Interview with Celebrity Artist',
      description: 'Exclusive backstage interview during fest',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Interviews'
    },
    {
      id: '3',
      title: 'Content Creation Process',
      description: 'My workspace and creative process',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Behind-the-scenes'
    },
    {
      id: '4',
      title: 'Client Brainstorming Session',
      description: 'Strategic planning for major campaign',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Client Work'
    },
    {
      id: '5',
      title: 'Team Collaboration',
      description: 'Working with the fest organizing committee',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Team Work'
    },
    {
      id: '6',
      title: 'Live Event Streaming',
      description: 'Managing live coverage of performances',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events'
    },
    {
      id: '7',
      title: 'Social Media Campaign Launch',
      description: 'Celebrating successful campaign results',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Campaigns'
    },
    {
      id: '8',
      title: 'Workshop Presentation',
      description: 'Teaching content strategy to fellow students',
      image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Speaking'
    },
    {
      id: '9',
      title: 'Award Recognition',
      description: 'Recognition for outstanding fest coordination',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Achievements'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            VISUAL <span className="text-pink-400">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-400">
            Moments that tell the story of my journey
          </p>
        </div>

        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="masonry-item fade-in-delayed"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="masonry-overlay">
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{item.description}</p>
                  <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-pink-500 text-white text-sm px-3 py-1 rounded">
                  {selectedItem.category}
                </span>
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink size={16} />
                  <span>View Full Story</span>
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;