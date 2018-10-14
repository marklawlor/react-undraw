const EOL = require('os').EOL;
const dashify = require('dashify');
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');

const illustrations = require('./illustrations.json');

// execute
generate();

/**
 * Generate mapping files.
 */
function generate() {
  const spinner = ora('Generating mappings ...').start();
  const dest = path.join('./src/common', 'mappings.js');
  const prefix = 'Undraw';
  let content = '';

  illustrations.forEach(item => {
    const component = prefix + pascalCase(item.name);
    content += `import ${component} from '../illustrations/${component}';` + EOL;
  });

  content += EOL;
  content += `const mappings = {`;
  content += EOL;

  illustrations.forEach((item, index) => {
    const name = dashify(item.name);
    const component = prefix + pascalCase(item.name);

    content += `  '${name}': ${component}`;

    if (index != illustrations.length - 1) {
      content += ',';
    }

    content += EOL;
  });

  content += '};';
  content += EOL;
  content += EOL;
  content += 'export default mappings;';
  content += EOL;

  fs.outputFileSync(dest, content);
  spinner.succeed('Sucessfully generated mappings!');
}
