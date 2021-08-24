import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <Layout title="Yu's Home - About">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
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
                  <br className="md:hidden" />
                  関心があります。
                </p>
              </div>
            </div>
            <div className="my-8 pb-8 border-b-2">
              <Link href="/about/engineering">
                <a className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  詳細
                </a>
              </Link>
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
                <p className="my-4">ジャズピアノの演奏や作編曲をします。</p>
              </div>
            </div>
            <div className="my-8 pb-8 border-b-2">
              <Link href="/about/music">
                <a className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  詳細
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
