/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-color': '#2D2D2D',
      },
    },
    // container: {
    //   center: true,
    // },
    fontFamily: {
      'epilogue': ['Epilogue', 'serif'],
      'poppins': ['Poppins', 'serif'],
    },
  },
  plugins: [],
}
