import React from "react";

const About_m = () => {
  return (
    <div className="w-full h-screen bg-[#474646] z-[-1]">
      {/* Section Heading */}
      <p className="text-white">生年月日：1994/11/15</p>
      <p className="text-white">出身地：千葉県</p>
      <p className="text-white">
        経歴：2017年4月 - 2018年6月
        WDB工学株式会社で派遣として船舶エンジンのエンジニアとして働く
      </p>
      <p className="text-white">
        経歴：2018年6月 - 現在
        テレコムクレジット株式会社で決済代行会社のSEとして働く。
      </p>
      <p className="text-white">スキル：</p>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
      </div>
    </div>
  );
};

export default About_m;
