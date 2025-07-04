import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaMoneyBillWave, FaTools, FaChartLine, FaHandshake } from 'react-icons/fa';
import Cta from './Cta.jsx';
import screening from '../assets/screening.jpg';
import collection from '../assets/collection.jpg';
import maintain from '../assets/maintain.jpg';
import investment from '../assets/investment.jpg';
import full from '../assets/full.jpg';

const Services = () => {
  const servicesData = [
    {
      icon: <FaUsers />,
      title: 'Tenant Screening',
      description: 'Professional tenant screening and verification to ensure reliable, quality tenants for your properties with comprehensive background checks.',
      image: screening,
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Rent Collection',
      description: 'Efficient rent collection systems with automated reminders, secure payment processing, and detailed financial reporting.',
      image: collection,
    },
    {
      icon: <FaTools />,
      title: 'Property Maintenance',
      description: 'Comprehensive property maintenance and repair services to keep your investments in top condition with 24/7 emergency support.',
      image: maintain,
    },
    {
      icon: <FaChartLine />,
      title: 'Investment Consultation',
      description: 'Expert advice on property investment opportunities, market analysis, and portfolio optimization strategies for maximum returns.',
      image: investment,
    },
    {
      icon: <FaHandshake />,
      title: 'Full Service Management',
      description: 'Complete property management solutions ensuring maximum occupancy, reliable income streams, and property value appreciation.',
      image: full,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-bg-gray dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-light mb-8 sm:mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-secondary after:rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeIn}
        >
          Our Services
        </motion.h2>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 sm:gap-12 mb-12 sm:mb-16`}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, margin: '-100px' }}
            variants={fadeIn}
          >
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl shadow-shadow-light dark:shadow-shadow-heavy"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl text-primary-color dark:text-accent-color mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-dark dark:text-text-light mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-text-light dark:text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
        <Cta />
      </div>
    </section>
  );
};

export default Services;