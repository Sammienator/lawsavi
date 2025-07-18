import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const LandAdvert = () => {
  const advertText = (
    <>
      <FaMapMarkerAlt className="inline-block mr-2 text-primary-color dark:text-accent-color" />
      For Sale: Prime 2-Acre Plot in Namanga! Ideal for residential or commercial development.
      <FaPhoneAlt className="inline-block mx-2 text-primary-color dark:text-accent-color" />
      Contact us now for details!
    </>
  );

  return (
    <section className="py-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block animate-marquee whitespace-nowrap text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium font-['Inter']">
          {advertText}
          <span className="mx-8" />
          {advertText}
          <span className="mx-8" />
          {advertText}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-800/20 to-transparent pointer-events-none" />
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-66.66%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LandAdvert;