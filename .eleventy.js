module.exports = config => {
  config.addLayoutAlias('post', 'layouts/post.njk');

  // Passthru
  config.addPassthroughCopy('src/admin/config.yml');

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
