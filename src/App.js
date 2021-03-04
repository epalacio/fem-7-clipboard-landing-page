import React, { Fragment } from 'react';
import './index.css';
import logo from './img/logo.svg';

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
<h1>Hello world</h1>
<img src={logo}alt="logo" />
  </Fragment>
);

export default App;