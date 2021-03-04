import Title from "./subComponents/Title"

const Workflow = () => {
    const mainTitle = 'Supercharge your workflow'
    const mainDescription = 'We’ve got the tools to boost your productivity.'

    return (
        <div>
            <Title
                mainTitle={mainTitle}
                mainDescription={mainDescription}
            />
            <div></div>
        </div>
    )
}
 
export default Workflow