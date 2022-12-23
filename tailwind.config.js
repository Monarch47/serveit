/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#142664',
        'primary-cyan': '#5EDFE8',
        'primary-white': '#FBFBFB',
        'secondary-blue': '#577CD8',
      },
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
