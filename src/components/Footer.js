import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.svg';
import fbIcon from '../img/icon-facebook.svg'
import twIcon from '../img/icon-twitter.svg'
import igIcon from '../img/icon-instagram.svg'

const Footer = () => {
    return (
        <Router>
        <div className="text-center px-8 md:px-16 pb-12 mt-8 lg:grid lg:grid-cols-4 lg:items-center">
            <img src={logo} alt="logo" className="mx-auto max-h-14 mb-12 lg:mb-0" />
            <div className="grid gap-4 text-darkGrayBlue lg:grid-cols-3 lg:col-span-2 lg:text-left">
                <Link className="lg:order-1" to='/'>FAQs</Link>
                <Link className="lg:order-4" to='/'>Contact Us</Link>
                <Link className="lg:order-2" to='/'>Privacy Policy</Link>
                <Link className="lg:order-5" to='/'>Press Kit</Link>
                <Link className="lg:order-3" to='/'>Install Guide</Link>
            </div>
            <div className="flex text-darkGrayBlue justify-center mt-10 lg:mt-0">
                <Link className="mx-4" to='/'><img src={fbIcon} alt={fbIcon}/></Link>
                <Link className="mx-4" to='/'><img src={twIcon} alt={twIcon}/></Link>
                <Link className="mx-4" to='/'><img src={igIcon} alt={igIcon}/></Link>
            </div>
        </div>
        </Router>
    )
}
 
export default Footer;