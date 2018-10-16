import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import mappings from './common/mappings';
import Undraw from './undraw/Undraw';

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
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">React unDraw</span>
        </nav>
        <div className="container my-4">
          <div className="row">
            <div className="col-10">
              <select name="illustration" className="form-control" onChange={this.onChange} value={this.state.illustration}>
                {Object.keys(mappings).map(key => <option key={key} value={key}>{key}</option>)}
              </select>
            </div>
            <div className="col-2">
              <input type="color" className="form-control" name="primaryColor" onChange={this.onChange} value={this.state.primaryColor} />
            </div>
          </div>
          <hr className="my-4" />
          <Undraw name={this.state.illustration} primaryColor={this.state.primaryColor} />
        </div>
      </React.Fragment>
    );
  }
}
