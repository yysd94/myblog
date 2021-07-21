import { useState } from "react";

const Tech = (props) => {
  const { techs } = props;

  const [visibleKey, setVisibleKey] = useState(0);

  const visibleChange = (id) => {
    id === visibleKey ? setVisibleKey(0) : setVisibleKey(id);
  };

  return (
    <div>
      {techs.map((tech) => (
        <div
          key={tech.id}
          className="pb-1 xl:pb-8 xl:text-lg"
          onClick={() => visibleChange(tech.id)}
        >
          {tech.id === visibleKey ? (
            <div>
              <div className="my-2 bg-gray-100">
                <div className="p-s1">{tech.name}</div>
              </div>
              <div className="border border-gray-300 shadow rounded-md p-2 mx-auto">
                <div className="">
                  {tech.contents.map((content, index) => (
                    <p key={index} className="p-1">
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="my-2 hover:bg-gray-100">
              <div className="p-1">{tech.name}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
