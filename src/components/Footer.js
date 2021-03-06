import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.svg';
import fbIcon from '../img/icon-facebook.svg'
import twIcon from '../img/icon-twitter.svg'
import igIcon from '../img/icon-instagram.svg'

const Footer = () => {
    return (
        <Router>
        <div className="text-center px-8 pb-12 mt-8">
            <img src={logo} alt="logo" className="mx-auto max-h-14 mb-12" />
            <div className="grid gap-4 text-darkGrayBlue">
                <Link to='/'>FAQs</Link>
                <Link to='/'>Contact Us</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Press Kit</Link>
                <Link to='/'>Install Guide</Link>
            </div>
            <div className="flex text-darkGrayBlue justify-center mt-10">
                <Link className="mx-4" to='/'><img src={fbIcon} alt={fbIcon}/></Link>
                <Link className="mx-4" to='/'><img src={twIcon} alt={twIcon}/></Link>
                <Link className="mx-4" to='/'><img src={igIcon} alt={igIcon}/></Link>
            </div>
        </div>
        </Router>
    )
}
 
export default Footer;