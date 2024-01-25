/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },

      'xl': { 'max': '1280px' },

      'lg': { 'max': '1024px' },

      'md': { 'max': '768px' },

      'sm': { 'max': '640px' },
    },
    extend: {
      backgroundImage: {
        'self': "url('/src/Utilities/myself/image.png')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    fontFamily: {
      grapeNuts: ['Grape Nuts', "cursive"],
    }
  },
  plugins: [],
}

