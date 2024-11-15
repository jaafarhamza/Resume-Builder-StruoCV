/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'media',
  safelist: [
    'bg-blue-500',
    'bg-gray-500',
    'text-red-500',
    'hover:bg-green-500', 
  ],
};
