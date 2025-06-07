// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class
  theme: {
    extend: {
      colors: {
        'primary': '#1A73E8',
        'secondary': '#F6B42F',
        'dark-gray': '#333333',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Your custom animation
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};