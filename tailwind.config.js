/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'scale': 'scale 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-disk': 'rotateDisk 10s linear infinite',
      },
      keyframes: {
        scale: {
          '0%': {
            transform: 'scale(2)',
            opacity: '0',
            boxShadow: '0px 0px 50px rgba(255, 165, 0, 0.5)',
          },
          '50%': {
            transform: 'translate(0px, -5px) scale(1)',
            opacity: '1',
            boxShadow: '0px 8px 20px rgba(255, 165, 0, 0.5)',
          },
          '100%': {
            transform: 'translate(0px, 5px) scale(0.1)',
            opacity: '0',
            boxShadow: '0px 10px 20px rgba(255, 165, 0, 0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        rotateDisk: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        zinc: {
          '50': '#fafafa',
          '100': '#f4f4f5',
          '200': '#e4e4e7',
          '300': '#d4d4d8',
          '400': '#a1a1aa',
          '500': '#71717a',
          '600': '#52525b',
          '700': '#3f3f46',
          '800': '#27272a',
          '900': '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}