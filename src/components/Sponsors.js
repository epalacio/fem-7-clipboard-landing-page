import logoGoogle from '../img/logo-google.png'
import logoIBM from '../img/logo-ibm.png'
import logoMicrosoft from '../img/logo-microsoft.png'
import logoHP from '../img/logo-hp.png'
import logoVG from '../img/logo-vector-graphics.png'

const Sponsors = () => {

    const logos = [logoGoogle, logoIBM, logoMicrosoft, logoHP, logoVG];

    const mappedLogos = logos.map(logo =>
        <img src={logo} alt=""/>
    )

    return (
        <div>
            {mappedLogos}
        </div>
    );
}
 
export default Sponsors;