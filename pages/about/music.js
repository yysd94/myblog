import Layout from "../../components/Layout";
import Link from "next/link";

const Music = () => {
  return (
    <Layout title="music">
      <div className="text-center h-full flex flex-col justify-center rounded">
        {/* <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div> */}
        <div className="my-4 py-4 w-screen flex flex-col place-content-between">
          <div>
            <p className="text-4xl py-12"> Under Construction</p>
            <p>
              趣味の音楽のページ{"("}作成中{")"}
            </p>
          </div>
          <div className="mt-8 pb-8">
            <Link href="/about">
              <a className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                戻る
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
