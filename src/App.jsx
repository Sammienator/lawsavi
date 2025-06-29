import React from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import Services from '../src/components/Services.jsx';
import PropertyShowcase from '../src/components/PropertyShowcase.jsx';
import Contact from '../src/components/Contact.jsx';
import Footer from '../src/components/Footer.jsx';
import LandAdvert from './components/LandAdvert.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LandAdvert/>
      <Services />
      <PropertyShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;