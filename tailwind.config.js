/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548', // Marrom médio
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
        
        iron: {
          50: '#e5e5e5',
          100: '#cccccc',
          200: '#b2b2b2',
          300: '#999999',
          400: '#808080',  // Ferro claro
          500: '#666666',  // Ferro escuro (ideal para prego)
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',  // Ferro escuro metálico
          900: '#000000',  // Preto metálico (para um efeito mais escuro)
        },
      },
    },
  },

  plugins: [],
};
