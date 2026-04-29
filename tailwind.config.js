/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        secondary: '#F5F5F5',
        text: '#1F2937',
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        latin: ['Cinzel', 'serif'], // for footer branding
      }
    },
  },
  plugins: [],
}
