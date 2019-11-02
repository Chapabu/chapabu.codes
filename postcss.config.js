module.exports = ctx => ({
  map: ctx.options.map,
  // prettier-ignore
  plugins: [
    require('postcss-import'),
    require('cssnano')
  ]
});
