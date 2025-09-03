import React from 'react';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-conic rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo animation placeholder */}
        <div className="mb-8 fade-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center glow-text">
            <span className="text-xl font-bold font-montserrat">DN</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-montserrat uppercase tracking-wider mb-6 fade-in-delayed">
          <span className="block glow-text">DIYA's</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
            Content Hub
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto fade-in-delayed">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            "Content isn't the King. It's the <span className="text-pink-400 font-semibold">Kingmaker!</span>"
            <span className="ml-2 text-2xl">👑</span>
          </p>
          <p className="text-base md:text-lg text-gray-400 italic leading-relaxed">
            We see reels, videos, visuals flashing by… but it all begins with a pen and paper. Platforms change. Trends evolve. 
            But content? It stays the ultimate <span className="text-pink-400 font-semibold">Chhupa Rustom</span> of the media game!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 fade-in-delayed">
          <a 
            href="https://drive.google.com/file/d/1NMy4RnTABgUIFH9JjmbyNt5s-4GXCl0o/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button flex items-center space-x-3"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1ZG4zViIWimldxahLyrbXHh9AHk5DkAkK?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button flex items-center space-x-3"
          >
            <Eye size={20} />
            <span>See My Portfolio</span>
          </a>
          <a 
            href="#contact"
            className="neon-button flex items-center space-x-3"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;