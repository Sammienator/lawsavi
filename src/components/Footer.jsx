import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-bg-dark text-white dark:text-text-light py-12 sm:py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-semibold text-accent-color mb-4 sm:mb-6">Lawsavic Property Management</h3>
            <p className="mb-4 text-sm sm:text-base">
              Your trusted partner in property management excellence. We provide comprehensive solutions for residential and commercial properties across Kenya.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, label: 'Facebook' },
                { icon: <FaTwitter />, label: 'Twitter' },
                { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaWhatsapp />, label: 'WhatsApp' },
              ].map((social, idx) => (
                <button
                  key={idx}
                  aria-label={`Visit our ${social.label} page`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bg-dark-card dark:bg-bg-light/10 flex items-center justify-center hover:bg-primary-color dark:hover:bg-accent-color hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-sm sm:text-base text-white dark:text-text-light">{social.icon}</div>
                </button>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-semibold text-accent-color mb-4 sm:mb-6">Our Services</h3>
            <ul className="list-none text-sm sm:text-base">
              {['Property Management', 'Tenant Screening', 'Rent Collection', 'Property Maintenance', 'Investment Consultation', 'Market Research'].map((item, idx) => (
                <li key={idx} className="mb-3 sm:mb-4">
                  <a href="#services" className="text-[#cbd5e1] dark:text-text-light hover:text-accent-color transition-all duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-semibold text-accent-color mb-4 sm:mb-6">Quick Links</h3>
            <ul className="list-none text-sm sm:text-base">
              {['Home', 'Services', 'Properties', 'Contact', 'About Us', 'Privacy Policy'].map((item, idx) => (
                <li key={idx} className="mb-3 sm:mb-4">
                  <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-[#cbd5e1] dark:text-text-light hover:text-accent-color transition-all duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}>
            <h3 className="text-base sm:text-lg font-semibold text-accent-color mb-4 sm:mb-6">Contact Information</h3>
            <ul className="list-none text-sm sm:text-base">
              <li className="mb-3 sm:mb-4"><FaPhone className="mr-2 inline" /> +254 722 628 583</li>
              <li className="mb-3 sm:mb-4"><FaPhone className="mr-2 inline" /> +254 722 482 202</li>
              <li className="mb-3 sm:mb-4"><FaEnvelope className="mr-2 inline" /> info@lawsavic.co.ke</li>
              <li className="mb-3 sm:mb-4"><FaMapMarkerAlt className="mr-2 inline" /> Jogra House, Kitengela</li>
              <li><FaClock className="mr-2 inline" /> Mon - Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 12:00 PM</li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-[#334155] dark:border-text-light/20 pt-4 text-center opacity-70 text-sm sm:text-base">
          <p>© 2025 Lawsavic Property Management. All rights reserved. Samuel Mugo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;