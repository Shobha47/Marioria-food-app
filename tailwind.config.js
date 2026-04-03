module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,mdx}',
    './src/components/**/*.{js,ts,jsx,mdx}',
    './src/app/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff8a3d',
          DEFAULT: '#ff6a0c',
          dark: '#e55a00',
        },
        brand: {
          bg: '#fffaf7',
          dark: '#1c1c1c',
          gray: '#717171',
          white: '#ffffff',
          black: '#000000',
        },
      },
      fontFamily: {
        serif: ['Averia Serif Libre', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        'ticker-slow': 'ticker 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
