import { BaseInfo } from "@/app/Data/data";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    // Navバーより下のdiv
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen text-bg overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold ">
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>
            {/* Button */}
            <button
              className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold tenxt-sm md:text-lg
            transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            >
              <span className="text-white font-semibold">履歴書DL</span>
              <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
          {/* Image content */}
          <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={700}
              height={700}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
