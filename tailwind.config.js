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

      // Dark theme colors
      'dark-text': '#FFFFFF',
      'dark-primary': '#800080',
      'dark-secondary-bg': '#000000',
      'dark-theme': '#424242',
      'dark-header-color': '#424242',
      'dark-route-link-active': '#ff500b',
      'dark-link-color': '#fff',
      'dark-border-color': '#1cd61c',
    },
    extend: {},
  },
  plugins: [],
};
