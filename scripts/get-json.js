const request = require('request-promise');
const $ = require('cheerio');
const fs = require('fs-extra');
const ora = require('ora');

/**
 * Get all illustration file names.
 */
async function generate() {
  const spinner = ora('Generating illustrations ...').start();
  const url = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations';
  const data = [];
  let page = 0;
  let hasMore = true;

  while (hasMore) {
    spinner.text = `Getting page ${page} ...`;

    // eslint-disable-next-line no-await-in-loop, no-plusplus
    const html = await request(`https://undraw.co/illustrations/load/${page++}`).catch(error => spinner.fail(error));

    const items = $('a[data-src]', html);

    $(items).each((index, elem) => {
      const a = $(elem);
      const name = a.attr('data-title');
      const src = a.attr('data-src');
      const svg = src.replace(`${url}/`, '');
      let tags = a.attr('data-tags');
      tags = tags.split(',').map(tag => tag.trim());

      data.push({ name, svg, tags });
    });

    if (!items.length) {
      hasMore = false;
    }
  }
  const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
  fs.writeFileSync('illustrations.json', JSON.stringify(sortedData, null, 2));
  spinner.succeed('Successfully generated illustrations json!');
}

// execute
generate();
