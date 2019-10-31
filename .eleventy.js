module.exports = eleventyConfig => {
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
