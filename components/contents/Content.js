export const totalSkillData = {
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

export const raderOptions = {
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
  
export const langData = {
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
  
export const langOptions = {
    plugins: {
      legend: {
        labels: {
          padding: 16,
        },
        position: "bottom",
      },
    },
};
  
export const careers = [
    {
      id: 1,
      term: "2014.4 - 2020.3",
      title: "情報理工学科卒業",
      descriptions: [
        "情報工学の基礎を幅広く学びました。",
      ],
    },
    {
      id: 2,
      term: "2018.4 - 2019.3",
      title: "Webプロダクト開発",
      descriptions: [
        "6人チームで、Webサービスの企画から開発まで行いました。",
        "アジャイルプロセスやチームビルディング、UXデザイン等のノウハウを学びました。",
      ],
    },
    {
      id: 3,
      term: "2019.4 - 2020.3",
      title: "機械学習の応用研究",
      descriptions: [
        "学会発表や、企業さまとの共同研究、デモアプリ出展を経験しました。",
      ],
    },
    {
      id: 4,
      term: "2020.4 - 2020.11",
      title: "SIer勤務",
      descriptions: [
        "インフラエンジニアとしてプロジェクトに参画し、サーバやMWの基本設計から構築までを担当しました。",
        "仕事やプロジェクトの進め方、財務知識、実務的なインフラ設計構築を学びました。",
      ],
    },
    {
      id: 5,
      term: " - 2021",
      title: "現在の取り組み",
      descriptions: [
        "フロントエンドの領域を深めて、ユーザファーストを大切にした仕事をすることが私の目標です。",
        "土台となる技術への理解を深めるため、HTML5プロフェッショナル認定を取得しました。",
        "また、個人開発を通してモダンなスキルの習得や知識のアウトプットをしています。",
      ],
    },
];

export const skillsets = [
    {
      id: 1,
      title: "コンピュータ基礎",
      skills: [
        "コンピュータ・通信の仕組み",
        "Webアプリケーションの仕組み",
        "オブジェクト指向プログラミング",
        "プログラミング言語(Java, Python, JavaScript)",
        "データ構造とアルゴリズム",
        "Linuxコマンドライン",
      ],
    },
    {   
        id: 2,
        title: "ビジネス",
        skills: [
          "PC基本操作",
          "ビジネスライティング",
          "ロジカルシンキング",
          "プロジェクトの遂行経験",
          "テレワーク経験",
          "基本情報技術者/応用情報技術者 取得",
        ],
    },
    {
        id: 3,
        title: "アプリケーション",
        skills: [
          "SQL, ERモデル設計",
          "HTML/CSS/JavaScript (HTML5レベル2認定プロフェッショナル)",
          "フレームワーク(React, Redux, Next, Django(rest-framework), etc)",
          "テスト(Jest, msw, Django標準)",
          "CI/CD(Jenkins, versel, Docker)",
          "アジャイル開発経験, GitHub Flow",
        ],
    },
    {
        id: 4,
        title: "UI/UX",
        skills: [
          "UI設計",
          "ペルソナ設計",
          "カスタマージャーニー設計",
          "デザイン思考",
          "リーンキャンバス",
        ],
    },
    {
        id: 5,
        title: "インフラ",
        skills: [
          "サーバ/ネットワーク構築(実務)",
          "OS・ミドルウェアの設計(実務)",
          "シェルスクリプト(実務)",
          "AWS, Firebase",
        ],
    },
    {
        id: 6,
        title: "AI",
        skills: [
          "機械学習の基礎理解(クラスタリング、パターン認識、ニューラルネット/深層学習)",
          "SVMを応用した打音検査の自動化システムの開発",
          "学会発表経験、企業さまとの共同研究経験",
          "出展用デモアプリの作成",
          "ライブラリ使用経験(scikit-learn, tensorflow)",
        ],
    },
]

