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
      description: 'Thorough tenant screening with comprehensive background checks to secure reliable, high-quality tenants for your properties.',
      image: screening,
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Rent Collection',
      description: 'Streamlined rent collection with automated reminders, secure payments, and detailed financial reporting.',
      image: collection,
    },
    {
      icon: <FaTools />,
      title: 'Property Maintenance',
      description: 'Proactive maintenance and 24/7 emergency support to keep your properties in pristine condition.',
      image: maintain,
    },
    {
      icon: <FaChartLine />,
      title: 'Investment Consultation',
      description: 'Strategic advice on property investments, market trends, and portfolio optimization for maximum returns.',
      image: investment,
    },
    {
      icon: <FaHandshake />,
      title: 'Full Service Management',
      description: 'End-to-end property management to ensure high occupancy, steady income, and long-term value growth.',
      image: full,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F9FAFB] dark:bg-[#1F2A44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 font-['Inter'] tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerChildren}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 bg-[#F9FAFB] dark:bg-[#1F2A44] rounded-xl p-6 lg:p-8 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300`}
              variants={fadeIn}
            >
              <motion.div
                className="flex-1 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-[350px] object-cover rounded-xl"
                  whileInView={{ y: [20, 0], opacity: [0.8, 1] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="flex-1 flex flex-col justify-center gap-4">
                <motion.div
                  className="text-5xl text-[#3B82F6] dark:text-[#10B981]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white font-['Inter']"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Cta />
      </div>
    </section>
  );
};

export default Services;