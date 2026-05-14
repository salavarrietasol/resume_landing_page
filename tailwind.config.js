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
        50: '#f5f2ff',
        100: '#ede7ff',
        200: '#d9ccff',
        300: '#bfa6ff',
        400: '#9a72f6',
        500: '#7847e0',
        600: '#6230c9',
        700: '#4f22a7',
        800: '#3f1b86',
        900: '#321668',
        950: '#1d0b45',
      },

      surface: {
        50: '#ffffff',
        100: '#faf9ff',
        200: '#f3f0ff',
        300: '#e8e2fa',
        400: '#b8aecf',
        500: '#756b91',
        600: '#4c4268',
        700: '#2b2342',
        800: '#171332',
        900: '#0c1744',
        950: '#071239',
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
        'gradient-mesh': 'linear-gradient(135deg, #fbfaff 0%, #f3efff 48%, #ebe5ff 100%)',
      },
      boxShadow: {
        'brand': '0 18px 45px rgba(98, 48, 201, 0.16)',
        'brand-lg': '0 24px 80px rgba(98, 48, 201, 0.22)',
        'card': '0 16px 40px rgba(12, 23, 68, 0.10)',
        'glow': '0 0 24px rgba(120, 71, 224, 0.38)',
      },
    },
  },
  plugins: [],
}
