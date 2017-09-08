import React from 'react';

import './Header.css';

import Logo from './Logo';

export default (props) => (
  <header className='header'>
    <a className="header-trending" href='/trending'>
      Trending Stories
    </a>
    <Logo />
  </header>
)