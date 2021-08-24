import { useState } from "react";
import { careers } from "../contents/Content";

const Career = () => {
  const [visibleKey, setVisibleKey] = useState(0);

  const visibleChange = (id) => {
    id === visibleKey ? setVisibleKey(0) : setVisibleKey(id);
  };

  return (
    <div>
      {careers.map((career) => (
        <div
          key={career.id}
          className="pb-2 md:pb-3 lg:pb-4"
          onClick={() => visibleChange(career.id)}
        >
          {career.id === visibleKey ? (
            <div>
              <div className="my-2 bg-gray-100 lg:text-lg ">
                <div className="p-1">{career.term}</div>
                <div className="p-1">{career.title}</div>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="border border-gray-300 shadow rounded-md p-4 mx-auto">
                {career.descriptions.map((description, index) => (
                  <div key={index} className="p-1">
                    {description}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="my-2 hover:bg-gray-100 lg:text-lg">
              <div className="p-1">{career.term}</div>
              <div className="p-1">{career.title}</div>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Career;
