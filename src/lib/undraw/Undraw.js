import PropTypes from 'prop-types';
import React, { Component } from 'react';

import mappings from '../common/mappings';

export default class Undraw extends Component {
  /**
   * Prop default values.
   */
  static defaultProps = {
    height: '250px',
    primaryColor: '#6c63ff'
  };

  /**
   * Prop types.
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    primaryColor: PropTypes.string
  };

  /**
   * Override default prop values.
   *
   * @param {Object} props Properties to set as default values.
   */
  static setDefaultProps(props) {
    if (!props) {
      return;
    }

    Object.assign(Undraw.defaultProps, props);
  }

  /**
   * Render.
   */
  render() {
    const { name, height, primaryColor, style, ...rest } = this.props;
    const styleProp = { height, width: '100%', ...style };
    const Illustration = mappings[name];

    if (!Illustration) {
      return null;
    }

    return <Illustration style={styleProp} primaryColor={primaryColor} {...rest} />;
  }
}
