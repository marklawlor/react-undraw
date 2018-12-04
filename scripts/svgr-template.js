/**
 * Custom SVGR template.
 */
function svgrTemplate(api, opts, state) {
  const { template } = api;
  const { componentName, props, jsx } = state;

  return template.ast`
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${componentName} = (_props) => {
      const ${props} = Object.assign({}, _props);
      const primaryColor = ${props}.primaryColor;
      delete ${props}.primaryColor;

      return (${jsx});
    };

    ${componentName}.propTypes = {
      primaryColor: PropTypes.string
    };

    export default ${componentName};
  `;
}

module.exports = svgrTemplate;
