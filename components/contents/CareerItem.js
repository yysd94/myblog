const CareerItem = (props) => {

    const {itemKey, term, title, descriptions, visibleKey} = props;
    return (
        <div>
            <div>{term}</div>
            <div>{title}</div>
            {console.log(`key= ${itemKey} visibleKey= ${visibleKey}`)}
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
