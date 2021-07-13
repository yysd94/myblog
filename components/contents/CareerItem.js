const CareerItem = (props) => {

    const {itemKey, term, title, descriptions, visibleKey} = props;
    return (
        <div>
            <div className="my-2 hover:bg-gray-100">
                <div className="p-1">{term}</div>
                <div className="p-1">{title}</div>
            </div>
          {itemKey === visibleKey && 
            <div className="border border-gray-300 shadow rounded-md p-4 mx-auto">
              <div className="">
                {descriptions.map((description, index) => 
                    <p key={index} className="p-1">{description}</p>
                )}
              </div>
            </div>  
          } 
        </div>
    )
}

export default CareerItem
