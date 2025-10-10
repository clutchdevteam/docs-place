/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        black: '#122E36',
        primary: {
          DEFAULT: '#101010',
          light: '#101010',
        },
        secondary: {
          DEFAULT: '#67BF7F',
          light: '#67BF7F',
        },
        'deep-blue': 'rgba(18, 46, 54, 0.94)',
        'accent-blue': {
          light: 'rgba(163, 210, 214)',
          dark: '#6fadaa',
        },
        'accent-olive': {
          light: 'rgba(156, 173, 114)',
          dark: 'rgba(112, 156, 79)',
        },
        'accent-forest': {
          light: 'rgba(114, 173, 132)',
          dark: '#508c62',
        },
      },
      fontFamily: {
        display: ['Oswald', '-apple-system', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
