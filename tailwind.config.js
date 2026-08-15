/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1c1c1c',
          light: '#f5f5f4',
          primary: '#9D2119',
          secondary: '#2e2e2e',
          gray: '#6e6e6e',
        },
      },
    },
  },
  plugins: [],
};
