module.exports = config => {
  // Layout aliases
  config.addLayoutAlias('post', 'layouts/post.njk');

  // Passthrough
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/styles');

  // Don't ignore .gitignore files
  config.setUseGitIgnore(false);

  // BrowserSync config
  config.setBrowserSyncConfig({
    open: true,
    browser: 'firefox developer edition',
    https: true
  });

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
