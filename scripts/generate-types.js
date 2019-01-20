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
 * Generate types file.
 */
function generate() {
  const spinner = ora('Generating types ...').start();
  const dest = path.join('./', 'undraw.d.ts');
  const prefix = 'Undraw';
  let content = '';

  // banner
  content += '// Generated file, do not edit directly!';
  content += EOL;
  content += EOL;

  content += `declare module 'react-undraw' {`;

  content += `
  export interface IllustrationProps {
    primaryColor?: string;
    height?: string;
    style?: object;
    className?: string;
  }

  export interface UndrawProps extends IllustrationProps {
    name: string;
  }

  export default class Undraw extends React.Component<UndrawProps> {
    static setDefaultProps(props: Partial<IllustrationProps>): void;
  }`;
  content += EOL;
  content += EOL;

  illustrations.forEach(item => {
    const component = prefix + pascalCase(item.name);
    content += `  export class ${component} extends React.Component<IllustrationProps> {};` + EOL;
  });

  content += `}`;
  content += EOL;

  fs.outputFileSync(dest, content);
  spinner.succeed('Successfully generated types!');
}
