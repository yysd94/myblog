import Computer from "./contents/Computer";
import Music from "./contents/Music";

const Detail = (props) => {
  const { contentIndex, changeViewMode } = props;
  return (
    <div className="my-4 py-4 w-screen flex flex-col place-content-between">
      {contentIndex === 1 && <Computer />}
      {contentIndex === 2 && <Music />}
      <div className="mt-8 pb-8 border-b-2">
        <button
          className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
          onClick={changeViewMode}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default Detail;
