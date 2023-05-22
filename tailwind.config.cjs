/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    // colors: {},
    fontFamily: {
      body: ['Figtree', 'san-serif'],
      brand: ['Jost', 'sans-serif'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.625rem',
      '2xl': '2.125rem',
      '3xl': '2.625rem',
      '4xl': '3.5rem',
      '5xl': '4.5rem',
    },
    screens: {
      md: '800px',
      lg: '1328px',
    },
    container: {
      screens: {
        lg: '1328px',
      },
      padding: {
        DEFAULT: '1.5rem',
      },
      center: true,
    },
    extend: {
      height: {
        'screen-sm': ['100vh /* Fallback */', '100svh'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      // Add your custom styles here
      addUtilities({
        '.xjy-transition': {
          '@apply duration-200 ease-in-out': {},
        },
        '.sr-only': {
          '@apply absolute p-0 overflow-hidden whitespace-nowrap border-0': {},
          width: '1px',
          height: '1px',
          margin: '-1px',
          clip: 'rect(0, 0, 0, 0)',
        },
      });
    }),
  ],
};
