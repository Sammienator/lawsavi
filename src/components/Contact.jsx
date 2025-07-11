import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-slate-900 dark:text-white relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          Connect With Us
        </motion.h2>
        
        <motion.div
          className="h-[400px] sm:h-[500px] rounded-[20px] overflow-hidden shadow-xl dark:shadow-2xl mb-12 sm:mb-16 border border-slate-200 dark:border-slate-700"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-8">
            <motion.p
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl"
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
                  className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-[15px] shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-slate-700/50 transition-all duration-300 border border-slate-100 dark:border-slate-700"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-slate-600 dark:text-slate-300 font-medium">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 bg-white dark:bg-slate-800 rounded-[20px] shadow-lg dark:shadow-2xl border border-slate-100 dark:border-slate-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <div className="grid gap-6">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="p-4 rounded-[12px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-400"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="p-4 rounded-[12px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-400"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="p-4 rounded-[12px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-400 resize-none"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-500"
                variants={scaleHover}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;