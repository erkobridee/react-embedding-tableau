/*
  default tailwind css configuration
  https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

  Customizing PostCSS Config
  https://nextjs.org/docs/advanced-features/customizing-postcss-config

  theme configuration
  https://tailwindcss.com/docs/theme

  customizing colors
  https://tailwindcss.com/docs/customizing-colors

  naming colors
  https://tailwindcss.com/docs/customizing-colors#naming-your-colors
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svg}'],

  theme: {
    extend: {
      fontFamily: {
        body: [
          'Inter',
          'Avenir',
          'ui-sans-serif',
          'Helvetica',
          'Arial',
          'sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },

      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },

  plugins: [],
};
