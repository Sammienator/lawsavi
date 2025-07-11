import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero1 from '../assets/hero1.jpg';

const ManagerAndTeam = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    { 
      name: 'Benitar Loko', 
      role: 'Property Manager', 
      image: hero1,
      quote: "Every property has potential. My job is to unlock it and maximize its value for our clients."
    },
    { 
      name: 'Jane S', 
      role: 'Investment Consultant', 
      image: hero1,
      quote: "Smart investments aren't just about numbers—they're about understanding market trends and client dreams."
    },
    { 
      name: 'Michael Brown', 
      role: 'Maintenance Coordinator', 
      image: hero1,
      quote: "A well-maintained property is a valuable property. Excellence in upkeep ensures lasting returns."
    },
    { 
      name: 'Emily Davis', 
      role: 'Client Relations', 
      image: hero1,
      quote: "Building relationships is the foundation of our success. Every client deserves personalized attention."
    },
  ];

  // Auto-rotate team members every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const handlePrevious = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Manager's Remarks Section */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            A Message from Our Managing Director
          </h2>
          
          <motion.div
            className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-[24px] shadow-xl dark:shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Manager's Image */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={hero1}
                    alt="Lawrence Kiambi"
                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-8 border-white shadow-2xl"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
                    <FaQuoteLeft className="text-blue-600 text-xl" />
                  </div>
                </div>
              </div>
              
              {/* Manager's Message */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Welcome to Lawsavic Property Management, where excellence meets innovation in the real estate sector. 
                    With over a decade of experience in property investment and management, we've built our reputation on 
                    trust, transparency, and delivering exceptional results for our clients.
                  </p>
                  
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Our approach is centered on understanding each client's unique needs and crafting personalized solutions 
                    that maximize returns while minimizing risks. We believe that successful property investment goes beyond 
                    just buying and selling – it's about building lasting relationships and creating sustainable wealth.
                  </p>
                  
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    At Lawsavic, we leverage cutting-edge technology and market insights to stay ahead of industry trends. 
                    Our comprehensive services include property acquisition, management, maintenance, and strategic investment 
                    planning, all delivered with the highest standards of professionalism.
                  </p>
                  
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    I invite you to experience the difference that comes with working with a team that genuinely cares about 
                    your success. Together, we'll turn your property investment dreams into reality, ensuring peace of mind 
                    and exceptional returns every step of the way.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-600">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lawrence Kiambi</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-purple-400 mt-1">Managing Director & Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Carousel Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Meet Our Expert Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Dedicated professionals committed to your success
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Team Member Carousel */}
            <div className="relative h-96 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" custom={currentTeamMember}>
                <motion.div
                  key={currentTeamMember}
                  custom={currentTeamMember}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-[20px] shadow-xl dark:shadow-2xl border border-slate-100 dark:border-slate-700 p-8 mx-4">
                    <div className="flex flex-col items-center">
                      <img
                        src={teamMembers[currentTeamMember].image}
                        alt={teamMembers[currentTeamMember].name}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-slate-200 dark:border-slate-600 shadow-lg mb-6"
                      />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {teamMembers[currentTeamMember].name}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-purple-400 font-medium mb-4">
                        {teamMembers[currentTeamMember].role}
                      </p>
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-600 dark:text-purple-400 opacity-30" />
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic text-center max-w-sm leading-relaxed px-4">
                          "{teamMembers[currentTeamMember].quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-purple-400 hover:border-blue-600 dark:hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaChevronLeft />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamMember(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTeamMember
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-purple-400 hover:border-blue-600 dark:hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaChevronRight />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  key={currentTeamMember}
                />
              </div>
          
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagerAndTeam;