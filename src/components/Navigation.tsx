import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'About Me', 
      href: '#story',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('story');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Career Glimpse', 
      href: '#career-glimpse',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('career-glimpse');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'My Best Work', 
      href: '#best-work',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('best-work');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Tools', 
      href: '#tools',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('tools');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Media Radar', 
      href: '#media-radar',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('media-radar');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Achievements', 
      href: '#achievements',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('achievements');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Testimonials', 
      href: '#testimonials',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('testimonials');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      name: 'Contact', 
      href: '#contact',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center h-16">
          {/* Logo - Hidden on desktop, shown on mobile */}
          <div className="md:hidden flex-shrink-0 mb-2">
            <h1 className="text-2xl font-bold font-montserrat glow-text">DIYA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-8">
              {/* Logo on the left in desktop */}
              <div className="flex-shrink-0 mr-8">
                <h1 className="text-2xl font-bold font-montserrat glow-text">DIYA</h1>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium"
                  onClick={item.onClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pink-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;