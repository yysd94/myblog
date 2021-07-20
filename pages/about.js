import { useState } from "react";
import Layout from "../components/Layout";
import Detail from "../components/about/Detail";
import Sammary from "../components/about/Sammary";

const About = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [contentIndex, setContentIndex] = useState(1);

  const toSammaryMode = () => {
    setIsDetail(false);
  };
  const toDetailMode = (index) => {
    setContentIndex(index);
    setIsDetail(true);
  };
  return (
    <Layout title="About">
      <div className="text-center h-full flex flex-col justify-center rounded">
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
