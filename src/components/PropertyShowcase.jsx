import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaBuilding, FaMapMarkedAlt, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaExpandArrowsAlt, FaRoad, FaGraduationCap, FaUsers, FaHome } from 'react-icons/fa';

const PropertyShowcase = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [<FaSchool />, <FaBuilding />, <FaMapMarkedAlt />];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const changeImage = (direction) => {
    setCurrentImage((prev) => {
      let next = prev + direction;
      if (next >= images.length) next = 0;
      if (next < 0) next = images.length - 1;
      return next;
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="properties" className="py-16 sm:py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-light mb-8 sm:mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-primary after:rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          Featured Properties
        </motion.h2>
        <motion.div className="relative mt-8 sm:mt-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="flex-1 min-h-[300px] sm:min-h-[400px] relative bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] dark:from-bg-dark dark:to-bg-dark-card rounded-[20px] overflow-hidden">
              {images.map((icon, idx) => (
                <motion.div
                  key={`image-${idx}`}
                  className="absolute inset-0 flex items-center justify-center w-full h-full"
                  initial="hidden"
                  animate={{ opacity: idx === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl sm:text-8xl text-primary-color dark:text-accent-color">{icon}</div>
                </motion.div>
              ))}
            </div>
            <div className="flex-1 p-6 sm:p-8 bg-bg-light dark:bg-bg-dark-card rounded-[20px] shadow-shadow-light dark:shadow-shadow-heavy flex flex-col justify-center">
              <span className="inline-block bg-gradient-secondary text-white dark:text-text-light text-xs font-semibold px-4 py-2 rounded-full mb-4 w-fit">
                Commercial Property
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-dark dark:text-text-light mb-4">
                Operational Girls School - Namanga Road
              </h3>
              <p className="text-text-light dark:text-[#cbd5e1] mb-4 text-sm sm:text-base leading-relaxed">
                Rare opportunity to acquire an operational girls school strategically located along the Nairobi-Namanga highway. This prime educational facility sits on a spacious 5-acre plot, offering excellent visibility and accessibility just 50 meters from the main highway.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                {[
                  { icon: <FaMapMarkerAlt />, text: 'Namanga Road, Kajiado County' },
                  { icon: <FaExpandArrowsAlt />, text: '5 Acres Land Size' },
                  { icon: <FaRoad />, text: '50M From Main Highway' },
                  { icon: <FaGraduationCap />, text: 'Fully Operational School' },
                  { icon: <FaUsers />, text: '500+ Student Capacity' },
                  { icon: <FaHome />, text: 'Dormitory Facilities' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-bg-gray dark:bg-bg-dark-card rounded-[10px] text-text-light dark:text-[#cbd5e1] text-sm">
                    <div className="text-base sm:text-lg text-primary-color dark:text-accent-color">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-block px-8 py-3 bg-white dark:bg-bg-dark-card text-primary-color dark:text-accent-color font-semibold rounded-full hover:-translate-y-1 hover:shadow-shadow-heavy transition-all duration-300 shadow-shadow-light w-fit">
                Inquire Now
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:absolute sm:bottom-5 sm:right-5">
            <button onClick={() => changeImage(-1)} className="bg-white/90 dark:bg-bg-dark-card/90 p-3 sm:p-4 rounded-full shadow-shadow-light dark:shadow-shadow-heavy hover:scale-110 hover:bg-white dark:hover:bg-bg-dark-card transition-all duration-300">
              <FaChevronLeft className="text-text-dark dark:text-text-light" />
            </button>
            <button onClick={() => changeImage(1)} className="bg-white/90 dark:bg-bg-dark-card/90 p-3 sm:p-4 rounded-full shadow-shadow-light dark:shadow-shadow-heavy hover:scale-110 hover:bg-white dark:hover:bg-bg-dark-card transition-all duration-300">
              <FaChevronRight className="text-text-dark dark:text-text-light" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyShowcase;