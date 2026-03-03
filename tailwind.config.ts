import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'barrel-roll': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '18%, 32%': { transform: 'scale(1.07)' },
          '25%, 39%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.05)' },
          '52%': { transform: 'scale(1)' },
        },
        'bars-grow': {
          '0%': { transform: 'scaleY(0.2)' },
          '55%': { transform: 'scaleY(1.08)' },
          '75%': { transform: 'scaleY(0.97)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'flame-flicker': {
          '0%, 100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '15%': { opacity: '0.92', transform: 'scale(1.03) translateY(-0.5px)' },
          '30%': { opacity: '1', transform: 'scale(0.97) translateY(0.3px)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02) translateY(-0.3px)' },
          '65%': { opacity: '1', transform: 'scale(0.98) translateY(0.2px)' },
          '80%': { opacity: '0.94', transform: 'scale(1.01) translateY(-0.2px)' },
        },
      },
      animation: {
        'barrel-roll': 'barrel-roll 0.6s ease-in-out',
        'heart-beat': 'heart-beat 0.6s ease-in-out',
        'bars-grow': 'bars-grow 0.5s ease-out forwards',
        'flame-flicker': 'flame-flicker 0.8s ease-in-out',
      },
      colors: {
        'pastel-blue': '#E3F2FD',
        'pastel-mint': '#E8F5E9',
        'pastel-blue-dark': '#BBDEFB',
        'pastel-mint-dark': '#C8E6C9',
        teal: {
          600: '#0D9488',
          700: '#0F766E',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
