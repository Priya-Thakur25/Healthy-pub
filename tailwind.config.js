// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        gray: {
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #3B82F6' },
          '50%': { textShadow: '0 0 5px #1D4ED8, 0 0 10px #1D4ED8, 0 0 15px #1D4ED8' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
