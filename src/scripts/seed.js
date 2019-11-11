const faker = require('faker');
const [count = 10] = process.argv.slice(2);
const fs = require('fs');
const path = require('path');

const images = [
  'https://res.cloudinary.com/chapabu/image/upload/v1572649632/sample.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649647/samples/landscapes/landscape-panorama.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649644/samples/landscapes/nature-mountains.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649641/samples/landscapes/beach-boat.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649642/samples/ecommerce/leather-bag-gray.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649642/samples/ecommerce/accessories-bag.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649643/samples/food/spices.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649638/samples/landscapes/girl-urban-view.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649639/samples/people/boy-snow-hoodie.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649640/samples/animals/three-dogs.jpg',
  'https://res.cloudinary.com/chapabu/image/upload/v1572649640/samples/landscapes/architecture-signs.jpg'
];

const writeFile = () => {
  const title = faker.lorem.sentence();
  const image = faker.random.arrayElement(images);

  const md = `---
layout: post
title: ${title}
date: 2019-${faker.random.number(12)}-${faker.random.number(28)}T23:23:52.845Z
image: ${image}
metadata:
  description: ${faker.lorem.sentence()}
  social_image: ${image}
  title: ${title}
---
# ${title}

${faker.lorem.paragraphs(2)}

## ${faker.lorem.sentence()}

${faker.lorem.paragraphs(2)}`;

  const filePath = path.resolve(
    __dirname,
    '..',
    'posts',
    `seed-${faker.lorem.slug()}.md`
  );

  fs.writeFile(filePath, md, err => {
    if (err) throw err;

    console.log(`File saved to: ${filePath}`);
  });
};

[...Array(count)].forEach((_, i) => {
  writeFile();
});
