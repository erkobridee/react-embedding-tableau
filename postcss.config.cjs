const isProduction = `${process.env.NODE_ENV}` === 'production';

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},

    // https://tailwindcss.com/docs/optimizing-for-production
    ...(isProduction ? { cssnano: {} } : {}),
  },
};
