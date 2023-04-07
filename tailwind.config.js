/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-light': '#F2F2F2',
        'main-tx-light': '#262626',
        'main-hv': '#7f7f7f',
        'main-bg-dark': '#262626',
        'main-tx-dark': '#f2f2f2'
      },
      fontFamily: {
        'cascadia': ['Cascadia Code', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

