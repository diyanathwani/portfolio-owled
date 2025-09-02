import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import CareerHierarchy from './components/CareerHierarchy';
import ContentCategories from './components/ContentCategories';
import ToolsMastered from './components/ToolsMastered';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <Navigation />
      <Hero />
      <MyStory />
      <CareerHierarchy />
      <ContentCategories />
      <ToolsMastered />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;