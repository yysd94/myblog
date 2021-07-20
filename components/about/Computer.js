import { Radar, Pie } from "react-chartjs-2";
import {
  totalSkillData,
  langData,
  raderOptions,
  langOptions,
} from "../contents/Content";
import Career from "./Career";
import Skillset from "./Skillset";

const Computer = () => {
  return (
    <div className="md:mx-2">
      <div className="my-16">
        <p className="text-2xl">Engineering</p>
      </div>
      <div className="md:flex md:justify-center md:px-16 lg:px-32 xl:px-48">
        <div className="md:w-screen md:grid md:grid-cols-5 md:gap-4">
          <div className="hidden md:block md:py-4 md:text-xl md:col-span-5">
            <p>これまでの経験</p>
          </div>
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
            <div className="py-4 text-xl md:hidden">
              <p>これまでの経験</p>
            </div>
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
  );
};

export default Computer;