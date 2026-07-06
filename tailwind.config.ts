import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bmw: {
          blue: '#0066B2',
          'dark-blue': '#003A6B',
          white: '#FFFFFF',
          black: '#0A0A0A',
          silver: '#B8B8B8',
          gold: '#C4A574',
          red: '#E31837',
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
        'fluid-xl': 'clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)',
        'fluid-2xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'fluid-3xl': 'clamp(3.5rem, 2.5rem + 5vw, 6rem)',
        'fluid-4xl': 'clamp(4.5rem, 3rem + 7.5vw, 8rem)',
      },
      spacing: {
        '2xs': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem)',
        'xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'sm': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.125rem)',
        'md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',
        'xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',
        '2xl': 'clamp(3rem, 2.4rem + 3vw, 4.5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config