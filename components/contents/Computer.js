import { Radar, Pie } from "react-chartjs-2";

const totalSkillData = {
  labels: ["コンピュータ基礎", "ビジネス", "アプリ", "UI/UX", "インフラ", "AI"],
  datasets: [
    {
      label: "現在",
      data: [4, 3, 5, 4, 3, 3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "目標",
      data: [5, 6, 8, 7, 4, 4],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const raderOptions = {
  scales: {
    r: {
      beginAtZero: true,
      min: 0,
      max: 10,
    },
  },
  plugins: {
    legend: {
      labels: {
        padding: 30,
      },
      position: "bottom",
    },
  },
};

const langData = {
  labels: ["JavaScript", "Python", "Java", "その他"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 20, 15, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const langOptions = {
  plugins: {
    legend: {
      labels: {
        padding: 30,
      },
      position: "bottom",
    },
  },
};

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
              <ul>
                <li>
                  <p>情報理工学科卒業</p>
                </li>
                <li>
                  <p>Webプロダクト開発(6人チーム)</p>
                </li>
                <li>
                  <p>
                    機械学習の応用研究(学会発表/企業との共同研究/デモアプリ出展)
                  </p>
                </li>
                <li>
                  <p>SIer勤務(インフラエンジニア)</p>
                </li>
                <li>
                  <p>現在の取り組み</p>
                </li>
              </ul>
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
