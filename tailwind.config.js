module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      title: ['Merriweather', 'sans-serif'],
    },
    extend: {
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
