/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

export default {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
      '1/4': '25%',
      '1/5': '20%',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
      '12xl': ['144px', '174px'],
      '16xl': ['192px', '212px'],
    },
    extend: {
      // typography: {
      //   'fade-out-content': {
      //     padding: '10px', // Add padding as needed
      //     backgroundImage: 'linear-gradient(transparent, white 20px, white)', // Adjust the gradient and distance as needed
      //     maskImage: 'linear-gradient(180deg, transparent 10%, white 90%)', // Adjust the gradient and distance as needed
      //   },
      // },
      fontSize: {
        xsm: '0.7rem',
        fts: '0.5rem',
      },
      fontFamily: {
        quicksand: [
          'Quicksand',
          'Quicksand-Regular',
          'Quicksand-Medium',
          'Quicksand-Bold',
          'sans-serif',
        ],
        montserrat: ['Montserrat', 'sans-serif'],
        vastshadow: ['Vast Shadow', 'serif'],
      },
      fontWeight: {
        quicksand: {
          light: 300,
          normal: 400,
          medium: 600,
          bold: 700,
        },
      },
      colors: {
        orange: '#F8A519',
        brown: '#685E57',
        jet: '#2F2E2E',
        garnet: '#683730',
        linen: '#F3EBE0',
        'card-bg-1': '#E99B87',
        'card-bg-2': '#e8cea4',
        'card-bg-2-light': '#fcfaf5',
        'card-bg-2-lighter': '#f7efe1',
        'rating-neutral': '#edd9b8',
        'rating-good': '#b7eebf',
        'rating-bad': '#ff7373',
        'card-bg-3': '#564C4D',
        'card-txt': '#48100E',
        'card-like': '#48100E',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    // require('@tailwindcss/typography')
  ],
};
