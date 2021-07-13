import { useState } from 'react';
import { skillsets } from "./Content";
import SkillsetItem from "./SkillsetItem";

const Skillset = () => {
    const [visibleKey, setVisibleKey] = useState(skillsets.length);

    return (
        <div>
            <ul>
            {skillsets.map((skillset, index) => 
                <li key={index} className="pb-1" onClick={() => setVisibleKey(index)}>
                    <SkillsetItem
                        itemKey={index}
                        title={skillset.title}
                        skills={skillset.skills}
                        visibleKey={visibleKey}
                    />
                </li>
            )}
        </ul>
        </div>
    )
}

export default Skillset
