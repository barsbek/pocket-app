import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';

const logo = {
  link: '/',
  src: '/logo.png'
}

ReactDOM.render(<Header logo={logo}/>, document.getElementById('root'));
registerServiceWorker();
