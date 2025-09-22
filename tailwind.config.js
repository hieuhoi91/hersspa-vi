/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs400: '400px',
        xs: '475px',
      },
      clipPath: {
        triangle: 'polygon(100% 0, 0 0, 100% 100%)',
      },
      colors: {
        primary: '#5c8c30',
      },
    },
  },
  plugins: [],
};
