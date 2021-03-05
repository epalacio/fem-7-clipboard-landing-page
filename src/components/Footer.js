import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.svg';
import fbIcon from '../img/icon-facebook.svg'
import twIcon from '../img/icon-twitter.svg'
import igIcon from '../img/icon-instagram.svg'

const Footer = () => {
    return (
        <Router>
        <img src={logo}alt="logo" />
        <div>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Press Kit</Link>
            <Link to='/'>Install Guide</Link>
        </div>
        <div>
            <Link to='/'><img src={fbIcon} alt={fbIcon}/></Link>
            <Link to='/'><img src={twIcon} alt={twIcon}/></Link>
            <Link to='/'><img src={igIcon} alt={igIcon}/></Link>
        </div>
        </Router>
    )
}
 
export default Footer;