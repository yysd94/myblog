import {
  RADER_DATA,
  RADER_OPTION,
  PIE_DATA,
  PIE_OPTION,
  CAREER_CONTENT,
  SKILLSET_CONTENT,
  SOCIAL_LINK_CONTENT,
  WORK_CONTENT,
} from "../../types/Types";

export const totalEngineerSkillData: RADER_DATA = {
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
export const totalMusicSkillData: RADER_DATA = {
  labels: [
    "クラシック",
    "ジャズ",
    "ポップ/ロック",
    "ワールド",
    "エレクトロ",
    "その他",
  ],
  datasets: [
    {
      label: "得意",
      data: [6, 8, 4, 4, 3, 3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "興味",
      data: [4, 10, 6, 6, 6, 4],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};
export const langData: PIE_DATA = {
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
export const musicSkillData: PIE_DATA = {
  labels: ["ジャズピアノ", "クラシックピアノ", "作編曲", "その他"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 20, 25, 5],
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

export const raderOptions: RADER_OPTION = {
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

export const pieOptions: PIE_OPTION = {
  plugins: {
    legend: {
      labels: {
        padding: 16,
      },
      position: "bottom",
    },
  },
};

export const careersOfEngineer: CAREER_CONTENT[] = [
  {
    id: 1,
    term: "2014.4 - 2020.3",
    title: "情報理工学科卒業",
    descriptions: ["情報工学の基礎を幅広く学びました。"],
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

export const careersOfMusic: CAREER_CONTENT[] = [
  {
    id: 1,
    term: "2000.4 - 2012.3",
    title: "クラシックピアノを経験",
    descriptions: [
      "クラシックピアノのレッスンを受け、ピアノや音楽の基礎を習得しました。",
      "発表会で演奏した他、コンペに参加もしました。",
    ],
  },
  {
    id: 2,
    term: "2010.4 - 2012.7",
    title: "トランペットを経験",
    descriptions: [
      "吹奏楽部でトランペットを経験しました。",
      "音感や音楽の知識を生かして学生指揮も担当しました。",
    ],
  },
  {
    id: 3,
    term: "2014.4 - 2020.3",
    title: "ジャズピアノを経験",
    descriptions: [
      "大学のジャズ研究会にてジャズピアノに没頭し、多くのセッションを経験したり、音楽理論を学びました。",
      "有志のビッグバンドにも参加し、サークル設立・運営に関わったり、コンテストに出場しました。",
    ],
  },
  {
    id: 4,
    term: " - 2021",
    title: "現在の活動",
    descriptions: [
      "セッションや社会人ビッグバンドに参加し、ジャズピアノの演奏を楽しく続けています。",
      "また、音楽理論や様々なジャンルの経験を活かし、作編曲をやっています。",
    ],
  },
];

export const skillsetsOfEngineer: SKILLSET_CONTENT[] = [
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
      "基本情報技術者/応用情報技術者",
    ],
  },
  {
    id: 3,
    title: "アプリケーション",
    skills: [
      "HTML/CSS/JavaScript (HTML5レベル2認定プロフェッショナル)",
      "フレームワーク(React, Redux, Next, Django(rest-framework), 等)",
      "SQL, ERモデル設計, RESTful API設計",
      "テスト(Jest, msw, Django標準)",
      "CI/CD(Jenkins, Vercel, Docker)",
      "アジャイル開発経験, GitHub Flow",
    ],
  },
  {
    id: 4,
    title: "UI/UX",
    skills: [
      "ペルソナ設計",
      "カスタマージャーニー設計",
      "デザイン思考",
      "リーンキャンバス",
      "...etc",
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
];

export const skillsetsOfMusic: SKILLSET_CONTENT[] = [
  {
    id: 1,
    title: "ピアノ演奏",
    skills: ["ジャズピアノ/即興", "クラシックピアノ", "ポピュラーピアノ"],
  },
  {
    id: 2,
    title: "作編曲",
    skills: [
      "ジャズアレンジ",
      "演奏人数や形式に合わせたアレンジ",
      "採譜、楽曲解析",
      "ピアノソロ/インスト/歌モノの作曲",
      "(作詞やギターアレンジは苦手)",
    ],
  },
  {
    id: 3,
    title: "その他",
    skills: ["オーディオ機材の使用経験(マイク、アンプ、ミキサー、配線、etc)"],
  },
];

export const socialLinks: SOCIAL_LINK_CONTENT[] = [
  {
    id: 1,
    title: "Twitter",
    url: "https://twitter.com/Yubon94",
    iconImage: "",
    description: "日々の出来事や、興味のある技術、趣味について呟きます",
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/Yubon94",
    iconImage: "",
    description: "開発したものをgithubで管理しています。",
  },
  {
    id: 3,
    title: "Youtube",
    url: "https://www.youtube.com/channel/UCXUGCY4Vnmjk5CoUcqUmCjA/featured",
    iconImage: "",
    description: "音楽ネタや自作曲を発信するチャンネルです。",
  },
  // {
  //   id: 4,
  //   title: "Qiita",
  //   url: "https://qiita.com/YasudaYu",
  //   iconImage: "/qiita-logo.png",
  //   description: "勉強したり興味を持った技術をまとめています。",
  // },
];

export const works: WORK_CONTENT[] = [
  {
    id: 1,
    sammary: {
      title: "My Homepage",
      imageSrc: "/my-homepage.jpg",
      descriptions: [
        "自分のことを少しでも興味を持ってもらえたらと思い、Webサイトを自作しました。",
        "静的サイトジェネレータやグラフの活用、レスポンシブデザインに挑戦しました。",
      ],
    },
    detail: {
      title: "My Homepage",
      term: "2021.06 - 2021.07",
      aim: "自分のことを知ってもらうために、Webページであればより手軽に閲覧でき、経歴書では表現しきれない部分も伝えられるのではと考え、自作しました。",
      features: [
        "経歴ページでは、キャリアの指向性を直感的に伝えるために、チャートを利用してみました。",
        "静的サイトジェネレータ(Next)やレスポンシブデザインに挑戦しました。",
      ],
      techs: [
        {
          id: 1,
          name: "UI",
          contents: ["Next.js", "Tailwind css", "Chart.js"],
        },
        {
          id: 2,
          name: "Backend",
          contents: ["None"],
        },
        {
          id: 3,
          name: "CI/CD",
          contents: ["react-testing-library", "Docker", "Vercel"],
        },
        {
          id: 4,
          name: "Others",
          contents: ["レスポンシブデザイン"],
        },
      ],
    },
  },
];
