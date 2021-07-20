import { useState } from "react";
import { skillsets } from "../contents/Content";

const Skillset = () => {
  const [visibleKey, setVisibleKey] = useState(1);

  return (
    <div>
      <div className="md:hidden xl:text-lg">
        {skillsets.map((skillset) => (
          <div
            key={skillset.id}
            className="pb-1"
            onClick={() => setVisibleKey(skillset.id)}
          >
            <div className="my-2 hover:bg-gray-100">
              <div className="p-1">{skillset.title}</div>
            </div>
            {skillset.id === visibleKey && (
              <div className="border border-gray-300 shadow rounded-md p-4 mx-auto">
                {skillset.skills.map((skill, index) => (
                  <div key={index} className="p-1">
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:block md:flex md:justify-center xl:text-lg">
        <div>
          <div className="bg-gray-100 mb-2">
            <div className="p-2 flex justify-center space-x-4">
              {skillsets.map((skillset) => (
                <div key={skillset.id}>
                  {skillset.id === visibleKey ? (
                    <div
                      className="bg-gray-200"
                      onClick={() => setVisibleKey(skillset.id)}
                    >
                      <div className="p-2">{skillset.title}</div>
                    </div>
                  ) : (
                    <div
                      className=""
                      onClick={() => setVisibleKey(skillset.id)}
                    >
                      <div className="p-2">{skillset.title}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="my-4 border border-gray-300 shadow rounded-md py-4 mx-auto">
            {skillsets[visibleKey - 1].skills.map((skill, index) => (
              <div key={index} className="p-1">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
