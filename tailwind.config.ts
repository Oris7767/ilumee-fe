import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#b21267',
        accent: '#e0b755',
        secondary: '#982170',
        tertiary: '#824542',
        mauve: '#c99894',
        rose: '#eed1d3',
        peach: '#edd8c8',
        ivory: '#f8eed8',
        taupe: '#726758',
        ink: '#1a1a1a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        elegant: '12px',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(130, 69, 66, 0.15)',
        warm: '0 20px 60px -20px rgba(178, 18, 103, 0.18)',
      },
      backgroundImage: {
        'ivory-fade': 'linear-gradient(180deg, #f8eed8 0%, #edd8c8 100%)',
        'cosmic': 'radial-gradient(ellipse at top, #1a1a40 0%, #050510 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;
