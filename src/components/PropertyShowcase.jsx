import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSchool, FaBuilding, FaMapMarkedAlt, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaExpandArrowsAlt, FaRoad, FaGraduationCap, FaUsers, FaHome, FaHospital, FaStore, FaTree } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: 'Operational Girls School - Namanga Road',
    type: 'Commercial Property',
    description: 'Rare opportunity to acquire an operational girls school strategically located along the Nairobi-Namanga highway. This prime educational facility sits on a spacious 5-acre plot, offering excellent visibility and accessibility just 50 meters from the main highway.',
    features: [
      { icon: <FaMapMarkerAlt />, text: 'Namanga Road, Kajiado County' },
      { icon: <FaExpandArrowsAlt />, text: '5 Acres Land Size' },
      { icon: <FaRoad />, text: '50M From Main Highway' },
      { icon: <FaGraduationCap />, text: 'Fully Operational School' },
      { icon: <FaUsers />, text: '500+ Student Capacity' },
      { icon: <FaHome />, text: 'Dormitory Facilities' },
    ],
    images: [<FaSchool />, <FaBuilding />, <FaMapMarkedAlt />, <FaGraduationCap />, <FaUsers />, <FaHome />],
  },
  {
    id: 2,
    title: 'Modern Hospital - Mombasa Road',
    type: 'Healthcare Facility',
    description: 'State-of-the-art hospital located along Mombasa Road. This 3-acre facility includes advanced medical equipment, spacious wards, and excellent connectivity to major transport routes.',
    features: [
      { icon: <FaMapMarkerAlt />, text: 'Mombasa Road, Nairobi' },
      { icon: <FaExpandArrowsAlt />, text: '3 Acres Land Size' },
      { icon: <FaRoad />, text: '100M From Main Road' },
      { icon: <FaHospital />, text: 'Advanced Medical Equipment' },
      { icon: <FaUsers />, text: '200+ Bed Capacity' },
      { icon: <FaHome />, text: 'Staff Quarters' },
    ],
    images: [<FaHospital />, <FaBuilding />, <FaMapMarkedAlt />, <FaUsers />, <FaHome />],
  },
  {
    id: 3,
    title: 'Commercial Plaza - Westlands',
    type: 'Retail Property',
    description: 'Prime commercial plaza in the heart of Westlands. This 2-acre property offers modern retail spaces, ample parking, and proximity to key business districts.',
    features: [
      { icon: <FaMapMarkerAlt />, text: 'Westlands, Nairobi' },
      { icon: <FaExpandArrowsAlt />, text: '2 Acres Land Size' },
      { icon: <FaRoad />, text: 'Central Business District' },
      { icon: <FaStore />, text: 'Retail Spaces' },
      { icon: <FaUsers />, text: 'High Foot Traffic' },
      { icon: <FaTree />, text: 'Landscaped Grounds' },
    ],
    images: [<FaStore />, <FaBuilding />, <FaMapMarkedAlt />, <FaTree />, <FaUsers />, <FaHome />],
  },
];

const PropertyShowcase = () => {
  const [currentProperty, setCurrentProperty] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % properties[currentProperty].images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProperty]);

  const changeImage = (direction) => {
    setCurrentImage((prev) => {
      let next = prev + direction;
      if (next >= properties[currentProperty].images.length) next = 0;
      if (next < 0) next = properties[currentProperty].images.length - 1;
      return next;
    });
  };

  const changeProperty = (index) => {
    setCurrentProperty(index);
    setCurrentImage(0);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const slide = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: 'easeIn' } },
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProperty}
              variants={slide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row gap-6 sm:gap-8"
            >
              <div className="flex-1 min-h-[300px] sm:min-h-[400px] relative bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] dark:from-bg-dark dark:to-bg-dark-card rounded-[20px] overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    key={`image-${currentImage}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center w-full h-full"
                  >
                    <div className="text-6xl sm:text-8xl text-primary-color dark:text-accent-color">
                      {properties[currentProperty].images[currentImage]}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex-1 p-6 sm:p-8 bg-bg-light dark:bg-bg-dark-card rounded-[20px] shadow-shadow-light dark:shadow-shadow-heavy flex flex-col justify-center">
                <span className="inline-block bg-gradient-secondary text-white dark:text-text-light text-xs font-semibold px-4 py-2 rounded-full mb-4 w-fit">
                  {properties[currentProperty].type}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-text-dark dark:text-text-light mb-4">
                  {properties[currentProperty].title}
                </h3>
                <p className="text-text-light dark:text-[#cbd5e1] mb-4 text-sm sm:text-base leading-relaxed">
                  {properties[currentProperty].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  {properties[currentProperty].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-bg-gray dark:bg-bg-dark-card rounded-[10px] text-text-light dark:text-[#cbd5e1] text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <div className="text-base sm:text-lg text-primary-color dark:text-accent-color">{feature.icon}</div>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-white dark:bg-bg-dark-card text-primary-color dark:text-accent-color font-semibold rounded-full hover:-translate-y-1 hover:shadow-shadow-heavy transition-all duration-300 shadow-shadow-light w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inquire Now
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:absolute sm:bottom-5 sm:right-5">
            <motion.button
              onClick={() => changeImage(-1)}
              className="bg-white/90 dark:bg-bg-dark-card/90 p-3 sm:p-4 rounded-full shadow-shadow-light dark:shadow-shadow-heavy hover:scale-110 hover:bg-white dark:hover:bg-bg-dark-card transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-text-dark dark:text-text-light" />
            </motion.button>
            <motion.button
              onClick={() => changeImage(1)}
              className="bg-white/90 dark:bg-bg-dark-card/90 p-3 sm:p-4 rounded-full shadow-shadow-light dark:shadow-shadow-heavy hover:scale-110 hover:bg-white dark:hover:bg-bg-dark-card transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-text-dark dark:text-text-light" />
            </motion.button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {properties.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => changeProperty(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentProperty ? 'bg-primary-color' : 'bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyShowcase;