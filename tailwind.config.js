/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '10%': '10%',
        '90%': '90%',
        '12%': '12%',
        '97': '25rem',
        '130': '40rem',
        '152': '50rem',
      },
      colors: {
        'white-300': '#ddd6cb',
        'orange-custom': ' #ff9b05',
        'orange-custom-100': '#fd4715',
        'orange-custom-200': '#f9b241',
        'orange-custom-300': '#f9572a',
        'orange-custom-400': '#ffc905',
      },
      boxShadow: {
        'custom': '0 0 18px rgba(248, 190, 42, 0.8)',
        'custom2': '0 0 0.5rem rgba(0, 0, 0, 0.5)',
      },
      letterSpacing: {
        'sm': '0.15rem'
      },
      rotate: {
        '-5': 'rotate(-5deg)',
      },
    },
  },
  plugins: [],
}

