import React from "react";
import Image from "next/image";
import { works } from "../contents/Content";

const AppSammary = (props) => {
  const { changeViewMode } = props;
  console.log(changeViewMode);

  return (
    <div>
      {works.map((work) => (
        <div key={work.id} className="my-4 p-4">
          <div className="">
            <div className="flex justify-center">
              <Image
                className=""
                src={work.imageSrc}
                width={270}
                height={200}
                alt="background-image"
              />
            </div>
            <div className="my-4 pb-8 text-xl">{work.title}</div>
            {work.descriptions.map((description) => (
              <div className="mt-4">
                <p className="my-4">{description}</p>
              </div>
            ))}
          </div>
          <div className="my-8 pb-8">
            <button
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => changeViewMode(1)}
            >
              詳細
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppSammary;
