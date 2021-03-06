import logoGoogle from '../img/logo-google.png'
import logoIBM from '../img/logo-ibm.png'
import logoMicrosoft from '../img/logo-microsoft.png'
import logoHP from '../img/logo-hp.png'
import logoVG from '../img/logo-vector-graphics.png'

const Sponsors = () => {

    const logos = [logoGoogle, logoIBM, logoMicrosoft, logoHP, logoVG];

    const mappedLogos = logos.map((logo, index) =>
        <img className="mx-auto py-6" key={index} src={logo} alt=""/>
    )

    return (
        <div className="text-center px-8 pb-12">
            {mappedLogos}
        </div>
    );
}
 
export default Sponsors;