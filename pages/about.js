import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Detail from "../components/Detail";
import Sammary from "../components/Sammary";

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
      <div>
        <div>
          <div>
            {isDetail ? (
              <Detail
                contentIndex={contentIndex}
                changeViewMode={() => toSammaryMode()}
              />
            ) : (
              <Sammary changeViewMode={(index) => toDetailMode(index)} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
