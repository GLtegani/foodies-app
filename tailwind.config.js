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
        'orange-custom-500': '#ff8a05',
        'orange-custom-600': '#2c1e19',
        'orange-custom-700': '#25200f',
        'orange-custom-800': '#cfa69b',
        'orange-custom-900': '#6e6464',
        'orange-custom-1000': '#13120f',
        'orange-custom-1100': '#b3aea5',
        'orange-custom-1200': '#454952',
        'orange-custom-1300': ' #1c2027',
        'orange-custom-1400': '#f99f2a',
        'orange-custom-1500': '#1f252d',
        'error': '#262626',
        'error-p': '#ddd8d8',
        'disabled': '#ccc',
        'disabled2': '#979797',
        'button-image': '#a4abb9',
        'button-hover-2': '#b3b9c6',
      },
      boxShadow: {
        'custom': '0 0 18px rgba(248, 190, 42, 0.8)',
        'custom2': '0 0 0.5rem rgba(0, 0, 0, 0.5)',
        'custom3': '0 0 12px rgba(0, 0, 0, 0.3)',
        'custom4': '0 0 12px rgba(242, 100, 18, 0.8)',
        'custom5': '0 2px 5px rgba(0, 0, 0, 0.3);'
      },
      letterSpacing: {
        'sm': '0.15rem'
      },
      rotate: {
        '-5': 'rotate(-5deg)',
      },
      maxWidth: {
        '6.5xl': '75rem',
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}

