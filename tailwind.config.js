/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ─── Stitch Design System: Full-Stack Luminary ─── */
        background: '#060e20',
        surface: {
          DEFAULT: '#060e20',
          'container-lowest': '#000000',
          'container-low': '#091328',
          container: '#0f1930',
          'container-high': '#141f38',
          'container-highest': '#192540',
          bright: '#1f2b49',
          variant: '#192540',
          dim: '#060e20',
        },
        primary: {
          DEFAULT: '#9fa7ff',
          container: '#8d98ff',
          dim: '#8a95ff',
          fixed: '#8d98ff',
          'fixed-dim': '#7f8af6',
        },
        secondary: {
          DEFAULT: '#62fae3',
          container: '#006b5f',
          dim: '#50ebd5',
        },
        tertiary: {
          DEFAULT: '#c890ff',
          container: '#bc80f8',
          dim: '#be83fa',
        },
        error: {
          DEFAULT: '#ff6e84',
          container: '#a70138',
          dim: '#d73357',
        },
        'on-background': '#dee5ff',
        'on-surface': '#dee5ff',
        'on-surface-variant': '#a3aac4',
        outline: '#6d758c',
        'outline-variant': '#40485d',
        'on-primary': '#101b8b',
        'on-primary-container': '#000a7b',
        'on-secondary': '#005c52',
        'on-tertiary': '#400072',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 24px rgba(159, 167, 255, 0.2)',
        'glow-lg': '0 0 48px rgba(159, 167, 255, 0.15)',
        'glow-secondary': '0 0 24px rgba(98, 250, 227, 0.15)',
        'glow-tertiary': '0 0 24px rgba(200, 144, 255, 0.15)',
        ambient: '0 24px 48px rgba(159, 167, 255, 0.08)',
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #9fa7ff, #8d98ff)',
        'gradient-hero': 'linear-gradient(135deg, #9fa7ff 0%, #c890ff 50%, #62fae3 100%)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};