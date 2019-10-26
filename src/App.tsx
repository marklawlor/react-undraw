import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Undraw, { defaultProps, illustrationMap } from './lib';

const illustrations = Object.keys(illustrationMap);
library.add(faGithub, faNpm);

interface State {
  search: string;
  limit: number;
  primaryColor: string;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      search: '',
      limit: 100,
      primaryColor: defaultProps.primaryColor
    };

    this.onChange = this.onChange.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * Debounce timer.
   */
  debounce: number | void = undefined;

  /**
   * On change.
   */
  onChange(event: any) {
    this.setState({
      [event.target.name]: event.target.value
    } as any);
  }

  /**
   * On search.
   */
  onSearch(event: any) {
    const { value } = event.target;

    if (this.debounce) {
      window.clearTimeout(this.debounce);
    }

    this.debounce = window.setTimeout(() => {
      this.setState({
        limit: 100,
        search: value
      });
    }, 300);
  }

  /**
   * On load more.
   */
  onLoadMore() {
    this.setState(state => ({ limit: state.limit + 100 }));
  }

  /**
   * Render.
   */
  render() {
    const { limit, primaryColor, search } = this.state;
    const total = illustrations.length;
    let items = [...illustrations];
    let shown = total;
    let hasMore = false;

    if (search) {
      items = illustrations.filter(item => item.indexOf(search) !== -1);
      shown = items.length;
    }

    if (items.length > limit) {
      items.length = limit;
      hasMore = true;
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
            {items.map(key => (
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
          {hasMore && (
            <p className="text-center">
              <span className="align-middle pr-1">
                Showing {limit} of {shown} ...
              </span>
              <button type="button" className="btn btn-link p-0" onClick={this.onLoadMore}>
                load more
              </button>
            </p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
