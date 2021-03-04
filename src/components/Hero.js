import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.svg';

const Hero = () => {
    return (
        <Router>
        <div>
            <img src={logo}alt="logo" />
            <div>
                <h2>A history of everything you copy</h2>
                <p>Clipboard allows you to track and organize everything you 
  copy. Instantly access your clipboard on all your devices.</p>
            </div>
            <div>
                <Link to='/'>Download for iOS</Link>
                <Link to='/'>Download for Mac</Link>
            </div>
        </div>
        </Router>
    );
}
 
export default Hero;