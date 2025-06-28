import React from 'react';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero1.jpg'; // Replace with your actual image
import hero2 from '../assets/hero2.jpg'; // Replace with your actual image
import hero3 from '../assets/hero3.jpg'; // Replace with your actual image

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    { background: `url(${hero1})` },
    { background: `url(${hero2})` },
    { background: `url(${hero3})` },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center text-center text-white dark:text-text-light overflow-hidden pt-16">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: slide.background }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : -100 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-bg-dark/50"></div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-2xl px-4 sm:px-8 z-20 relative">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Professional Property Management Solutions
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8 opacity-90 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          animate="visible"
          variants={{ ...fadeInUp, transition: { ...fadeInUp.visible.transition, delay: 0.4 } }}
        >
          Complete property management solutions for residential and commercial properties. We handle every aspect of property management, allowing you to enjoy passive income without the hassle.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{ ...fadeInUp, transition: { ...fadeInUp.visible.transition, delay: 0.6 } }}
        >
          <a
            href="#services"
            className="px-8 py-3 bg-white dark:bg-bg-dark-card text-primary-color dark:text-accent-color font-semibold rounded-full hover:scale-110 hover:bg-primary-color dark:hover:bg-accent-color hover:text-white transition-all duration-300 shadow-shadow-light"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent text-white dark:text-text-light font-semibold rounded-full border-2 border-white dark:border-text-light hover:scale-110 hover:bg-white dark:hover:bg-bg-dark-card hover:text-primary-color dark:hover:text-accent-color transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;