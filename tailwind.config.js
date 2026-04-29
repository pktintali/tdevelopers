/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0c0c0f',
          850: '#101015',
          800: '#15151c',
          700: '#1d1d26',
          600: '#262631'
        },
        brand: {
          50:  '#fff1f1',
          200: '#ffc2c2',
          300: '#ff9999',
          400: '#ff5757',
          500: '#ef2b2b',
          600: '#dc1414',
          700: '#b80f0f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif']
      },
      letterSpacing: { tightest: '-0.04em' },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 14s linear infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }
      }
    }
  },
  plugins: []
};
