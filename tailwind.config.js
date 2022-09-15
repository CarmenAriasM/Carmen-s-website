/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      // Light theme colors
      'primary': '#FFFFFF',
      'secondary-bg': '#DFF6FF',
      'theme': '#fff',
      'header-color': '#06283D',
      'route-link-active': '#1363DF',
      'link-color': '#1363DF',
      'border-color': '#47B5FF',
      'grey-moon': '#a2a3c5',
      'grey-sun': '#dbcc0b',
      'color1': '#192E47',
      'color2': '#030617',
      
      // Dark theme colors
      'dark-text': '#FFFFFF',
      'dark-primary': '#FFFFFF', /* 800080 */
      'dark-secondary-bg': '#000000',
      'dark-theme': '#424242',
      'dark-header-color': '#424242',
      'dark-route-link-active': '#ff500b',
      'dark-link-color': '#fff',
      'dark-border-color': '#1cd61c',
    },
    screens: {
      'sm': '640px',
      'md': '530px',
      'md-menu': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
   /*  backgroundImage: {
      'gradient-radial': 'radial-gradient(ellipse at bottom, #192E47 0%, #030617 100%)', 
      'gradient-radial2': 'radial-gradient(ellipse at bottom, #DFF6FF 0%, #1363DF 100%)', 
    }, */
    extend: {},
  },
  plugins: [],
};
