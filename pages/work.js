import { useState } from "react";
import Layout from "../components/Layout";
import AppSammary from "../components/work/AppSammary";
import AppDetail from "../components/work/AppDetail";

const Work = () => {
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
    <Layout title="Work">
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
          <div>
            <div className="my-8">
              <p className="text-2xl">Application</p>
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
