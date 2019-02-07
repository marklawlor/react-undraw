const { EOL } = require('os');
const dashify = require('dashify');
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');
const table = require('markdown-table');

const illustrations = require('./illustrations.json');

/**
 * Generate readme file.
 */
function generate() {
  const spinner = ora('Generating readme ...').start();
  const dest = path.join('./', 'ILLUSTRATIONS.md');
  const prefix = 'Undraw';
  const rows = [];
  let content = '';

  // banner
  content += '<!-- Generated file, do not edit directly! -->';
  content += EOL;
  content += EOL;

  // headers
  rows.push(['Illustration', 'Name', 'Component']);

  illustrations.forEach(item => {
    const name = dashify(item.name);
    const component = prefix + pascalCase(item.name);

    // eslint-disable-next-line prefer-template
    rows.push([item.name, '`' + name + '`', '`<' + component + ' />`']);
  });

  content += '# Illustrations';
  content += EOL;
  content += EOL;
  content += `${illustrations.length} illustrations available.`;
  content += EOL;
  content += EOL;
  content += table(rows);

  fs.outputFileSync(dest, content);
  spinner.succeed('Successfully generated readme!');
}

// execute
generate();
