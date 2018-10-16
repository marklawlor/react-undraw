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
   * Render.
   */
  render() {
    const Illustration = mappings[this.props.name];

    if (!Illustration) {
      console.warn(`Could not find unDraw illustration by name "${this.props.name}"!`);
      return null;
    }

    return (
      <Illustration height={this.props.height} primaryColor={this.props.primaryColor} />
    );
  }
}
