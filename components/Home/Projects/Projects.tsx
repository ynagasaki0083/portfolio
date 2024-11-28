import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { ProjectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>MY Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {ProjectData.map((Projects) => {
          return (
            <div
              key={Projects.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={Projects.url} target="_blank">
                <Image
                  src={Projects.image}
                  alt="Project"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
