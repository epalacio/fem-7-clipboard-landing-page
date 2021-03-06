const Attributes = (props) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-darkGrayBlue pt-8 pb-2">{props.attributesTitle}</h3>
            <p className="text-base text-grayBlue">{props.attributesDescription}</p>
        </div>
    );
}
 
export default Attributes;