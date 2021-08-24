import Link from "next/link";
import { Radar, Pie } from "react-chartjs-2";
import {
  totalSkillData,
  langData,
  raderOptions,
  langOptions,
} from "../../components/contents/Content";
import Layout from "../../components/Layout";
import Career from "../../components/about/Career";
import Skillset from "../../components/about/Skillset";

const Engineering = () => {
  return (
    <Layout title="engineering">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
        <div className="my-4 py-4 w-screen flex flex-col place-content-between items-center">
          {/* ページタイトル */}
          <div className="my-16">
            <p className="text-2xl">Engineering</p>
          </div>

          {/* コンテンツ */}
          <div className="w-full flex flex-col justify-center items-center px-4 md:px-16 md:max-w-screen-md lg:max-w-screen-lg">
            {/* キャリア表示部分 */}
            <div className="w-full md:flex md:justify-center lg:w-5/6">
              {/* 大画面の場合、レーダーチャートを左に、キャリアを右に表示するようにする。 */}
              <div className="hidden chart-container md:block md:w-1/2">
                <div className="md:px-8 lg:pl-8 lg:pr-16">
                  <div className="my-4">
                    <div className="py-4 lg:text-lg">
                      <p>得意な分野</p>
                    </div>
                    <div>
                      <Radar data={totalSkillData} options={raderOptions} />
                    </div>
                  </div>
                  <div className="my-4 pt-2">
                    <div className="py-4 lg:text-lg">
                      <p>得意な言語</p>
                    </div>
                    <div>
                      <Pie data={langData} options={langOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="py-4 text-xl md:hidden">
                  <p>経歴</p>
                </div>
                <div className="py-4">
                  <Career />
                </div>
              </div>
            </div>

            {/* スキルセット表示部分 */}
            <div className="w-full">
              <div className="hidden md:block md:mt-8 md:text-xl">
                <p className="py-8">経験した技術</p>
              </div>
              <div className="md:hidden">
                <div className="py-4 text-xl">
                  <p>経験した技術</p>
                </div>
                <div className="my-4">
                  <Radar data={totalSkillData} options={raderOptions} />
                </div>
              </div>
              <div className="py-4">
                <Skillset />
              </div>
              <div className="md:hidden">
                <div className="py-4">
                  <p>得意な言語</p>
                </div>
                <Pie data={langData} options={langOptions} />
              </div>
            </div>
          </div>

          {/* ページフッター */}
          <div className="mt-16 pb-8">
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

export default Engineering;
