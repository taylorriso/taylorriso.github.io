/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effefb',
          100: '#c7fff8',
          200: '#90fff2',
          300: '#51f7ea',
          400: '#1de4d8',
          500: '#009c94',
          600: '#048079',
          700: '#096662',
          800: '#0d514f',
          900: '#104342',
        },
        accent: {
          50: '#fdfcf9',
          100: '#faf6ed',
          200: '#f4ead4',
          300: '#e9d5a9',
          400: '#dfc07e',
          500: '#d4a855',
          600: '#c48f3d',
          700: '#a37234',
          800: '#845b30',
          900: '#6c4b2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
