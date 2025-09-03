import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Send, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-4 glow-text">
            LET'S BUILD <span className="text-pink-400">STORIES</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-montserrat text-blue-400 mb-6">
            THAT LAST
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your brand's narrative? Let's create content that doesn't just perform—it resonates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="fade-in-delayed">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="neon-button w-full flex items-center justify-center space-x-3 text-lg py-4"
              >
                <Send size={20} />
                <span>Work With Me</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-delayed">
            <div>
              <h3 className="text-3xl font-bold font-montserrat text-white mb-6">
                Get In <span className="text-pink-400">Touch</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you need a content strategy overhaul, social media magic, or event coverage that creates buzz, I'm here to help your brand tell its most compelling story.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-pink-500/50 transition-colors">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Mail size={24} className="text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">diyanathwani6563@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+91-8407976805</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-green-500/50 transition-colors">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <MapPin size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/diya-nathwani6622/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600/20 rounded-lg border border-blue-600/30 hover:bg-blue-600/30 hover:border-blue-600/50 transition-all hover:scale-110"
                >
                  <Linkedin size={24} className="text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/mindonecstasy_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-pink-600/20 rounded-lg border border-pink-600/30 hover:bg-pink-600/30 hover:border-pink-600/50 transition-all hover:scale-110"
                >
                  <Instagram size={24} className="text-pink-400" />
                </a>
                <a
                  href="mailto:diyanathwani6563@gmail.com"
                  className="p-3 bg-green-600/20 rounded-lg border border-green-600/30 hover:bg-green-600/30 hover:border-green-600/50 transition-all hover:scale-110"
                >
                  <Mail size={24} className="text-green-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

       
export default Contact;