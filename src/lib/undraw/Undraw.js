import PropTypes from 'prop-types';
import React, { Component } from 'react';

import defaultProps from '../default-props';
import mappings from '../illustrations/mappings';

export default class Undraw extends Component {
  /**
   * Default props.
   */
  static defaultProps = {
    height: defaultProps.height,
    primaryColor: defaultProps.primaryColor
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

    Object.assign(defaultProps, props);
  }

  /**
   * Render.
   */
  render() {
    const { name, ...rest } = this.props;
    const Illustration = mappings[name];

    if (!Illustration) {
      return null;
    }

    return <Illustration {...rest} />;
  }
}
