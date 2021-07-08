import Image from "next/image";

const Sammary = (props) => {
  const { changeViewMode } = props;

  return (
    <div className="my-4 lg:grid lg:grid-cols-2 lg:gap-12 lg:mx-16">
      <div className="p-4 lg:col-span-1 flex flex-col place-content-between">
        <div className="">
          <div className="flex justify-center">
            <Image
              className=""
              src="/home-piano.jpg"
              width={270}
              height={200}
              alt="background-image"
            />
          </div>
          <div className="pt-8 text-lg">I love</div>
          <div className="my-4 pb-8 text-xl">software engineering</div>
          <div className="mt-4">
            <p className="my-4">ソフトウェア技術が好きです。</p>
            <p className="my-4">
              大学では、オブジェクト指向、機械学習、
              　UI/UX、Web開発等、幅広く経験しました。
            </p>
            <p className="my-4">
              最近は、Web技術(主にフロントエンド)に
              <br />
              関心があり勉強中です。
            </p>
          </div>
        </div>
        <div className="py-8 border-b-2">
          <button
            className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            onClick={() => changeViewMode(1)}
          >
            詳細
          </button>
        </div>
      </div>
      <div className="p-4 lg:col-span-1 flex flex-col place-content-between">
        <div className="">
          <div className="flex justify-center">
            <Image
              className=""
              src="/home-piano.jpg"
              width={270}
              height={200}
              alt="background-image"
            />
          </div>
          <div className="pt-8 text-lg">I play</div>
          <div className="my-4 pb-8 text-xl">music and the piano</div>
          <div className="mt-4">
            <p className="my-4">音楽とピアノが好きです。</p>
            <p className="my-4">ジャズピアノの演奏や作曲をします。</p>
          </div>
        </div>
        <div className="py-8 border-b-2">
          <button
            className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            onClick={() => changeViewMode(2)}
          >
            詳細
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sammary;
