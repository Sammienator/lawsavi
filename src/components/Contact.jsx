import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuoteLeft } from 'react-icons/fa';
import hero1 from '../assets/hero1.jpg';


const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scaleHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const teamMembers = [
    { name: 'Benitar Loko', role: 'Property Manager', image: hero1 },
    { name: 'Jane S', role: 'Investment Consultant', image: hero1 },
    { name: 'Michael Brown', role: 'Maintenance Coordinator', image: hero1 },
    { name: 'Emily Davis', role: 'Client Relations', image: hero1 },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-bg-light to-[#f1f5f9] dark:from-bg-dark dark:to-[#1e293b] text-text-dark dark:text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-text-dark dark:text-text-light relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-gradient-primary after:rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          Connect With Us
        </motion.h2>
        <motion.div
          className="h-[400px] sm:h-[500px] rounded-[20px] overflow-hidden shadow-xl dark:shadow-shadow-heavy mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.398777980073!2d36.96015061475387!3d-1.479148998952609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f45b6b7d5e5b3%3A0x8b6c5e2b4c8d9e0f!2sJogra%20House%2C%20Kitengela!5e0!3m2!1sen!2ske!4v1698765432109!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jogra House, Kitengela"
          ></iframe>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="space-y-8">
            <motion.p
              className="text-base sm:text-lg text-text-light dark:text-[#cbd5e1] leading-relaxed max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              Elevate your property investment journey with our expert guidance. Reach out for a personalized consultation and discover unparalleled opportunities.
            </motion.p>
            <div className="grid gap-6">
              {[
                { icon: <FaPhone />, title: 'Phone Numbers', details: ['+254 722 628 583', '+254 722 482 202'] },
                { icon: <FaEnvelope />, title: 'Email Address', details: ['info@lawsavic.co.ke', 'contact@lawsavic.co.ke'] },
                { icon: <FaMapMarkerAlt />, title: 'Office Location', details: ['Jogra House 2nd Floor, Room 35', 'Kitengela, Kenya'] },
                { icon: <FaClock />, title: 'Business Hours', details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 12:00 PM'] },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-bg-dark-card rounded-[15px] shadow-lg dark:shadow-shadow-heavy hover:shadow-xl transition-shadow duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white"
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-dark dark:text-text-light">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-text-light dark:text-[#cbd5e1]">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="p-6 bg-white dark:bg-bg-dark-card rounded-[20px] shadow-lg dark:shadow-shadow-heavy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div className="grid gap-4">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="p-4 rounded-[12px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color transition-all duration-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="p-4 rounded-[12px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color transition-all duration-300"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="p-4 rounded-[12px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color transition-all duration-300"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={scaleHover}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
        <motion.div
          className="mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-text-dark dark:text-text-light mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-gradient-primary after:rounded-full">
            Manager's Remarks
          </h3>
          <motion.div
            className="max-w-3xl mx-auto p-6 bg-white dark:bg-bg-dark-card rounded-[20px] shadow-lg dark:shadow-shadow-heavy flex flex-col sm:flex-row items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <img
              src={hero1}
              alt="Alex Johnson"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <FaQuoteLeft className="text-3xl text-primary-color dark:text-accent-color mx-auto sm:mx-0 mb-4" />
              <p className="text-base sm:text-lg text-text-light dark:text-[#cbd5e1] italic">
                "At Lawsavic, our commitment is to deliver exceptional property management and investment solutions, ensuring our clients achieve their financial goals with peace of mind."
              </p>
              <p className="mt-4 text-sm font-semibold text-text-dark dark:text-text-light">
                - Lawrence Kiambi, Managing Director
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-text-dark dark:text-text-light mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-gradient-primary after:rounded-full">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-white dark:bg-bg-dark-card rounded-[15px] shadow-lg dark:shadow-shadow-heavy text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-text-dark dark:text-text-light">{member.name}</h4>
                <p className="text-sm text-text-light dark:text-[#cbd5e1]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;