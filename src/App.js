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
      search: '',
      primaryColor: Undraw.defaultProps.primaryColor
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
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
   * On search.
   */
  onSearch(event) {
    if (this.debounce) {
      window.clearTimeout(this.debounce);
    }

    const { value } = event.target;

    this.debounce = window.setTimeout(() => {
      this.setState({
        search: value
      });
    }, 300);
  }

  /**
   * Debounce timer.
   */
  debounce;

  /**
   * Render.
   */
  render() {
    const { primaryColor, search } = this.state;
    let illustrations = Object.keys(mappings);
    const total = illustrations.length;

    if (search) {
      illustrations = illustrations.filter(item => item.indexOf(search) !== -1);
    }

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
              <input
                type="text"
                placeholder={`Search ${total} illustrations ...`}
                className="form-control"
                name="search"
                onChange={this.onSearch}
              />
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
          <div className="row">
            {illustrations.map(key => (
              <div className="col-3 mb-4" key={key}>
                <div className="card">
                  <div className="card-body">
                    <Undraw name={key} primaryColor={primaryColor} />
                    <p className="card-text mb-0 text-center">{key}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
