import { Radar, Pie } from "react-chartjs-2";
import {totalSkillData, langData, raderOptions, langOptions,} from "./Content";
import Career from "./Career";

const Computer = () => {  
  return (
    <div className="md:mx-16">
      <div className="my-16">
        <p className="text-2xl">Engineering</p>
      </div>
      <div className="md:grid md:grid-cols-5 md:gap-8">
        <div className="hidden md:block md:my-8 md:col-span-2">
          <Radar data={totalSkillData} options={raderOptions} />
        </div>
        <div className="md:col-span-3">
          <div className="my-8 mx-4">
            <div className="py-4 text-xl">
              <p>これまでの経験</p>
            </div>
            <div className="py-4">
              <Career />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:my-8 md:col-span-2">
          <Pie data={langData} options={langOptions} />
        </div>
        <div className="my-8 md:col-span-3">
          <div className="py-4 text-xl">
            <p>スキルセット</p>
          </div>
          <div className="my-8 md:hidden">
            <Radar data={totalSkillData} options={raderOptions} />
          </div>
          <div className="py-4">
            <ul>
              <li>
                <p>コンピュータ基礎</p>
              </li>
              <li>
                <p>ビジネス</p>
              </li>
              <li>
                <p>アプリケーション</p>
              </li>
              <li>
                <p>UI/UX</p>
              </li>
              <li>
                <p>インフラ</p>
              </li>
              <li>
                <p>AI</p>
              </li>
            </ul>
          </div>
          <div className="m-4 md:hidden">
            <Pie data={langData} options={langOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computer;
