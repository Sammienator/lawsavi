import React from 'react';
import { motion } from 'framer-motion';

const LandAdvert = () => {
  return (
    <section className=" py-4 overflow-hidden">
      <div className="relative">
        <motion.div
          className="whitespace-nowrap text-text-light text-base sm:text-lg font-semibold"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          For Sale: Prime 2-Acre Plot in Namanga! 🌍 Ideal for residential or commercial development. Contact us now for details! 📞
        </motion.div>
      </div>
    </section>
  );
};

export default LandAdvert;