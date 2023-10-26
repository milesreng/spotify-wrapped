/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'default-light': '#e9e8ee',
      'gray': {
        'light': '#b4b1b8',
        DEFAULT: '#6f6d72',
        'dark': '#333136',
      }, 
      'navy': {
        DEFAULT: '#101b39'
      },
      'spotify-green': '#1ED760',
      slate: colors.slate,
      black: colors.black
    },
    extend: {
      fontFamily: {
        'mono': ['mono'],
        'header': ['"Red Hat Display"', 'sans'],
        'content': ['"Noto Sans', 'serif']
      },
    },
  },
  plugins: [],
}

