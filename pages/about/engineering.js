import { Radar, Pie } from "react-chartjs-2";
import {
  totalSkillData,
  langData,
  raderOptions,
  langOptions,
} from "../../components/contents/Content";
import Career from "../../components/about/Career";
import Skillset from "../../components/about/Skillset";
import Layout from "../../components/Layout";
import Link from "next/link";

const Engineering = () => {
  return (
    <Layout title="engineering">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
        <div className="my-4 py-4 w-screen flex flex-col place-content-between">
          <div className="md:mx-2">
            <div className="my-16">
              <p className="text-2xl">Engineering</p>
            </div>
            <div className="md:flex md:justify-center md:px-16 lg:px-32 xl:px-48">
              <div className="md:w-screen md:grid md:grid-cols-5 md:gap-4">
                <div className="hidden chart-container md:block md:my-4 md:col-span-2">
                  <div className="my-4 xl:pl-32">
                    <div className="py-4 xl:text-lg">
                      <p>得意な分野</p>
                    </div>
                    <Radar data={totalSkillData} options={raderOptions} />
                  </div>
                  <div className="my-4 pt-2 xl:pl-32">
                    <div className="py-4 xl:text-lg">
                      <p>得意な言語</p>
                    </div>
                    <Pie data={langData} options={langOptions} />
                  </div>
                </div>
                <div className="m-4 md:col-span-3">
                  <div className="py-4">
                    <Career />
                  </div>
                </div>
                <div className="hidden md:block md:pt-4 md:text-xl md:col-span-5">
                  <p>スキルセット</p>
                </div>
                <div className="m-4 md:col-span-5">
                  <div className="py-4 text-xl md:hidden">
                    <p>スキルセット</p>
                  </div>
                  <div className="my-4 md:hidden">
                    <Radar data={totalSkillData} options={raderOptions} />
                  </div>
                  <div className="py-4">
                    <Skillset />
                  </div>
                  <div className="m-4 md:hidden">
                    <div className="py-4">
                      <p>得意な言語</p>
                    </div>
                    <Pie data={langData} options={langOptions} />
                  </div>
                </div>
              </div>
            </div>
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

export default Engineering;
