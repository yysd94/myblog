import {useState} from 'react'
import { careers } from "./Content";
import CareerItem from "./CareerItem";

const Career = () => {
    const [visibleKey, setVisibleKey] = useState(careers.length);

    return (
        <ul>
            {careers.map((career, index) => 
                <li key={index} className="py-2" onClick={() => setVisibleKey(index)}>
                    <CareerItem
                        itemKey={index}
                        term={career.term}
                        title={career.title}
                        descriptions={career.descriptions}
                        visibleKey={visibleKey}
                    />
                </li>
            )}
        </ul>
    )
}

export default Career
