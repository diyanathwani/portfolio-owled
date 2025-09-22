import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Stats from './components/Stats';
import ToolsMastered from './components/ToolsMastered';
import CareerHierarchy from './components/CareerHierarchy';
import BestWork from './components/BestWork';
import MediaRadar from './components/MediaRadar';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ArticlePage from './components/ArticlePage';

const Home = () => (
  <div className="bg-black text-white">
    <Navigation />
    <Hero />
    <MyStory />
    <Stats />
    <CareerHierarchy />
    <BestWork />
    <ToolsMastered />
    <MediaRadar />
    <Achievements />
    <Testimonials />
    <Contact />
  </div>
);

function App() {
  return (
    <div className="app relative">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;