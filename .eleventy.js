module.exports = config => {
  // Layout aliases
  config.addLayoutAlias('post', 'layouts/post.njk');

  // Passthrough
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/images');

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
