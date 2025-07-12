import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaExpandArrowsAlt, FaRoad, FaGraduationCap, FaUsers, FaHome, FaHospital, FaStore, FaTree, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Using placeholder images for demo - replace with your actual image imports
import school1 from '../assets/school1.jpg';
import school2 from '../assets/school2.jpg';
import school3 from '../assets/school3.jpg';
import school4 from '../assets/school4.jpg';

const fallbackImage = "https://via.placeholder.com/800x600?text=Fallback+Image";

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
    images: [school1, school2, school3, school4],
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
    images: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583947581924-860bda6a26de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=600&fit=crop"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1567728744813-23d6c6b0a4b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549517045-bc93de075e53?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop"
    ],
  },
];

const PropertyShowcase = () => {
  const [currentProperty, setCurrentProperty] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Moved changeImage and changeProperty before useEffect
  const changeImage = useCallback((direction) => {
    setCurrentImage((prev) => {
      let next = prev + direction;
      if (next >= properties[currentProperty].images.length) next = 0;
      if (next < 0) next = properties[currentProperty].images.length - 1;
      return next;
    });
  }, [currentProperty]);

  const changeProperty = useCallback((index) => {
    setCurrentProperty(index);
    setCurrentImage(0);
  }, []);

  // Preload next image
  React.useEffect(() => {
    const nextImageIndex = (currentImage + 1) % properties[currentProperty].images.length;
    const img = new Image();
    img.src = properties[currentProperty].images[nextImageIndex];
  }, [currentImage, currentProperty]);

  // Auto-slide with pause on hover
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % properties[currentProperty].images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProperty, isPaused]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') changeImage(-1);
      if (e.key === 'ArrowRight') changeImage(1);
      if (e.key >= '1' && e.key <= '3') changeProperty(parseInt(e.key) - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeImage, changeProperty]);

  // Touch swipe support
  const [touchStart, setTouchStart] = React.useState(null);
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) { // Swipe threshold
      if (diff > 0) changeImage(1); // Swipe left
      else changeImage(-1); // Swipe right
    }
    setTouchStart(null);
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
    <section id="properties" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          Featured Properties
        </motion.h2>
        <motion.div
          className="relative mt-8 sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProperty}
              variants={slide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row gap-6 sm:gap-8"
            >
              {/* Image Section */}
              <div
                className="flex-1 min-h-[300px] sm:min-h-[400px] relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-[20px] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ aspectRatio: '4 / 3' }} // Consistent aspect ratio
              >
                <AnimatePresence>
                  <motion.div
                    key={`image-${currentImage}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={properties[currentProperty].images[currentImage]}
                      alt={`${properties[currentProperty].title} ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => (e.target.src = fallbackImage)}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImage + 1} / {properties[currentProperty].images.length}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-[20px] shadow-lg dark:shadow-2xl flex flex-col justify-center">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-full mb-4 w-fit">
                  {properties[currentProperty].type}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  {properties[currentProperty].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base leading-relaxed">
                  {properties[currentProperty].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  {properties[currentProperty].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-[10px] text-slate-600 dark:text-slate-300 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <div className="text-base sm:text-lg text-blue-600 dark:text-purple-400">{feature.icon}</div>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inquire Now
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:absolute sm:bottom-5 sm:right-5">
            <motion.button
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
              className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-slate-900 dark:text-white" />
            </motion.button>
            <motion.button
              onClick={() => changeImage(1)}
              aria-label="Next image"
              className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-slate-900 dark:text-white" />
            </motion.button>
          </div>
          
          {/* Property Selector Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {properties.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => changeProperty(index)}
                aria-label={`Select property ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProperty 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                    : 'bg-slate-400 hover:bg-slate-500'
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