const Title = (props) => {
    return (
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-darkGrayBlue pt-10 pb-6">{props.mainTitle}</h2>
            <p className="text-base text-grayBlue">{props.mainDescription}</p>
        </div>
    );
}
 
export default Title;