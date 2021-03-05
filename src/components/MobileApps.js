import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom"
import Title from './subComponents/Title'

const MobileApps = () => {

    const mainTitle = 'Clipboard for iOS and Mac OS'
    const mainDescription = 'Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'

    return (
        <Router>
        <div>
            <Title
                mainTitle={mainTitle}
                mainDescription={mainDescription}
            />
            <Link to='/'>Download for iOS</Link>
            <Link to='/'>Download for Mac</Link>
        </div>
        </Router>
    )
}
 
export default MobileApps