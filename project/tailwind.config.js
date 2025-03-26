/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ff00',
        secondary: '#0a192f',
        background: '#0a0c10',
        text: '#8892b0',
        'text-bright': '#ccd6f6',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};