const fractal = (module.exports = require('@frctl/fractal').create()); // eslint-disable-line
const mandelbrot = require('@frctl/mandelbrot');
const path = require('path');
const nunjucks = require('@frctl/nunjucks');
/**
 * PROJECT
 */
fractal.set('project.title', 'Digital Platform');

/**
 * TEMPLATING
 */
fractal.components.engine(nunjucks);
fractal.components.set('ext', '.njk');
// We manually set this as our base template lives under the _fractal subdirectory.
fractal.components.set('default.preview', '@preview');

/**
 * SOURCES
 */
fractal.components.set(
  'path',
  path.join(__dirname, 'src/styleguide/components')
);

fractal.docs.engine('@frctl/nunjucks');
fractal.docs.set('path', path.join(__dirname, 'src/styleguide/docs'));
// fractal.web.set('static.path', path.join(__dirname, 'dist/styleguide'));

/**
 * BUILD
 */
fractal.web.set('builder.dest', path.join(__dirname, 'dist/styleguide'));

/**
 * THEME CUSTOMISATION
 */
const theme = mandelbrot({
  nav: ['docs', 'components']
});

// theme.addStatic(`${__dirname}/dist/styles`, '/_subtheme/styles');
// theme.addStatic(`${__dirname}/dist/fonts`, '/_subtheme/fonts');
// theme.addStatic(`${__dirname}/dist/images`, '/_subtheme/images');
// theme.addStatic(`${__dirname}/src/components/_fractal`, '/_subtheme/fractal');

fractal.web.theme(theme);
