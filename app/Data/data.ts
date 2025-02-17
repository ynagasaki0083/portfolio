/* データはないので自分で作成する！！！ */

export const BaseInfo = {
  name: "yuya nagasaki",
  position: "Fledgling web developer",
  description: "なんやかんや書く",
  //   profilePic: "/karihero.jpg",
  profilePic: "./karihero.jpg",
};

export const AboutInfo = {
  title: "About me",
  description:
    "長崎優哉です。現在の会社で正社員としてAWSを5年ほど触っており、自社決済代行システムの運用保守を行っています。プログラム言語自体は社内システムのVBが修正可能レベルですが、運用よりも開発者メンバーとしてプログラムを書く側に興味を持ち独学で勉強中です。まだまだ拙い部分が多いですが、少しづつでも知識面・技術面でアップデートしていきます。",
  client: "50+",
  experience: "3+",
  project: "20+",
  website: "100+",
};

export const PersonalData = {
  birthday: "1994/11/15",
  MyName: "長﨑優哉",
};

export const ProjectData = [
  {
    id: 1,
    image: "./kariproject01.jpg",
    url: "https://qiita.com/",
  },
  {
    id: 2,
    image: "./kariproject02.jpg",
    url: "http://www.shiftup.net/",
  },
];

export const SkillsData = [
  {
    id: 1,
    title: "Nextjs",
    image: "./nextjs-icon-dark-background.png",
    experience: "2週間",
  },
  {
    id: 2,
    title: "TypeScript",
    image: "./ts-logo-128.svg",
    experience: "2週間",
  },
];

export const CarrerSkillArray = [
  {
    period: "2017年4月 - 2018年6月",
    career: "WDB工学株式会社で派遣として船舶エンジンのエンジニアとして働く",
    skill: "ディーゼル3気筒エンジン整備、その他改善提案",
  },
  {
    period: "2018年6月 - 現在",
    career:
      "テレコムクレジット株式会社で決済代行会社のサポートデスクとして働く。",
    skill: "サーバーメンテナンス、PCIDSS対応、Pマーク対応",
  },
];

export const ProgramSkill = [
  {
    period_start: "2018年6月",
    period_end: "2019年6月",
    career: "サポートデスク並びにサーバーメンテナンス対応を実施",
    skill: `サーバーメンテナンス：Windows/Linux(centOS,AmazonLinux)
            PCIDSS対応
            Pマーク対応`,
  },
  {
    period_start: "2019年6月",
    period_end: "現在",
    career: "決済システムの保守、案件調整、軽微プログラム修正を実施",
    skill: `AWS運用保守
            python：ページスクレイピングレベル
            VBS：社内システムの要件調整-開発まで単独実施
            案件調整：決済システムにpaypay導入`,
  },
];

export const StudyList = [
  {
    title: "TypeScript/Nextjs",
  },
  {
    title: "TailWind",
  },
];
