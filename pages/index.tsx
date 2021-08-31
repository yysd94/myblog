import Layout from "../components/Layout";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <Layout title="Yu's Home - Home">
      <div className=" text-center h-full flex flex-col justify-center rounded lg:flex lg:justify-center">
        <div className="my-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1 lg:flex lg:flex-col lg:justify-center">
              <div className="lg:flex lg:justify-end">
                <div className="">
                  <div className="flex justify-center m-4">
                    <Image
                      className="rounded-full"
                      src="/face-round.jpg"
                      width={130}
                      height={130}
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="font-bold text-4xl">Yu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 py-4 lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
              <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                大学の情報理工学科にて、Web開発、UI/UX、機械学習、等を学びました。
              </p>
              <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                卒業後、SIerにてインフラエンジニアとして働きました。
              </p>
              <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                現在、フロントエンド領域で仕事をするために勉強しています。
              </p>
              <div className="mt-12 lg:flex">
                <div className="lg:flex lg:justify-start">
                  <div>
                    <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                      「HTML5レベル2」 認定プロフェッショナル
                    </p>
                    <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                      基本情報技術者 / 応用情報技術者
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4 lg:ml-8">
                  <Image
                    className=""
                    src="/html-license-logo.jpg"
                    width={80}
                    height={80}
                    alt="LicenseLogo"
                  />
                </div>
              </div>
              <div className="mt-12">
                <p className="text-xs mt-2 text-gray-600 md:text-lg md:mt-4 lg:text-left">
                  ジャズピアノを弾きます。音楽が好きです。
                </p>
              </div>
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
