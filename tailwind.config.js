/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Usiamo 'class' per il toggle manuale
  theme: {
    extend: {
      colors: {
        bibbiaHighlight: {
          light: '#fef08a', // giallo tenue
          dark: '#a16207',
        }
      }
    },
  },
  plugins: [],
}
