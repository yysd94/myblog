import { useState } from 'react'
import { careers } from "./Content";

const Career = () => {
    const [visibleKey, setVisibleKey] = useState(careers.length);

    return (
        <div>
            {careers.map((career, index) => 
                <div key={index} className="pb-1" onClick={() => setVisibleKey(index)}>
                    <div className="my-2 hover:bg-gray-100">
                        <div className="p-1">{career.term}</div>
                        <div className="p-1">{career.title}</div>
                    </div>
                    {
                        index === visibleKey && 
                        <div className="border border-gray-300 shadow rounded-md p-4 mx-auto">
                            <div className="">
                                {career.descriptions.map((description, index) => 
                                    <p key={index} className="p-1">{description}</p>
                                )}
                            </div>
                        </div>  
                    }
                </div>
            )}
        </div>
    )
}

export default Career
