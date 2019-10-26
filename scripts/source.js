const fs = require('fs-extra');
const path = require('path');

const src = process.env.UNDRAW_SRC;

if (!src) {
  throw new Error('Missing environment variable: UNDRAW_SRC');
}

const jsonPath = path.join(src, 'illustrations.json');
const svgPath = path.join(src, 'svg');
const illustrations = fs.readJSONSync(jsonPath);

module.exports = { illustrations, svgPath };
