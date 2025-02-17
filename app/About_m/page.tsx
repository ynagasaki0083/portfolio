import React from "react";
import { CarrerSkillArray, ProgramSkill, StudyList } from "@/app/Data/data";

const About_m = () => {
  return (
    <div className="w-full h-screen bg-[#474646] z-[-1]">
      <div className="bg-slate-200 mx-auto w-[70%] px-8">
        {/* Section Heading */}
        <br />
        <p className="text-black">生年月日：1994/11/15</p>
        <p className="text-black">出身地：千葉県</p>
        <br />
        <p>経歴</p>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">期間</th>
              <th className="border border-gray-300 px-4 py-2">経歴</th>
              <th className="border border-gray-300 px-4 py-2">取得スキル</th>
            </tr>
          </thead>
          <tbody>
            {CarrerSkillArray.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.period}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.career}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  {item.skill}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <p>スキル / 実績詳細</p>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {/* 期間と会社名を結合した見出し */}
              <th
                scope="col"
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                期間（開始/終了）
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                経歴
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                取得スキル
              </th>
            </tr>
          </thead>
          <tbody>
            {ProgramSkill.map((item, index) => (
              <tr key={index}>
                {/* 期間と会社名を結合したセル */}
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.period_start}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.period_end}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.career}
                </td>
                <td className="border border-gray-300 px-4 py-2 whitespace-pre-line">
                  {item.skill}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <p className="text-black">勉強中リスト</p>
        <div className="">
          {StudyList.map((item, index) => (
            <li key={index} className="text-black pl-4">
              {item.title}
            </li>
          ))}
        </div>

        <br />

        <p className="text-black">
          趣味欄はこちらから(▼リンクをあとで追加する▼)
        </p>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
          {/* Text Content */}
        </div>
      </div>
    </div>
  );
};

export default About_m;
