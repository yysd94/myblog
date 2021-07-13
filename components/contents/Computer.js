import { Radar, Pie } from "react-chartjs-2";
import {totalSkillData, langData, raderOptions, langOptions,} from "./Content";
import Career from "./Career";
import Skillset from "./Skillset";

const Computer = () => {  
  return (
    <div className="md:mx-16">
      <div className="my-16">
        <p className="text-2xl">Engineering</p>
      </div>
      <div className="md:grid md:grid-cols-5 md:gap-8">
        <div className="hidden md:block md:my-4 md:col-span-2">
          <Radar data={totalSkillData} options={raderOptions} />
        </div>
        <div className="m-4 md:col-span-3">
          <div className="py-4 text-xl">
            <p>これまでの経験</p>
          </div>
          <div className="py-4">
            <Career />
          </div>
        </div>
        <div className="hidden md:block md:my-4 md:col-span-2">
          <Pie data={langData} options={langOptions} />
        </div>
        <div className="m-4 md:col-span-3">
          <div className="py-4 text-xl">
            <p>スキルセット</p>
          </div>
          <div className="my-4 md:hidden">
            <Radar data={totalSkillData} options={raderOptions} />
          </div>
          <div className="py-4">
            <Skillset />
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
