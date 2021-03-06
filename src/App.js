import React, { Fragment } from 'react';
import './index.css';

import Hero from './components/Hero';
import Snippets from './components/Snippets';
import Clipboard from './components/Clipboard';
import Workflow from './components/Workflow';
import Sponsors from './components/Sponsors';
import MobileApps from './components/MobileApps';
import Footer from './components/Footer';
import FEMentor from './components/FEMentor'

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <Hero/>
    <Snippets/>
    <Clipboard/>
    <Workflow/>
    <Sponsors/>
    <MobileApps/>
    <Footer/>
    <FEMentor/>
  </Fragment>
);

export default App;