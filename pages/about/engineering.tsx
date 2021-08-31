import Link from "next/link";
import Layout from "../../components/Layout";
import { careersOfEngineer } from "../../components/contents/Content";
import { skillsetsOfEngineer } from "../../components/contents/Content";
import {
  totalEngineerSkillData,
  langData,
} from "../../components/contents/Content";
import DetailPage from "../../components/about/DetailPage";
import React from "react";

const Engineering: React.FC = () => {
  const contents = {
    pageTitle: "Engineering",
    raderTitle: "得意な分野",
    raderData: totalEngineerSkillData,
    pieTitle: "得意な言語",
    pieData: langData,
    careerTitle: "経歴",
    careerData: careersOfEngineer,
    skillTitle: "経験した技術",
    skillData: skillsetsOfEngineer,
  };

  return (
    <Layout title="engineering">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
        <DetailPage contents={contents} />
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

export default Engineering;
