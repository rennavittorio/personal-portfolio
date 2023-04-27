/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'main-bg-light': '#F2F2F2',
        'main-tx-light': '#262626',
        'main-hv-light': '#2980B9',
        'main-bg-dark': '#262626',
        'main-tx-dark': '#f2f2f2',
        'main-hv-dark': '#00ff00',
      },
      fontFamily: {
        'cascadia': ['Cascadia Code', 'sans-serif'],
        'fire': ['Fire Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'vt323': ['VT323', 'monospace'],
        'anonymous': ['Anonymous Pro', 'monospace'],
        'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

