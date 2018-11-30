const EOL = require('os').EOL;
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');
const svgr = require('@svgr/core').default;

const illustrations = require('./illustrations.json');

const replaceAttrValues = {
  '#6c63ff': '{props.primaryColor}'
};

// execute
generate();

/**
 * Generate component files.
 */
function generate() {
  const spinner = ora('Generating components ...').start();
  const src = './svg';
  const dest = './src/lib/illustrations';
  const prefix = 'Undraw';
  let promises = [];

  illustrations.forEach(item => {
    const componentName = prefix + pascalCase(item.name);
    const srcPath = path.join(src, item.svg);
    const srcCode = fs.readFileSync(srcPath);
    const destPath = path.join(dest, `${componentName}.js`);

    promises.push(
      svgr(srcCode, { icon: true, replaceAttrValues }, { componentName })
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
    .then(() => spinner.succeed(`Successfully generated ${illustrations.length} files!`))
    .catch(error => spinner.fail(error));
}
