import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        asian: ['var(--font-noto)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.85' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
        scrollY: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 2.5s ease-in-out infinite',
        scrollY: 'scrollY 20s linear infinite',
        fadeUp: 'fadeUp 1100ms cubic-bezier(0.19, 1, 0.22, 1) both',
        fadeIn: 'fadeIn 1000ms cubic-bezier(0.19, 1, 0.22, 1) both',
        scaleIn: 'scaleIn 1100ms cubic-bezier(0.19, 1, 0.22, 1) both',
      },
    },
  },
  plugins: [],
}
export default config

