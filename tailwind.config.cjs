/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'Manrope', 'sans-serif']
      },
      colors: {
        primary: '#2563EB',
        secondary: '#1D4ED8',
        gold: '#C8A75B',
        softGold: '#D6B97A',
        darkBase: '#06080D',
        darkSecondary: '#0B1220',
        card: '#0E1625',
        cardAlt: '#111827',
        border: 'rgba(255,255,255,0.08)',
        textMain: '#F8FAFC',
        textSecondary: '#A1AABD',
        textMuted: '#7C8799'
      }
    }
  },
  plugins: []
};