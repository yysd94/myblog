import { useState } from "react";
import Layout from "../components/Layout";
import AppSammary from "../components/work/AppSammary";
import AppDetail from "../components/work/AppDetail";

const Work = () => {
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
    <Layout title="Yu's Blog - Work">
      <div className="my-16 pt-16">
        <p className="text-4xl">Works</p>
      </div>
      <div className="text-center h-full flex flex-col justify-center rounded">
        {isDetail ? (
          <AppDetail
            contentIndex={contentIndex}
            changeViewMode={() => toSammaryMode()}
          />
        ) : (
          <div className="my-8">
            <div className="my-8">
              <p className="text-2xl">Web Design</p>
            </div>
            <AppSammary changeViewMode={(index) => toDetailMode(index)} />

            {/* Musicページは余裕ができたタイミングで追加作成予定 */}
            {/* <div className="my-8">
              <p className="text-2xl">Music</p>
            </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Work;
