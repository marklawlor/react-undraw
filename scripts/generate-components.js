const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');
const svgr = require('@svgr/core').default;

const { illustrations, svgPath } = require('./source');
const template = require('./svgr-template');

const replaceAttrValues = {
  '#6c63ff': '{primaryColor}'
};

const svgProps = {
  style: '{style}'
};

/**
 * Generate component files.
 */
function generate() {
  const spinner = ora('Generating components ...').start();
  const dest = './src/lib/illustrations';
  const prefix = 'Undraw';
  const promises = [];

  illustrations.forEach(item => {
    const componentName = prefix + pascalCase(item.name);
    const srcPath = path.join(svgPath, item.svg);
    const srcCode = fs.readFileSync(srcPath);
    const destPath = path.join(dest, `${componentName}.tsx`);

    promises.push(
      svgr(
        srcCode,
        {
          icon: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          replaceAttrValues,
          svgProps,
          template
        },
        { componentName }
      ).then(ts => fs.outputFile(destPath, ts))
    );
  });

  Promise.all(promises)
    .then(() => spinner.succeed(`Successfully generated ${illustrations.length} files!`))
    .catch(error => spinner.fail(error));
}

// execute
generate();
