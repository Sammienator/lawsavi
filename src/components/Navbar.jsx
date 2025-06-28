import React from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Initialize from localStorage or default to light mode
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Apply the dark class to the html element and save to localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const scrollY = window.scrollY;
        header.style.background = scrollY > 100 
          ? isDarkMode ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)'
          : isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = scrollY > 100 
          ? '0 2px 25px rgba(0,0,0,0.15)' 
          : '0 2px 20px rgba(0,0,0,0.1)';
        header.style.backdropFilter = 'blur(20px)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <header className="fixed top-0 w-full bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-lg z-50 shadow-shadow-light dark:shadow-shadow-heavy transition-all duration-300">
      <nav className="flex justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto py-4">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-primary-color dark:text-accent-color"
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          Lawsavic
        </motion.a>
        <button
          className="sm:hidden text-text-dark dark:text-text-light text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden sm:flex list-none gap-8 items-center max-md:gap-4">
          {['Home', 'Services', 'Properties', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-text-dark dark:text-text-light font-medium hover:text-primary-color dark:hover:text-accent-color transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-primary-color dark:after:bg-accent-color after:transition-all after:duration-300 hover:after:w-full max-md:text-sm"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="bg-gradient-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
      <motion.div
        className={`sm:hidden fixed top-[72px] left-0 w-full bg-bg-light dark:bg-bg-dark shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {['Home', 'Services', 'Properties', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text-dark dark:text-text-light font-medium text-lg hover:text-primary-color dark:hover:text-accent-color transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="bg-gradient-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;