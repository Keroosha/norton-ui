module.exports = {
  plugins: [
      require('autoprefixer'),
      require('postcss-font-magician')({
          hosted: ['./src/fonts', '/fonts']
      }),
    require('postcss-css-variables')
  ]
};
