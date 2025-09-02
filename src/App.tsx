import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Stats from './components/Stats';
// import CareerHierarchy from './components/CareerHierarchy';
// import ContentCategories from './components/ContentCategories';
import ToolsMastered from './components/ToolsMastered';
import CareerHierarchy from './components/CareerHierarchy';
import MediaRadar from './components/MediaRadar';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
// import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <Navigation />
      <Hero />
      <MyStory />
      <Stats />
      <ToolsMastered />
      <CareerHierarchy />
      {/* <ContentCategories /> */}
      <MediaRadar />
      <Achievements />
      <Testimonials />
      {/* <Gallery /> */}
      <Contact />
    </div>
  );
}

export default App;