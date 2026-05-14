/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['"Bricolage Grotesque"'],
      },
      colors: {
        brand: {
          50: '#f0f0ff',
          100: '#e0e0fe', 
          200: '#c4c3fd', 
          300: '#a29afb', 
          400: '#8470f8', //color principal claro
          500: '#210f52', //color principal
          600: '#5c30e8', //color hover
          700: '#4e22ce', 
          800: '#401da7',
          900: '#361b84', 
          950: '#210f52', //color más oscuro para texto y detalles
        },
        surface: {
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a26',
          600: '#222232',
          500: '#2d2d42',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a26 50%, #0a0a0f 100%)',
      },
      boxShadow: {
        'brand': '0 0 40px rgba(108, 78, 243, 0.15)',
        'brand-lg': '0 0 80px rgba(108, 78, 243, 0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'glow': '0 0 20px rgba(108, 78, 243, 0.4)',
      },
    },
  },
  plugins: [],
}
