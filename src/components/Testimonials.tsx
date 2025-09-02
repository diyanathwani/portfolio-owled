import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      content: 'Diya transformed our content strategy completely. Her data-driven approach combined with creative storytelling increased our engagement by 300%. She understands the pulse of modern audiences.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupHub',
      content: 'Working with Diya was a game-changer. Her ability to translate complex ideas into engaging content is remarkable. The social media campaigns she created generated leads worth $50K in just 3 months.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Brand Manager',
      company: 'LifestyleCo',
      content: 'Diya has this unique talent for understanding brand voice and translating it into authentic content. Her work on our lifestyle campaign resonated so well with our audience that we saw a 250% increase in brand mentions.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Event Coordinator',
      company: 'Paradox Fest',
      content: 'Diya\'s event coverage is phenomenal. She captures not just moments, but emotions. Her live coverage and interviews during Paradox Fest created a digital experience that extended far beyond the physical event.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      id: '5',
      name: 'Priya Sharma',
      role: 'Content Head',
      company: 'DigitalFirst Agency',
      content: 'I\'ve worked with many content creators, but Diya brings a rare combination of analytical thinking and creative flair. Her content doesn\'t just perform well—it tells stories that stick with people.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-9xl font-black font-montserrat text-gray-800 select-none">
          TESTIMONIALS
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black font-montserrat mb-4 glow-text">
            CLIENT <span className="text-pink-400">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-gray-400">
            What people say about working with me
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-pink-500/20 text-white p-4 rounded-full transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-pink-500/20 text-white p-4 rounded-full transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial cards */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 mx-auto max-w-4xl hover-card">
                  <div className="flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-pink-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-pink-400 to-blue-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;