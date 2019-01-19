/**
 * Custom SVGR template.
 */
function svgrTemplate(api, opts, state) {
  const { template } = api;
  const { componentName, props, jsx } = state;

  return template.ast`
    import React from 'react';
    import PropTypes from 'prop-types';
    import defaultProps from '../default-props';

    const ${componentName} = (_props) => {
      const ${props} = Object.assign({}, _props);
      const primaryColor = ${props}.primaryColor || defaultProps.primaryColor;
      const style = Object.assign({ height: ${props}.height || defaultProps.height, width: '100%' }, ${props}.style);

      delete ${props}.primaryColor;
      delete ${props}.height;
      delete ${props}.style;

      return (${jsx});
    };

    ${componentName}.propTypes = {
      height: PropTypes.string,
      primaryColor: PropTypes.string
    };

    export default ${componentName};
  `;
}

module.exports = svgrTemplate;
