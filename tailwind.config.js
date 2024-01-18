/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,d}",
  ],
  theme: {
    fontFamily: {
      proxima: ['proxima','sans-serif'],
      Grotesque: ['Grotesque','sans-serif'],
      GrotesqueBold: ['GrotesqueBold','sans-serif'],
      proximaCond: ['proximaCond', 'sans-serif'],
      proximaLight: ['proximaLight', 'sans-serif'],
      proximaRegular: ['proximaRegular', 'sans-serif'],
      proximaBold: ['proximaBold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}