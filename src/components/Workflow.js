import Title from "./subComponents/Title"
import Attributes from "./subComponents/Attributes"
import iconBlacklist from '../img/icon-blacklist.svg';
import iconText from '../img/icon-text.svg';
import iconPreview from '../img/icon-preview.svg';
const Workflow = () => {
    const mainTitle = 'Supercharge your workflow'
    const mainDescription = 'We’ve got the tools to boost your productivity.'

    const attributes = [
        {
            title: 'Create blacklists',
            description: 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
            img: iconBlacklist
        },
        {
            title: 'Plain text snippets',
            description: 'Remove unwanted formatting from copied text for a consistent look.',
            img: iconText
        },
        {
            title: 'Sneak preview',
            description: 'Quick preview of all snippets on your Clipboard for easy access.',
            img: iconPreview
        }
    ]

    const mappedAttributes = attributes.map((attribute, index) =>
        <div>
            <img src={attribute.img} alt="logo"/>
            <Attributes
                key={index}
                attributesTitle={attribute.title}
                attributesDescription={attribute.description}
            />
        </div>
    )

    return (
        <div>
            <Title
                mainTitle={mainTitle}
                mainDescription={mainDescription}
            />
            {mappedAttributes}
            <div></div>
        </div>
    )
}
 
export default Workflow