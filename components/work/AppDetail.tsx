import React from "react";
import Image from "next/image";
import { works } from "../contents/Content";
import Tech from "./Tech";
import { APP_DETAIL } from "../../types/Types";

const AppDetail: React.FC<APP_DETAIL> = (props) => {
  const { contentIndex, changeViewMode } = props;

  return (
    <div>
      <div className="my-4 py-4 flex flex-col justify-center">
        {works.map(
          (work) =>
            contentIndex === work.id && (
              <div key={work.id} className="m-4">
                <div className="my-8">
                  <div>
                    <p className="text-lg">{work.detail.title}</p>
                  </div>
                  <div className="my-8">
                    <p>{work.detail.term}</p>
                  </div>
                </div>
                <Image
                  className=""
                  src={work.sammary.imageSrc}
                  width={270}
                  height={200}
                  alt="background-image"
                />
                <div className="my-12">
                  <div>
                    <p className="text-lg">開発動機</p>
                  </div>
                  <div className="m-4">
                    <p>{work.detail.aim}</p>
                  </div>
                </div>
                <div className="my-12">
                  <div>
                    <p className="text-lg">特徴</p>
                  </div>
                  <div className="m-4">
                    {work.detail.features.map((feature, index) => (
                      <div key={index} className="p-2">
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="my-12">
                  <div>
                    <p className="text-lg">使用技術</p>
                  </div>
                  <div className="m-4">
                    <Tech techs={work.detail.techs} />
                  </div>
                </div>
              </div>
            )
        )}
        <div className="mt-8 pb-8">
          <button
            className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            onClick={changeViewMode}
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
