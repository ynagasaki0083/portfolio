import React from "react";
import SectionHeading from "@/app/Helper/SectionHeading";
import { AboutInfo } from "@/app/Data/data";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const About = () => {
  return (
    <div className="pt-16 pg-16 bg-[#0070f7]">
      {/* Section Heading */}
      <SectionHeading>about Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg-sub text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {AboutInfo.title}
          </h1>
          <p
            className="mt-6 text-base text-white
          "
          >
            {AboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <CheckBadgeIcon className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                frontend development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
