/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F9FA',
        ink: '#2D2D2D',
        accent: '#6C5CE7',
        agree: '#FF6B6B',
        disagree: '#4ECDC4'
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
