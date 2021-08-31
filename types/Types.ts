//Page Contents Types
export interface CAREER_CONTENT {
    id: number,
    term: string,
    title: string,
    descriptions: string[],
};
export interface SKILLSET_CONTENT {
    id: number,
    title: string
    skills: string[],
};
export interface WORK_CONTENT {
    id: number,
    sammary: {
      title:string,
      imageSrc: string,
      descriptions: string[],
    },
    detail: {
      title: string,
      term: string,
      aim: string,
      features: string[],
      techs: {
          id: number,
          name: string,
          contents: string[],
      }[],
    },
};
export interface SOCIAL_LINK_CONTENT {
    id: number,
    title: string
    url: string,
    iconImage: string,
    description: string,
};

//Graph Data Types
export interface RADER_DATA {
    labels: string[],
    datasets: {
        label: string,
        data: number[],
        backgroundColor: string,
        borderColor: string,
        borderWidth: number,
    }[],
};
export interface PIE_DATA {
    labels: string[],
    datasets: {
        label: string,
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number,
    }[],
};

//Graph Options Types
export interface RADER_OPTION {
    scales: {
      r: {
        beginAtZero: boolean,
        min: number,
        max: number,
      },
    },
    plugins: {
      legend: {
        labels: {
          padding: number,
        },
        position: string,
      },
    },
};
export interface PIE_OPTION {
    plugins: {
      legend: {
        labels: {
          padding: number,
        },
        position: string,
      },
    },
};

//Page Layout Props' Types
export interface LAYOUT {
    children: any,
    title: string,
};

//Home Page Props' Types
//No Props exist

//About Page Props' Types
export interface CAREER{
    careers: CAREER_CONTENT[],
};
export interface SKILLSET{
    skillsets: SKILLSET_CONTENT[],
};
export interface DETAIL_PAGE{
    contents: {
        pageTitle: string,
        raderTitle: string,
        raderData: RADER_DATA,
        pieTitle: string,
        pieData: PIE_DATA,
        careerTitle: string,
        careerData: CAREER_CONTENT[],
        skillTitle: string,
        skillData: SKILLSET_CONTENT[],
    },      
};

//Work Page Props' Types
export interface APP_DETAIL{
    contentIndex: number,
    changeViewMode: () => void,
};
export interface APP_SAMMARY{
    changeViewMode: (index: number) => void,
};
export interface TECH {
    techs: WORK_CONTENT["detail"]["techs"];
};

//Social　Page Props' Types
//No Props exist
