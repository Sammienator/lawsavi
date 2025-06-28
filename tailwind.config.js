/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        'bg-gray': '#f1f5f9',
        'bg-light': '#ffffff',
        'bg-dark': '#0f172a',
        'bg-dark-card': '#1e293b',
        'text-dark': '#1e293b',
        'text-light': '#64748b',
        'primary-color': '#2563eb',
        'accent-color': '#60a5fa',
        'gradient-primary': 'linear-gradient(90deg, #2563eb, #7c3aed)',
        'gradient-secondary': 'linear-gradient(90deg, #60a5fa, #7c3aed)',
      },
      boxShadow: {
        'shadow-light': '0 4px 20px rgba(0,0,0,0.1)',
        'shadow-heavy': '0 8px 30px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};