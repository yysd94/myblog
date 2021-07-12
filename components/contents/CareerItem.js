const CareerItem = (props) => {

    const {itemKey, term, title, descriptions, visibleKey} = props;
    return (
        <div>
            <div>{term}</div>
            <div>{title}</div>
            {itemKey === visibleKey && 
                <div>
                {descriptions.map((description, index) => 
                    <p key={index}>{description}</p>
                )}
                </div>
            } 
        </div>
    )
}

export default CareerItem
