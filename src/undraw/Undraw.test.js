import React from 'react';
import ReactDOM from 'react-dom';

import Undraw from './Undraw';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Undraw />, div);
  ReactDOM.unmountComponentAtNode(div);
});
