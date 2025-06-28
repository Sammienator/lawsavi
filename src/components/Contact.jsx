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

  return (
    <section id="contact" className="pt-16 sm:pt-24 pb-0 bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-12 sm:mb-16">
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-text-dark dark:text-text-light"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mb-8 sm:mb-12 opacity-90 text-text-light dark:text-[#cbd5e1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              Ready to transform your property investment experience? Our team of experts is here to help you maximize your returns while minimizing your stress. Contact us today for a free consultation.
            </motion.p>
            <div className="grid gap-6 sm:gap-8">
              {[
                { icon: <FaPhone />, title: 'Phone Numbers', details: ['+254 722 628 583', '+254 722 482 202'] },
                { icon: <FaEnvelope />, title: 'Email Address', details: ['info@lawsavic.co.ke', 'contact@lawsavic.co.ke'] },
                { icon: <FaMapMarkerAlt />, title: 'Office Location', details: ['Jogra House 2nd Floor, Room 35', 'Kitengela, Kenya'] },
                { icon: <FaClock />, title: 'Business Hours', details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 12:00 PM'] },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-bg-gray dark:bg-bg-dark-card/50 rounded-[15px] shadow-shadow-light dark:shadow-shadow-heavy hover:translate-x-3 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                >
                  <div className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-bg-light dark:bg-bg-dark-card rounded-full flex items-center justify-center text-primary-color dark:text-accent-color">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 text-text-dark dark:text-text-light">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="opacity-80 text-sm sm:text-base text-text-light dark:text-[#cbd5e1]">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 p-6 bg-bg-gray dark:bg-bg-dark-card rounded-[15px] shadow-shadow-light dark:shadow-shadow-heavy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <div className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="p-3 rounded-[10px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-text-light/20 dark:border-text-light/10 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="p-3 rounded-[10px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-text-light/20 dark:border-text-light/10 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="p-3 rounded-[10px] bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light border border-text-light/20 dark:border-text-light/10 focus:outline-none focus:ring-2 focus:ring-primary-color dark:focus:ring-accent-color"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-color dark:bg-accent-color text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
          <motion.div
            className="h-[400px] sm:h-[500px] rounded-[20px] overflow-hidden shadow-shadow-heavy dark:shadow-shadow-heavy"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;