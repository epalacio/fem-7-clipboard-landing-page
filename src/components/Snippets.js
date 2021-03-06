import Title from './subComponents/Title'
import Attributes from './subComponents/Attributes'
import imageComputer from '../img/image-computer.png';

const Snippets = () => {
    const mainTitle = 'Keep track of your snippets'
    const mainDescription = 'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'

    const attributes = [
        {
            title: 'Quick Search',
            description: 'Easily search your snippets by content, category, web address, application, and more.'
        },
        {
            title: 'iCloud Sync',
            description: 'Instantly saves and syncs snippets across all your devices.'
        },
        {
            title: 'Complete History',
            description: 'Retrieve any snippets from the first moment you started using the app.'
        }
    ]

    const mappedAttributes = attributes.map((attribute, index) => 
        <Attributes
            key={index}
            attributesTitle={attribute.title}
            attributesDescription={attribute.description}
        />
    )



    return (
        <div className="text-center px-8 md:px-20 lg:px-60 pb-12 mb-16 xl:px-64">
            <Title
                mainTitle={mainTitle}
                mainDescription={mainDescription}
            />
            <div className="xl:grid xl:grid-cols-2 text-left">
                <img className="md:max-w-md mx-auto xl:max-w-max xl:-ml-96 2xl:ml-44" src={imageComputer} alt="iMac with water background and green checkmark modal centered"/>
                <div>
                    {mappedAttributes}
                </div>
            </div>
        </div>
    )
}
 
export default Snippets