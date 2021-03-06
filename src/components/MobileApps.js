import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom"
import Title from './subComponents/Title'

const MobileApps = () => {

    const mainTitle = 'Clipboard for iOS and Mac OS'
    const mainDescription = 'Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'

    return (
        <Router>
            <div className="text-center px-8 md:px-20 lg:px-60 pb-12 mb-16">
                <Title
                    mainTitle={mainTitle}
                    mainDescription={mainDescription}
                />
                <div className="mt-8 grid max-w-xs m-auto text-center xl:grid-cols-2 xl:max-w-xl">
                    <Link className="shadow-md bg-strongCyan rounded-full py-3 px-6 text-white font-bold m-2" to=''>Download for iOS</Link>
                    <Link className="shadow-md bg-lightBlue rounded-full py-3 px-6 text-white font-bold m-2" to='/'>Download for Mac</Link>
                </div>
            </div>
        </Router>
    )
}
 
export default MobileApps