import React, { Fragment } from 'react';
import './index.css';
import logo from './img/logo.svg';
import Attributes from './components/subComponents/Attributes';
import Title from './components/subComponents/Title';
import Clipboard from './components/Clipboard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MobileApps from './components/MobileApps';
import Snippets from './components/Snippets';
import Sponsors from './components/Sponsors';
import Workflow from './components/Workflow';

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
<h1>Hello world</h1>
<img src={logo}alt="logo" />
  <Attributes/>
  <Title/>
  <Clipboard/>
  <Footer/>
  <Hero/>
  <MobileApps/>
  <Snippets/>
  <Sponsors/>
  <Workflow/>
  </Fragment>
);

export default App;