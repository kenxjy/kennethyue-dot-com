/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const darkModeClassName = '.theme-dark';

const mainColors = {
  primary: {
    light: '#00A393',
    DEFAULT: '#028EA1',
    dark: '#05648A',
  },
  accent: {
    dark: '#A12825',
    DEFAULT: '#EF6F6C',
    light: '#F7F9DD',
  },
  gray: {
    50: '#FFFFFF',
    100: '#F3F4F7',
    200: '#E3E6EE',
    300: '#C3CADB',
    400: '#A3ACC8',
    500: '#8490B5',
    600: '#6474A2',
    700: '#505D84',
    800: '#3D4663',
    900: '#283044',
    950: '#141925',
  },
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', darkModeClassName],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: mainColors.primary,
      accent: mainColors.accent,
      gray: mainColors.gray,
      overlay: mainColors.gray[50],
    },
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
    plugin(({ addBase, addUtilities, addVariant, theme }) => {
      // Add your custom styles here
      // addBase({
      //   ':root': {
      //     '--gradient-stop-1': theme('colors.primary.dark'),
      //     '--gradient-stop-2': theme('colors.primary.DEFAULT'),
      //     '--gradient-stop-3': theme('colors.primary.light'),
      //   },
      //   [`:root${darkModeClassName}`]: {
      //     '--gradient-stop-1': theme('colors.accent.light'),
      //     '--gradient-stop-2': theme('colors.primary.DEFAULT'),
      //     '--gradient-stop-3': theme('colors.primary.light'),
      //   },
      // });

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

      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
