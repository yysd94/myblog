import React from 'react'

const CareerItem = (props) => {

    const {term, title, descriptions} = props;
    return (
        <div>
            <div>{term}</div>
            <div>{title}</div>
            <div>
                {descriptions.map((description) => 
                    <p>{description}</p>
                )}
            </div>
        </div>
    )
}

export default CareerItem
