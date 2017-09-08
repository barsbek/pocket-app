import React from 'react';

import './Logo.css';

export default (props) => (
  <a className="logo" href={props.link}>
    <img className="logo-image" src={props.src} alt="logo"></img>
  </a>
)