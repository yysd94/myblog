import Link from "next/link";
import Layout from "../../components/Layout";
import { careersOfMusic } from "../../components/contents/Content";
import { skillsetsOfMusic } from "../../components/contents/Content";
import {
  totalMusicSkillData,
  musicSkillData,
} from "../../components/contents/Content";
import DetailPage from "../../components/about/DetailPage";

const Music: React.FC = () => {
  const contents = {
    pageTitle: "Music",
    raderTitle: "得意なジャンル",
    pieTitle: "得意なこと",
    raderData: totalMusicSkillData,
    pieData: musicSkillData,
    careerTitle: "経歴",
    careerData: careersOfMusic,
    skillTitle: "経験したこと",
    skillData: skillsetsOfMusic,
  };
  return (
    <Layout title="music">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
        <DetailPage contents={contents} />
        {/* ページフッター */}
        <div className="mt-16 pb-16">
          <Link href="/about">
            <a className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
              戻る
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
