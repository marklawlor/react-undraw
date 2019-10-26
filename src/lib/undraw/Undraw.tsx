import PropTypes from 'prop-types';
import React, { Component } from 'react';

import illustrationMap from '../illustration-map';

interface Props {
  name: string;
  height?: string;
  primaryColor?: string;
}

/**
 * Dynamically render any illustration.
 */
export default class Undraw extends Component<Props> {
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
    const { name, ...rest } = this.props;
    const Illustration = (illustrationMap as any)[name];

    if (!Illustration) {
      return null;
    }

    return <Illustration {...rest} />;
  }
}
