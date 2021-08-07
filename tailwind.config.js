const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      title: ['Merriweather', 'sans-serif'],
    },
    extend: {
      colors: {
        'darker-gray': '#121314',
      },
      height: {
        '500px': '500px',
        '1100px': '1100px',
      },
      maxWidth: {
        '1366px': '1366px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      height: ['hover'],
      width: ['hover'],
      transform: ['hover'],
    },
  },
  plugins: [],
};
