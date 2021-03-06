import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.svg';

const Hero = () => {
    return (
        <Router>
        <div className="bg-hero-image-mobile bg-right-top bg-no-repeat text-center px-8 pb-12">
            <img className="pt-20 m-auto" src={logo}alt="logo" />
            <div>
                <h2 className="text-3xl font-bold text-darkGrayBlue pt-12 pb-6">A history of everything you copy</h2>
                <p className="text-base text-grayBlue">Clipboard allows you to track and organize everything you 
  copy. Instantly access your clipboard on all your devices.</p>
            </div>
            <div className="mt-16 grid max-w-xs m-auto">
                <Link className="shadow-md bg-strongCyan rounded-full py-3 px-6 text-white font-bold m-2" to=''>Download for iOS</Link>
                <Link className="shadow-md bg-lightBlue rounded-full py-3 px-6 text-white font-bold m-2" to='/'>Download for Mac</Link>
            </div>
        </div>
        </Router>
    );
}
 
export default Hero;