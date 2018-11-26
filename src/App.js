import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Undraw from './lib';
import mappings from './lib/common/mappings';

library.add(faGithub, faNpm);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      illustration: 'hello',
      primaryColor: Undraw.defaultProps.primaryColor
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * On change.
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Render.
   */
  render() {
    const { illustration, primaryColor } = this.state;

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">React unDraw</span>
          <ul className="navbar-nav d-flex flex-row ml-auto">
            <li className="nav-item">
              <a className="nav-link px-2" href="https://www.npmjs.com/package/react-undraw" title="NPM">
                <FontAwesomeIcon icon={['fab', 'npm']} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="https://github.com/justinlettau/react-undraw" title="GitHub">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
          </ul>
        </nav>
        <div className="container my-4">
          <div className="row">
            <div className="col-10">
              <select name="illustration" className="form-control" onChange={this.onChange} value={illustration}>
                {Object.keys(mappings).map(key => <option key={key} value={key}>{key}</option>)}
              </select>
            </div>
            <div className="col-2">
              <input
                type="color"
                className="form-control"
                name="primaryColor"
                onChange={this.onChange}
                value={primaryColor}
              />
            </div>
          </div>
          <hr className="my-4" />
          <Undraw name={illustration} primaryColor={primaryColor} />
        </div>
      </React.Fragment>
    );
  }
}
