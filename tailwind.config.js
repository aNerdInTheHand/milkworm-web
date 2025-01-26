/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        background: '#1a1a1a',
        text: '#ffffff',
        accent: '#ffe66d',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '3px 3px 0 #ffe66d' },
          '25%': { textShadow: '-3px -3px 0 #ffe66d' },
          '50%': { textShadow: '3px -3px 0 #ffe66d' },
          '75%': { textShadow: '-3px 3px 0 #ffe66d' },
          '100%': { textShadow: '3px 3px 0 #ffe66d' },
        }
      },
    },
  },
  plugins: [],
} 