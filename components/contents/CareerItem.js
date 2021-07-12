const CareerItem = (props) => {

    const {term, title, descriptions} = props;
    return (
        <div>
            <div>{term}</div>
            <div>{title}</div>
            <div>
                {descriptions.map((description, index) => 
                    <p key={index}>{description}</p>
                )}
            </div>
        </div>
    )
}

export default CareerItem
