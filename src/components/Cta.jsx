import React from 'react';
import { motion } from 'framer-motion';

const Cta = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="col-span-full bg-[linear-gradient(90deg,#60a5fa,#7c3aed)] dark:bg-[linear-gradient(90deg,#2563eb,#7c3aed)] text-white dark:text-text-light p-8 sm:p-12 rounded-3xl text-center mt-6 sm:mt-8 mb-6 sm:mb-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
    >
      <div
        className="absolute top-[-50%] right-[-50%] w-full h-full bg-repeat animate-[float_10s_linear_infinite]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle cx='100' cy='100' r='80' fill='rgba(255,255,255,0.2)'/><circle cx='100' cy='100' r='60' fill='rgba(255,255,255,0.3)'/><circle cx='100' cy='100' r='40' fill='rgba(255,255,255,0.4)'/></svg>")`,
        }}
      ></div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Maximize Your Property Investment?</h3>
      <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
        Join hundreds of satisfied property owners who trust us with their valuable investments. Experience hassle-free property management today.
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 bg-white dark:bg-bg-dark-card text-primary-color dark:text-accent-color font-semibold rounded-full hover:scale-110 hover:shadow-shadow-heavy transition-all duration-300 shadow-shadow-light"
      >
        Get Started Now
      </a>
    </motion.div>
  );
};

export default Cta;