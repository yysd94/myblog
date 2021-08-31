import Career from "./Career";
import Skillset from "./Skillset";
import { Radar, Pie } from "react-chartjs-2";
import { raderOptions, pieOptions } from "../contents/Content";

type Props = {
  contents: any,
}

const DetailPage: React.FC<Props> = (props) => {
  const { contents } = props;
  const {
    pageTitle,
    raderTitle,
    raderData,
    pieTitle,
    pieData,
    careerTitle,
    careerData,
    skillTitle,
    skillData,
  } = contents;

  return (
    <div>
      <div className="w-screen flex flex-col place-content-between items-center">
        {/* ページタイトル */}
        <div className="my-16">
          <p className="text-2xl">{pageTitle}</p>
        </div>

        {/* コンテンツ */}
        <div className="w-full flex flex-col justify-center items-center px-4 md:px-16 md:max-w-screen-md lg:max-w-screen-lg">
          {/* キャリア表示部分 */}
          <div className="w-full md:flex md:justify-center lg:w-5/6">
            {/* 大画面の場合、レーダーチャートを左に、キャリアを右に表示するようにする。 */}
            <div className="hidden chart-container md:block md:w-1/2">
              <div className="md:px-8 lg:pl-8 lg:pr-16">
                <div className="my-4 pt-2">
                  <div className="py-4 lg:text-lg">
                    <p>{pieTitle}</p>
                  </div>
                  <div>
                    <Pie type="pie" data={pieData} options={pieOptions} />
                  </div>
                </div>
                <div className="my-4">
                  <div className="py-4 lg:text-lg">
                    <p>{raderTitle}</p>
                  </div>
                  <div>
                    <Radar type="rader" data={raderData} options={raderOptions} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="py-4 text-lg md:hidden">
                <p>{careerTitle}</p>
              </div>
              <div className="py-4">
                <Career careers={careerData} />
              </div>
            </div>
          </div>

          {/* スキルセット表示部分 */}
          <div className="w-full">
            <div className="my-12 md:hidden">
              <div className="py-4 text-lg">
                <p>{pieTitle}</p>
              </div>
              <Pie type="pie" data={pieData} options={pieOptions} />
            </div>
            <div className="my-12 md:hidden">
              <div className="py-4 text-lg">
                <p>{raderTitle}</p>
              </div>
              <div className="my-4">
                <Radar type="rader" data={raderData} options={raderOptions} />
              </div>
            </div>
            <div className="mt-12 text-lg lg:text-xl">
              <p className="py-2 ">{skillTitle}</p>
            </div>
            <div className="py-4">
              <Skillset skillsets={skillData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
