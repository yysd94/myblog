import { useState } from "react";
import Layout from "../components/Layout";
import Detail from "../components/about/Detail";
import Sammary from "../components/about/Sammary";

const About = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [contentIndex, setContentIndex] = useState(1);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const toSammaryMode = () => {
    setIsDetail(false);
    returnTop();
  };
  const toDetailMode = (index) => {
    setContentIndex(index);
    setIsDetail(true);
    returnTop();
  };
  return (
    <Layout title="About">
      <div className="text-center h-full flex flex-col justify-center rounded">
        <div className="my-16 pt-16">
          <p className="text-4xl">About Me</p>
        </div>
        {isDetail ? (
          <Detail
            contentIndex={contentIndex}
            changeViewMode={() => toSammaryMode()}
          />
        ) : (
          <Sammary changeViewMode={(index) => toDetailMode(index)} />
        )}
      </div>
    </Layout>
  );
};

export default About;
