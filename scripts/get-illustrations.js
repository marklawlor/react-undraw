/**
 * Automatically scroll to load virtual scroll items and read all illustrations from the DOM.
 * Copy and paste this into the browser console and copy the output into `illustrations.json`.
 */
(() => {
  let lastHeight = document.body.scrollHeight;
  scroll();

  function scroll() {
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
      console.log('Scrolling ...');

      if (document.body.scrollHeight > lastHeight) {
        lastHeight = document.body.scrollHeight;
        scroll();
      } else {
        getIllustrations();
      }
    }, 1000);
  }

  function getIllustrations() {
    console.log('Getting SVG items ...');

    // some illustrations cause stack overflow exceptions ¯\_(ツ)_/¯
    const blacklist = ['world_9iqb.svg'];

    const container = document.querySelector('.item__container');
    const sources = container.querySelectorAll('a[data-src]');
    let items = Array.prototype.slice.call(sources);

    items = items
      .map(x => ({
        name: x.getAttribute('data-title'),
        svg: x
          .getAttribute('data-src')
          .split('/')
          .pop()
      }))
      .filter(x => blacklist.indexOf(x.svg) === -1)
      .sort((a, b) => a.name.localeCompare(b.name));

    const output = JSON.stringify(items);
    console.log(output);
  }
})();
