import { Radar, Pie } from "react-chartjs-2";
import CareerItem from "./CareerItem";

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

const careers = [
  {
    term: "2014.4 - 2020.3",
    title: "情報理工学科卒業",
    descriptions: [
      "情報工学の基礎を幅広く学びました。",
    ]
  },
  {
    term: "2018.4 - 2019.3",
    title: "Webプロダクト開発",
    descriptions: [
      "6人チームで、Webサービスの企画から開発まで行いました。",
      "アジャイルプロセスやチームビルディング、UXデザイン等のノウハウを学びました。",
    ]
  },
  {
    term: "2019.4 - 2020.3",
    title: "機械学習の応用研究",
    descriptions: [
      "学会発表や、企業さまとの共同研究、デモアプリ出展を経験しました。",
    ]
  },
  {
    term: "2020.4 - 2020.11",
    title: "SIer勤務",
    descriptions: [
      "インフラエンジニアとしてプロジェクトに参画し、サーバやMWの基本設計から構築までを担当しました。",
      "仕事やプロジェクトの進め方、財務知識、実務的なインフラ設計構築を学びました。",
    ]
  },
  {
    term: " - 2021",
    title: "現在の取り組み",
    descriptions: [
      "フロントエンドの領域を深めて、ユーザファーストを大切にした仕事をすることが私の目標です。",
      "土台となる技術への理解を深めるため、HTML5プロフェッショナル認定を取得しました。",
      "また、個人開発を通してモダンなスキルの習得や知識のアウトプットをしています。",
    ]
  },
]

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
                {careers.map((career) => 
                  <li>
                  <CareerItem 
                    term={career.term}
                    title={career.title}
                    descriptions={career.descriptions}
                  />
                </li>
                )}
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
