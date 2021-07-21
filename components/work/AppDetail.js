import React from "react";
import Image from "next/image";
import { works } from "../contents/Content";

const AppDetail = (props) => {
  const { contentIndex, changeViewMode } = props;
  console.log(contentIndex);
  console.log(changeViewMode);
  return (
    <div>
      <div className="my-4 py-4 w-screen flex flex-col place-content-between">
        <div className="mt-8 pb-8 border-b-2">
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
