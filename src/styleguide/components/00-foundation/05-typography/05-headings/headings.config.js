module.exports = {
  collated: true,
  default: 'h1',
  variants: [...Array(6)].map((_, i) => {
    const level = i + 1;
    return {
      name: `h${level}`,
      label: `Heading ${level}`,
      context: {
        level,
        text: `Heading ${level}`
      }
    };
  })
};
