import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0070f7] z-[10000]">
      <div>
        <Image
          src="logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home.</div>
        <div>About.</div>
        <div>Hobby.</div>
        <div>Projects.</div>
        <div>Work.</div>
        <div>Contacts.</div>
      </div>
      <p className="text-white mt-6 text-center">
        © yuya nagasaki 2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
