const scales = [
  { scale: 100, size: '0.8rem' },
  { scale: 200, size: '1rem' },
  { scale: 300, size: '1.25rem' },
  { scale: 400, size: '1.563rem' },
  { scale: 500, size: '1.953rem' },
  { scale: 600, size: '2.441rem' },
  { scale: 'max', size: '3.052rem' }
];
module.exports = {
  collated: true,
  default: scales[0].scale.toString(),
  variants: scales.map(scale => ({
    name: scale.scale.toString(),
    context: {
      scaleClass: [`text-${scale.scale}`],
      text: `${scale.size} - <strong>text-${scale.scale}</strong>`
    }
  }))
};
