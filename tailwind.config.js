/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
