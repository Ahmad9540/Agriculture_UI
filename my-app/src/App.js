import React from 'react';
import MyNavbar from './components/Navbar';
import CarouselSection from './components/CarouselSection';
import '@fontsource/patrick-hand';
import AboutSection from './components/AboutSection';

import ProduceSection from './components/ProduceSection';
import TestimonialSection from './components/TestimonialSection';

import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import OrganicStatsSection from './components/OrganicStatsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <CarouselSection />
      <AboutSection />
      <ServicesSection />
      <ProduceSection />
      <TestimonialSection />
      <GallerySection />
      <OrganicStatsSection/>
      <ContactSection />
      <BlogSection/>
      <Footer />
    </div>
  );
}

export default App;
