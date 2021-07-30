import Image from "next/image";

const AboutSammary = (props) => {
  const { changeViewMode } = props;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:mx-16">
      <div className="my-4 p-4 flex flex-col place-content-between lg:col-span-1">
        <div className="">
          <div className="flex justify-center">
            <Image
              className=""
              src="/pc-image.jpg"
              width={270}
              height={200}
              layout={"intrinsic"}
              alt="background-image"
            />
          </div>
          <div className="pt-8 text-lg">I love</div>
          <div className="my-4 pb-8 text-xl">software engineering</div>
          <div className="mt-4">
            <p className="my-4">ソフトウェア技術が好きです。</p>
            <p className="my-4">
              大学で、Web開発、UI/UX、機械学習、アルゴリズム、オブジェクト指向等、幅広く経験しました。
            </p>
            <p className="my-4">
              最近は、Webフロントエンド技術とUXデザインに
              <br />
              関心があり勉強中です。
            </p>
          </div>
        </div>
        <div className="my-8 pb-8 border-b-2">
          <button
            className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            onClick={() => changeViewMode(1)}
          >
            詳細
          </button>
        </div>
      </div>
      <div className="my-4 p-4 flex flex-col place-content-between lg:col-span-1">
        <div className="">
          <div className="flex justify-center">
            <Image
              className=""
              src="/piano-image.jpg"
              width={270}
              height={200}
              layout={"intrinsic"}
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
        <div className="my-8 pb-8 border-b-2">
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

export default AboutSammary;
