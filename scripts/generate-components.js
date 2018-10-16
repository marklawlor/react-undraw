const EOL = require('os').EOL;
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');
const svgr = require('@svgr/core').default;

const illustrations = require('./illustrations.json');

const replaceAttrValues = {
  '#6c63ff': '{props.primaryColor}',
};
const svgProps = {
  style: '{{ height: props.height, width: "100%" }}'
};

// execute
generate();

/**
 * Generate component files.
 */
function generate() {
  const spinner = ora('Generating components ...').start();
  const src = './svg';
  const dest = './src/illustrations';
  const prefix = 'Undraw';
  let promises = [];

  illustrations.forEach(item => {
    const componentName = prefix + pascalCase(item.name);
    const srcPath = path.join(src, item.svg);
    const srcCode = fs.readFileSync(srcPath);
    const destPath = path.join(dest, `${componentName}.js`);

    promises.push(
      svgr(srcCode, { icon: true, replaceAttrValues, svgProps }, { componentName })
        .then(js => fixAttrs(js))
        .then(js => {
          let banner = '';
          banner += '/* eslint-disable */ ';
          banner += EOL;
          banner += EOL;
          return banner + js;
        })
        .then(js => fs.outputFile(destPath, js))
    );
  });

  Promise.all(promises)
    .then(() => spinner.succeed(`Sucessfully generated ${illustrations.length} files!`))
    .catch(error => spinner.fail(error));
}

/**
 * Remove quotes around prop attributes.
 *
 * https://github.com/smooth-code/svgr/issues/205
 */
function fixAttrs(js) {
  Object.keys(replaceAttrValues)
    .map(key => replaceAttrValues[key])
    .filter(value => value.startsWith('{') && value.endsWith('}'))
    .forEach(value => {
      const pattern = new RegExp(`"${value}"`, 'g');
      js = js.replace(pattern, value);
    });

  return js;
}
