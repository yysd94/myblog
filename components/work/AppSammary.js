import React from "react";
import Image from "next/image";
import { works } from "../contents/Content";

const AppSammary = (props) => {
  const { changeViewMode } = props;

  return (
    <div>
      {works.map((work) => (
        <div
          key={work.id}
          className="border border-gray-300 shadow rounded-md mx-4 mt-4 mb-8 p-4"
        >
          <div className="">
            <div className="flex justify-center">
              <Image
                className=""
                src={work.sammary.imageSrc}
                width={270}
                height={200}
                alt="background-image"
              />
            </div>
            <div className="my-4 pb-8 text-xl">{work.sammary.title}</div>
            {work.sammary.descriptions.map((description, index) => (
              <div key={index} className="mt-4">
                <p className="my-4">{description}</p>
              </div>
            ))}
          </div>
          <div className="my-8">
            <button
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => changeViewMode(work.id)}
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
