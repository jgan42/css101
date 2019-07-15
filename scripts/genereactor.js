#!/usr/bin/env node

const fs = require('fs');

if (process.argv.length !== 3) {
  console.log('Use : ./scripts/genereactor.js "path/to/component_folder"');
  process.exit();
}

const path = process.argv[2];
const splittedPath = path.split('/');
const name = splittedPath[splittedPath.length - 1];
const templatePath = `${__dirname}/templates/COMPONENT_NAME.`;
let relativePath = '';

// Recursively create folder if not exists
for (let i = 0; i < splittedPath.length; i += 1) {
  const dir = splittedPath.slice(0, i + 1).join('/');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } else if (i + 1 === splittedPath.length) {
    console.log('"%s" exists, delete it to avoid overwritting', path);
    process.exit();
  }
  relativePath += '../';
}

// Create index.js
const indexContent = `export { default } from './${name}.component';\n`;
fs.writeFile(`${path}/index.js`, indexContent, 'utf8', err => {
  if (err) return console.log('err', err);
  console.log('index.js created !');
});

// Create style.js
fs.readFile(`${templatePath}style.js`, 'utf8', (err, template) => {
  if (err) return console.log('err', err);
  const result = template.replace(/COMPONENT_NAME/g, name);

  fs.writeFile(`${path}/${name}.style.js`, result, 'utf8', err2 => {
    if (err2) return console.log('err', err2);
    console.log('style.js created !');
  });
});

// Create component.js
fs.readFile(`${templatePath}component.js`, 'utf8', (err, template) => {
  if (err) return console.log('err', err);

  const result = template.replace(/COMPONENT_NAME/g, name);

  fs.writeFile(`${path}/${name}.component.js`, result, 'utf8', err2 => {
    if (err2) return console.log('err', err2);
    console.log('component.js created !');
  });
});
