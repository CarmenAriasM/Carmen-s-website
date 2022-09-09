/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      // Light theme colors
      'primary': '#FFFFFF',
      'secondary-bg': '#fff',
      'theme': '#fff',
      'header-color': '#000000',
      'route-link-active': '#fff',
      'link-color': '#555050',
      'border-color': '#555050',

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
