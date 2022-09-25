/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      // Light theme colors
      'primary': '#FFFFFF',
      'black': '#000000',
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
      'emoji': '#eeb517',
      
      // Dark theme colors
      'dark-text': '#FFFFFF',
      'dark-primary': '#FFFFFF', /* 800080 */
      'dark-secondary-bg': '#000000',
      'dark-theme': '#424242',
      'dark-header-color': '#424242',
      'dark-route-link-active': '#ff500b',
      'dark-link-color': '#fff',
      'dark-border-color': '#1cd61c',
      'dark-emoji': '#a2a3c5'
    },
    screens: {
      'sm': '640px',
      'md': '530px',
      'md-menu': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      
      'none': 'none',
      'foto-malta': "url('/assets/img/foto-malta_50.jpg')",
      'foto-malta-grande': "url('/assets/img/foto-malta.jpg')",
      'gradiant': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'button': 'radial-gradient(100% 100% at 100% 0, #47B5FF 0, #1363DF 100%)',
      
    },
    boxShadow: {
      'button': 'rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset',
      'button-focus': '#1363DF 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #1363DF 0 -3px 0 inset',
      'button-hover': 'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #1363DF 0 -3px 0 inset',
      'button-active': '#1363DF 0 3px 7px inset',
      'box': ' 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'box-hover': ' 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'box-dark': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px',
      'box-dark-hover': 'rgba(136, 165, 191, 0.68) 6px 2px 16px 0px',
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
};
