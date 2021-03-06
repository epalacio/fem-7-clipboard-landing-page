import Title from "./subComponents/Title"
import imageDevices from '../img/image-devices.png';

const Clipboard = () => {
    const mainTitle = 'Access Clipboard anywhere'
    const mainDescription = 'Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'

    return (
        <div className="text-center px-8 pb-12">
            <Title
                mainTitle={mainTitle}
                mainDescription={mainDescription}
            />
            <img src={imageDevices} alt="ipad & iPhone side by side displaying green checkmark modal in center"/>
        </div>
    )
}
 
export default Clipboard