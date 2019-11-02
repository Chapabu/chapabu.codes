module.exports = config => {
  // Layout aliases
  config.addLayoutAlias('post', 'layouts/post.njk');

  // Passthrough
  config.addPassthroughCopy('src/site/admin/config.yml');
  config.addPassthroughCopy('src/site/images');
  config.addPassthroughCopy('src/site/styles');

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: 'src/site',
      output: 'dist'
    }
  };
};
